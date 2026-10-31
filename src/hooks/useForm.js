import { useRef, useState } from "react";
import { FormNotConfiguredError, submitForm } from "../services/api";
import { validate } from "../utils/validation";

/**
 * Shared form state: values, validation, and submission status.
 * status: "idle" | "loading" | "success" | "error"
 * errorType: "not-configured" | "failed" | null
 */
export function useForm({ formType, initialValues, schema }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorType, setErrorType] = useState(null);
  const formRef = useRef(null);

  const setField = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  };

  const fieldProps = (name) => ({
    name,
    id: `${formType}-${name}`,
    value: values[name],
    onChange: (event) => setField(name, event.target.value),
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `${formType}-${name}-error` : undefined,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "loading") return;

    const nextErrors = validate(values, schema);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = formRef.current?.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`);
      firstInvalid?.focus();
      return;
    }

    setStatus("loading");
    setErrorType(null);
    try {
      await submitForm(formType, values);
      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      setErrorType(error instanceof FormNotConfiguredError ? "not-configured" : "failed");
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorType(null);
    setErrors({});
  };

  return { values, errors, status, errorType, formRef, fieldProps, handleSubmit, reset };
}
