const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const rules = {
  required:
    (message = "This field is required.") =>
    (value) =>
      String(value ?? "").trim() ? null : message,

  email:
    (message = "Please enter a valid email address.") =>
    (value) =>
      !value || EMAIL_PATTERN.test(String(value).trim()) ? null : message,

  phone:
    (message = "Please enter a valid phone number, e.g. 0300 1234567.") =>
    (value) => {
      if (!value) return null;
      const digits = String(value).replace(/[\s\-()]/g, "");
      return /^\+?\d{10,15}$/.test(digits) ? null : message;
    },

  minLength: (length, message) => (value) =>
    !value || String(value).trim().length >= length
      ? null
      : message || `Please enter at least ${length} characters.`,

  maxLength: (length, message) => (value) =>
    !value || String(value).length <= length
      ? null
      : message || `Please keep this under ${length} characters.`,
};

/**
 * Runs a schema of `{ field: [rule, rule] }` against values.
 * Returns an object containing only the fields that failed.
 */
export function validate(values, schema) {
  const errors = {};
  Object.entries(schema).forEach(([field, fieldRules]) => {
    for (const rule of fieldRules) {
      const error = rule(values[field]);
      if (error) {
        errors[field] = error;
        break;
      }
    }
  });
  return errors;
}
