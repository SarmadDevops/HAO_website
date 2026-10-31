import { LuLoaderCircle } from "react-icons/lu";
import { volunteerDepartments } from "../../data/organization";
import { useForm } from "../../hooks/useForm";
import { rules } from "../../utils/validation";
import FormField from "./FormField";
import FormStatus from "./FormStatus";

const initialValues = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  institute: "",
  department: "",
};

const schema = {
  fullName: [rules.required("Please enter your full name."), rules.maxLength(80)],
  phone: [rules.required("Please enter your phone number."), rules.phone()],
  email: [rules.required("Please enter your email address."), rules.email()],
  city: [rules.required("Please enter your city."), rules.maxLength(60)],
  institute: [rules.required("Please enter your institute or workplace."), rules.maxLength(120)],
  department: [rules.required("Please choose a department.")],
};

export default function VolunteerForm({ onDone }) {
  const { errors, status, errorType, formRef, fieldProps, handleSubmit, reset } = useForm({
    formType: "volunteer",
    initialValues,
    schema,
  });
  const loading = status === "loading";

  if (status === "success") {
    return (
      <div className="space-y-5">
        <FormStatus
          status="success"
          successTitle="Thank you for applying."
          successText="Your application has been received. A member of our team will contact you soon."
        />
        <div className="flex flex-wrap gap-3">
          {onDone && (
            <button type="button" className="btn btn-primary" onClick={onDone} data-autofocus>
              Close
            </button>
          )}
          <button type="button" className="btn btn-outline" onClick={reset}>
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  const field = (name, label, control, options = {}) => (
    <FormField
      label={label}
      htmlFor={`volunteer-${name}`}
      error={errors[name]}
      errorId={`volunteer-${name}-error`}
      required
      {...options}
    >
      {control}
    </FormField>
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {field(
          "fullName",
          "Full name",
          <input type="text" autoComplete="name" className="form-input" {...fieldProps("fullName")} data-autofocus />,
          { className: "sm:col-span-2" }
        )}
        {field(
          "phone",
          "Phone number",
          <input type="tel" autoComplete="tel" inputMode="tel" placeholder="03XX XXXXXXX" className="form-input" {...fieldProps("phone")} />
        )}
        {field(
          "email",
          "Email address",
          <input type="email" autoComplete="email" className="form-input" {...fieldProps("email")} />
        )}
        {field(
          "city",
          "City",
          <input type="text" autoComplete="address-level2" className="form-input" {...fieldProps("city")} />
        )}
        {field(
          "institute",
          "Institute name",
          <input type="text" autoComplete="organization" className="form-input" {...fieldProps("institute")} />,
          { hint: "Your university, college or workplace." }
        )}
        {field(
          "department",
          "Department you'd like to join",
          <select className="form-input" {...fieldProps("department")}>
            <option value="">Choose a department</option>
            {volunteerDepartments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>,
          { className: "sm:col-span-2" }
        )}
      </div>

      <FormStatus status={status} errorType={errorType} whatsappMessage="Assalam o Alaikum, I would like to volunteer with HAO." />

      <button type="submit" className="btn btn-primary btn-lg w-full sm:w-auto" disabled={loading}>
        {loading ? (
          <>
            <LuLoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Submit application"
        )}
      </button>
      <p className="text-sm text-muted">
        Fields marked <span className="text-secondary">*</span> are required. We use your details only to contact you
        about volunteering.
      </p>
    </form>
  );
}
