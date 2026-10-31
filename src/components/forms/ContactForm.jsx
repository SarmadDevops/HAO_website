import { LuLoaderCircle } from "react-icons/lu";
import { useForm } from "../../hooks/useForm";
import { rules } from "../../utils/validation";
import FormField from "./FormField";
import FormStatus from "./FormStatus";

const SUBJECTS = ["General enquiry", "Donations", "Volunteering", "Partnership", "Media"];

const initialValues = { name: "", email: "", phone: "", subject: SUBJECTS[0], message: "" };

const schema = {
  name: [rules.required("Please enter your name."), rules.maxLength(80)],
  email: [rules.required("Please enter your email address."), rules.email()],
  phone: [rules.phone()],
  subject: [rules.required("Please choose a subject.")],
  message: [
    rules.required("Please write a message."),
    rules.minLength(10, "Please tell us a little more (at least 10 characters)."),
    rules.maxLength(2000),
  ],
};

export default function ContactForm() {
  const { errors, status, errorType, formRef, fieldProps, handleSubmit, reset } = useForm({
    formType: "contact",
    initialValues,
    schema,
  });
  const loading = status === "loading";

  if (status === "success") {
    return (
      <div className="space-y-5">
        <FormStatus
          status="success"
          successTitle="Thank you, your message has been sent."
          successText="We usually reply within a few working days."
        />
        <button type="button" className="btn btn-outline" onClick={reset}>
          Send another message
        </button>
      </div>
    );
  }

  const errorProps = (name) => ({
    htmlFor: `contact-${name}`,
    error: errors[name],
    errorId: `contact-${name}-error`,
  });

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Your name" required {...errorProps("name")}>
          <input type="text" autoComplete="name" className="form-input" {...fieldProps("name")} />
        </FormField>
        <FormField label="Email address" required {...errorProps("email")}>
          <input type="email" autoComplete="email" className="form-input" {...fieldProps("email")} />
        </FormField>
        <FormField label="Phone number" {...errorProps("phone")}>
          <input type="tel" autoComplete="tel" inputMode="tel" className="form-input" {...fieldProps("phone")} />
        </FormField>
        <FormField label="Subject" required {...errorProps("subject")}>
          <select className="form-input" {...fieldProps("subject")}>
            {SUBJECTS.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Message" required className="sm:col-span-2" {...errorProps("message")}>
          <textarea rows={6} className="form-input resize-y" {...fieldProps("message")} />
        </FormField>
      </div>

      <FormStatus status={status} errorType={errorType} whatsappMessage="Assalam o Alaikum, I have a question for HAO." />

      <button type="submit" className="btn btn-primary btn-lg w-full sm:w-auto" disabled={loading}>
        {loading ? (
          <>
            <LuLoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
