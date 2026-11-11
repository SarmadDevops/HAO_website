/**
 * Form submission service.
 *
 * Each form posts to its own endpoint, configured through public environment
 * variables (see .env.example). Data is sent as multipart FormData, which is
 * accepted by Google Apps Script web apps, Formspree, Getform and most custom
 * backends without a CORS preflight request.
 *
 * When an endpoint is not configured, submitForm() throws
 * FormNotConfiguredError so the UI can tell the visitor how else to reach
 * HAO. Nothing is ever reported as "sent" unless a server accepted it.
 */

const ENDPOINTS = {
  volunteer: import.meta.env.VITE_VOLUNTEER_FORM_ENDPOINT,
  contact: import.meta.env.VITE_CONTACT_FORM_ENDPOINT,
  newsletter: import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT,
};

const TIMEOUT_MS = 20000;

// Forms submitted through Netlify Forms when no custom endpoint is set.
// Registered by the hidden <form name="volunteer" data-netlify> in index.html;
// email notifications are configured in the Netlify dashboard.
const NETLIFY_FORMS = {
  volunteer: { subject: "New HAO Volunteer Registration" },
};
const viaNetlify = (formType) =>
  !ENDPOINTS[formType] && import.meta.env.PROD && Boolean(NETLIFY_FORMS[formType]);

export class FormNotConfiguredError extends Error {
  constructor(formType) {
    super(`No endpoint is configured for the "${formType}" form.`);
    this.name = "FormNotConfiguredError";
    this.formType = formType;
  }
}

export function isFormConfigured(formType) {
  return Boolean(ENDPOINTS[formType]) || viaNetlify(formType);
}

/**
 * @param {"volunteer" | "contact" | "newsletter"} formType
 * @param {Record<string, string>} values
 */
export async function submitForm(formType, values) {
  if (viaNetlify(formType)) return submitToNetlify(formType, values);
  const url = ENDPOINTS[formType];
  if (!url) throw new FormNotConfiguredError(formType);

  const body = new FormData();
  Object.entries(values).forEach(([key, value]) => body.append(key, value ?? ""));
  body.append("formType", formType);
  body.append("submittedAt", new Date().toISOString());
  body.append("page", window.location.pathname);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: "POST",
      body,
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`The server responded with status ${response.status}.`);
    }

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = await response.json().catch(() => null);
      const rejected =
        data && (data.result === "error" || data.ok === false || data.success === false);
      if (rejected) {
        throw new Error(data.message || data.error || "The submission was not accepted.");
      }
      return data;
    }
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function submitToNetlify(formType, values) {
  const body = new URLSearchParams({
    "form-name": formType,
    subject: NETLIFY_FORMS[formType].subject,
    "bot-field": "",
    ...Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value ?? ""])),
    formType,
    submittedAt: new Date().toISOString(),
    page: window.location.pathname,
  });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`The server responded with status ${response.status}.`);
    }
    return null;
  } finally {
    clearTimeout(timer);
  }
}
