import { LuLoaderCircle, LuSend } from "react-icons/lu";
import { site } from "../../config/site";
import { useForm } from "../../hooks/useForm";
import { rules } from "../../utils/validation";

const schema = { email: [rules.required("Please enter your email address."), rules.email()] };

export default function NewsletterForm() {
  const { errors, status, errorType, formRef, fieldProps, handleSubmit } = useForm({
    formType: "newsletter",
    initialValues: { email: "" },
    schema,
  });

  if (status === "success") {
    return (
      <p role="status" className="text-white/90">
        Thank you for subscribing. You will hear from us with news from the field.
      </p>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex">
        <input
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          className="min-h-[46px] w-full min-w-0 rounded-l-md border border-white/20 bg-white/10 px-3.5 text-white placeholder:text-white/60 focus:border-accent focus:outline-none"
          {...fieldProps("email")}
        />
        <button
          type="submit"
          className="inline-flex min-h-[46px] shrink-0 items-center justify-center rounded-r-md bg-accent px-4 font-semibold text-dark transition-colors hover:bg-[#e69a22] disabled:opacity-60"
          disabled={status === "loading"}
          aria-label="Subscribe to the newsletter"
        >
          {status === "loading" ? (
            <LuLoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
          ) : (
            <LuSend className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>
      {errors.email && (
        <p id="newsletter-email-error" className="mt-2 text-sm font-medium text-[#ffb4a8]" role="alert">
          {errors.email}
        </p>
      )}
      {status === "error" && (
        <p className="mt-2 text-sm text-white/80" role="alert">
          {errorType === "not-configured"
            ? "Newsletter sign-up is not available yet. "
            : "Something went wrong. Please try again, or "}
          <a href={`mailto:${site.contact.email}?subject=Newsletter`} className="font-semibold text-accent underline">
            email us
          </a>
          {errorType === "not-configured" ? " to be added to the list." : "."}
        </p>
      )}
    </form>
  );
}
