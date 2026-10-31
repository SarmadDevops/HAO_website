import { LuCircleAlert, LuCircleCheck } from "react-icons/lu";
import { site, whatsappLink } from "../../config/site";

/**
 * Feedback after a submission attempt.
 * When no endpoint is configured we say so honestly and offer other ways
 * to reach the team instead of pretending the form was sent.
 */
export default function FormStatus({ status, errorType, successTitle, successText, whatsappMessage }) {
  if (status === "success") {
    return (
      <div role="status" className="flex gap-3 rounded-md border border-success/30 bg-success/5 p-4 text-ink">
        <LuCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
        <div>
          <p className="font-semibold text-dark">{successTitle}</p>
          {successText && <p className="mt-1 text-muted">{successText}</p>}
        </div>
      </div>
    );
  }

  if (status !== "error") return null;

  const notConfigured = errorType === "not-configured";
  return (
    <div role="alert" className="flex gap-3 rounded-md border border-danger/30 bg-danger/5 p-4 text-ink">
      <LuCircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-danger" aria-hidden="true" />
      <div>
        <p className="font-semibold text-dark">
          {notConfigured ? "Online submissions are not available yet." : "Your message could not be sent."}
        </p>
        <p className="mt-1 text-muted">
          {notConfigured
            ? "Your details have not been sent. Please reach us directly:"
            : "Please check your connection and try again, or reach us directly:"}{" "}
          <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">
            WhatsApp
          </a>{" "}
          or{" "}
          <a href={`mailto:${site.contact.email}`} className="font-semibold text-primary underline">
            email
          </a>
          .
        </p>
      </div>
    </div>
  );
}
