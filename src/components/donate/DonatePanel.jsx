import { useEffect, useId, useRef, useState } from "react";
import { LuArrowLeft, LuArrowRight, LuCheck, LuCopy, LuInfo, LuMail } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { activePaymentMethods, donationFunds } from "../../config/donations";
import { site, whatsappLink } from "../../config/site";
import { formatRupees } from "../../utils/format";
import { fundIcon, paymentIcon } from "./icons";

const PRESET_AMOUNTS = [1000, 2500, 5000, 10000];

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-sm font-semibold text-primary transition-colors hover:border-primary"
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
    >
      {copied ? <LuCheck className="h-4 w-4" aria-hidden="true" /> : <LuCopy className="h-4 w-4" aria-hidden="true" />}
      <span aria-hidden="true">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

/** Large selectable card backed by a visually hidden radio input. */
function ChoiceCard({ name, value, checked, onChange, icon: Icon, title, description }) {
  return (
    <label
      className={`relative flex cursor-pointer flex-col rounded-xl border-2 p-5 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/40 ${
        checked ? "border-primary bg-primary-soft" : "border-border bg-surface hover:border-primary/40"
      }`}
    >
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
      <span
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
          checked ? "bg-accent text-dark" : "bg-accent-soft text-dark"
        }`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="mt-4 block pr-6 font-bold text-dark">{title}</span>
      {description && <span className="mt-1 block text-sm text-muted">{description}</span>}
      {checked && (
        <span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
          <LuCheck className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
        </span>
      )}
    </label>
  );
}

/**
 * Five-step donation guide used by the donate dialog and the /donate page.
 * No payment is taken on the website: donors pick an amount and fund,
 * transfer using the configured account details, then share their receipt.
 */
export default function DonatePanel({ initialFundId, stickyFooter = false }) {
  const id = useId();
  const headingRef = useRef(null);
  const hasMounted = useRef(false);

  const [step, setStep] = useState(0);
  const [preset, setPreset] = useState(PRESET_AMOUNTS[1]);
  const [customAmount, setCustomAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [fundId, setFundId] = useState(
    donationFunds.some((fund) => fund.id === initialFundId) ? initialFundId : donationFunds[0].id
  );
  const [methodId, setMethodId] = useState(activePaymentMethods[0]?.id ?? null);
  const [donorName, setDonorName] = useState("");
  const [donorContact, setDonorContact] = useState("");

  const hasMethods = activePaymentMethods.length > 0;
  const amount = customAmount ? Number(customAmount) : preset;
  const fund = donationFunds.find((item) => item.id === fundId);
  const method = activePaymentMethods.find((item) => item.id === methodId);

  const steps = [
    "Choose an amount",
    "Choose donation type",
    "How would you like to pay",
    "Your details (optional)",
    hasMethods ? "Confirm & share your receipt" : "Confirm & request account details",
  ];
  const isLast = step === steps.length - 1;

  useEffect(() => {
    if (hasMounted.current) headingRef.current?.focus();
    hasMounted.current = true;
  }, [step]);

  const aboutDonor = [
    donorName.trim() && `My name is ${donorName.trim()}.`,
    donorContact.trim() && `You can reach me at ${donorContact.trim()}.`,
  ]
    .filter(Boolean)
    .join(" ");
  const message = hasMethods
    ? `Assalam o Alaikum, I have donated ${formatRupees(amount)} to the ${fund.name}${
        method ? ` by ${method.label}` : ""
      }. My receipt is attached. ${aboutDonor}`
    : `Assalam o Alaikum, I would like to donate ${formatRupees(amount)} to the ${fund.name}. Please share the donation details. ${aboutDonor}`;
  const emailSubject = hasMethods ? `Donation receipt: ${fund.name}` : `Donation: ${fund.name}`;
  const emailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
    message.trim()
  )}`;

  const next = () => {
    if (step === 0 && !(amount > 0)) {
      setAmountError("Please choose or enter an amount.");
      return;
    }
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };
  const back = () => setStep((current) => Math.max(current - 1, 0));

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-accent-soft" aria-hidden="true">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <ol className="sr-only">
        {steps.map((label, index) => (
          <li key={label} aria-current={index === step ? "step" : undefined}>
            Step {index + 1}: {label}
          </li>
        ))}
      </ol>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-accent">
        Step {step + 1} of {steps.length}
      </p>
      <h3 ref={headingRef} tabIndex={-1} className="heading-md mt-1.5 focus:outline-none">
        {steps[step]}
      </h3>

      <div className="mt-6">
        {step === 0 && (
          <fieldset>
            <legend className="sr-only">Donation amount</legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {PRESET_AMOUNTS.map((value) => {
                const checked = !customAmount && preset === value;
                return (
                  <label
                    key={value}
                    className={`flex min-h-[56px] cursor-pointer items-center justify-center rounded-xl border-2 px-3 text-center font-bold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/40 ${
                      checked ? "border-primary bg-primary-soft text-primary" : "border-border text-dark hover:border-primary/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`${id}-amount`}
                      value={value}
                      checked={checked}
                      onChange={() => {
                        setPreset(value);
                        setCustomAmount("");
                        setAmountError("");
                      }}
                      className="sr-only"
                      data-autofocus={value === PRESET_AMOUNTS[1] ? true : undefined}
                    />
                    {formatRupees(value)}
                  </label>
                );
              })}
            </div>
            <label htmlFor={`${id}-custom`} className="form-label mt-6">
              Or enter another amount
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center font-semibold text-muted">
                Rs
              </span>
              <input
                id={`${id}-custom`}
                type="text"
                inputMode="numeric"
                autoComplete="off"
                placeholder="Any amount"
                value={customAmount}
                onChange={(event) => {
                  setCustomAmount(event.target.value.replace(/\D/g, "").slice(0, 9));
                  setAmountError("");
                }}
                aria-invalid={amountError ? true : undefined}
                aria-describedby={amountError ? `${id}-amount-error` : undefined}
                className="form-input rounded-xl pl-12"
              />
            </div>
            {amountError && (
              <p id={`${id}-amount-error`} className="form-error" role="alert">
                {amountError}
              </p>
            )}
          </fieldset>
        )}

        {step === 1 && (
          <fieldset>
            <legend className="sr-only">Donation type</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              {donationFunds.map((item) => (
                <ChoiceCard
                  key={item.id}
                  name={`${id}-fund`}
                  value={item.id}
                  checked={item.id === fundId}
                  onChange={() => setFundId(item.id)}
                  icon={fundIcon(item.id)}
                  title={item.name}
                  description={item.description}
                />
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 &&
          (hasMethods ? (
            <div className="space-y-5">
              <fieldset>
                <legend className="sr-only">Payment method</legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  {activePaymentMethods.map((item) => (
                    <ChoiceCard
                      key={item.id}
                      name={`${id}-method`}
                      value={item.id}
                      checked={item.id === methodId}
                      onChange={() => setMethodId(item.id)}
                      icon={paymentIcon(item.id)}
                      title={item.label}
                    />
                  ))}
                </div>
              </fieldset>
              {method && (
                <div className="rounded-xl border border-border bg-light p-5">
                  <p className="font-bold text-dark">{method.label} details</p>
                  <dl className="mt-3 space-y-3">
                    {method.fields.map((field) => (
                      <div key={field.label} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                        <dt className="text-sm text-muted">{field.label}</dt>
                        <dd className="flex min-w-0 items-center gap-2 font-semibold text-dark">
                          <span className="break-all">{field.value}</span>
                          {field.copy && <CopyButton value={field.value} label={field.label} />}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-sm text-muted">
                    Please transfer {formatRupees(amount)} and mention “{fund.name}” in the reference if you can.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4 rounded-xl border border-accent/50 bg-accent-soft p-5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-dark">
                <LuInfo className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-dark">We will send you verified account details.</p>
                <p className="mt-1 text-muted">
                  To make sure every donation reaches the right account, our team shares bank and mobile wallet
                  details directly on WhatsApp or by email. Continue, and we will prepare your message for you.
                </p>
              </div>
            </div>
          ))}

        {step === 3 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={`${id}-name`} className="form-label">
                Your name <span className="font-normal text-muted">(optional)</span>
              </label>
              <input
                id={`${id}-name`}
                type="text"
                autoComplete="name"
                value={donorName}
                onChange={(event) => setDonorName(event.target.value.slice(0, 80))}
                className="form-input rounded-xl"
              />
            </div>
            <div>
              <label htmlFor={`${id}-contact`} className="form-label">
                Email or phone <span className="font-normal text-muted">(optional)</span>
              </label>
              <input
                id={`${id}-contact`}
                type="text"
                autoComplete="email"
                value={donorContact}
                onChange={(event) => setDonorContact(event.target.value.slice(0, 120))}
                className="form-input rounded-xl"
              />
            </div>
            <p className="text-sm text-muted sm:col-span-2">
              These details are only added to the message you send us. Nothing is stored or sent from this website.
            </p>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <dl className="divide-y divide-border rounded-xl border border-border bg-light px-5">
              {[
                ["Amount", formatRupees(amount)],
                ["Donation type", fund.name],
                ["Payment method", method ? method.label : "Details shared by our team"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 py-3.5">
                  <dt className="text-muted">{label}</dt>
                  <dd className="font-bold text-dark">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="text-muted">
              {hasMethods
                ? "Once you have transferred, send us a screenshot of your receipt so we can confirm your donation and thank you personally."
                : "Send us your message and our team will reply with verified account details. After transferring, share your receipt the same way."}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink(message.trim())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg rounded-full"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                WhatsApp
              </a>
              <a href={emailHref} className="btn btn-outline btn-lg rounded-full">
                <LuMail className="h-5 w-5" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        )}
      </div>

      <div
        className={`mt-8 flex flex-col-reverse gap-3 border-t border-border pt-5 xs:flex-row xs:items-center xs:justify-between ${
          stickyFooter ? "sticky -bottom-5 -mx-5 bg-surface px-5 pb-5 sm:-bottom-6 sm:-mx-7 sm:px-7 sm:pb-6" : ""
        }`}
      >
        {step > 0 ? (
          <button type="button" onClick={back} className="btn btn-lg rounded-full text-muted hover:bg-light hover:text-dark">
            <LuArrowLeft className="h-5 w-5" aria-hidden="true" />
            Back
          </button>
        ) : (
          <span className="hidden xs:block" aria-hidden="true" />
        )}
        {isLast ? (
          <a
            href={whatsappLink(message.trim())}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-donate btn-lg rounded-full"
          >
            {hasMethods ? "Share my receipt" : "Request account details"}
            <LuArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        ) : (
          <button type="button" onClick={next} className="btn btn-donate btn-lg rounded-full">
            Continue Securely
            <LuArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
