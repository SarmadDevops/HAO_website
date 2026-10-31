/**
 * Label + control + error message. `children` receives nothing; pass the
 * control with props from useForm().fieldProps(name).
 */
export default function FormField({ label, htmlFor, error, errorId, required, hint, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="form-label">
        {label}
        {required ? (
          <span className="text-secondary" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-muted"> (optional)</span>
        )}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-sm text-muted">{hint}</p>}
      {error && (
        <p id={errorId} className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
