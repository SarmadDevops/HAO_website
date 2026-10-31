import { useId, useState } from "react";
import { LuCheck, LuCopy, LuMail } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { activePaymentMethods, donationFunds } from "../../config/donations";
import { site, whatsappLink } from "../../config/site";

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
      className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary"
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
    >
      {copied ? <LuCheck className="h-4 w-4" aria-hidden="true" /> : <LuCopy className="h-4 w-4" aria-hidden="true" />}
      <span aria-hidden="true">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

/**
 * Donation guidance shared by the donate dialog and the /donate page.
 * No payment is taken on the website: donors choose a fund, transfer using
 * the configured account details, then send their receipt to the team.
 */
export default function DonatePanel({ initialFundId }) {
  const groupId = useId();
  const [fundId, setFundId] = useState(
    donationFunds.some((fund) => fund.id === initialFundId) ? initialFundId : donationFunds[0].id
  );
  const fund = donationFunds.find((item) => item.id === fundId);
  const hasMethods = activePaymentMethods.length > 0;

  const enquiryMessage = `Assalam o Alaikum, I would like to donate to the ${fund.name}. Please share the donation details.`;
  const receiptMessage = `Assalam o Alaikum, I have made a donation to the ${fund.name}. My receipt is attached.`;

  return (
    <div className="space-y-7">
      <fieldset>
        <legend className="form-label text-base">1. Choose what to support</legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {donationFunds.map((item) => {
            const selected = item.id === fundId;
            return (
              <label
                key={item.id}
                className={`relative flex cursor-pointer gap-3 rounded-md border p-4 transition-colors ${
                  selected ? "border-primary bg-primary-soft" : "border-border hover:border-primary/50"
                }`}
              >
                <input
                  type="radio"
                  name={`${groupId}-fund`}
                  value={item.id}
                  checked={selected}
                  onChange={() => setFundId(item.id)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[rgb(var(--color-primary))]"
                />
                <span>
                  <span className="block font-semibold text-dark">{item.name}</span>
                  {item.description && <span className="mt-0.5 block text-sm text-muted">{item.description}</span>}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <section aria-labelledby={`${groupId}-pay`}>
        <h3 id={`${groupId}-pay`} className="form-label text-base">
          2. Make your transfer
        </h3>

        {hasMethods ? (
          <div className="mt-2 space-y-4">
            {activePaymentMethods.map((method) => (
              <div key={method.id} className="rounded-md border border-border p-4">
                <p className="font-semibold text-dark">{method.label}</p>
                <dl className="mt-3 space-y-2.5">
                  {method.fields.map((field) => (
                    <div key={field.label} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                      <dt className="text-sm text-muted">{field.label}</dt>
                      <dd className="flex items-center gap-2 font-semibold text-dark">
                        <span className="break-all">{field.value}</span>
                        {field.copy && <CopyButton value={field.value} label={field.label} />}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
            <p className="text-sm text-muted">
              Please mention “{fund.name}” in the transfer reference if your bank or wallet allows it.
            </p>
          </div>
        ) : (
          <div className="mt-2 rounded-md border border-accent/50 bg-accent-soft p-4">
            <p className="font-semibold text-dark">Account details are shared on request.</p>
            <p className="mt-1 text-muted">
              To make sure every donation reaches the right account, our team will send you verified bank or mobile
              wallet details directly. Message us on WhatsApp or by email and we will reply with everything you need.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={whatsappLink(enquiryMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                Ask on WhatsApp
              </a>
              <a
                href={`mailto:${site.contact.email}?subject=${encodeURIComponent(`Donation: ${fund.name}`)}`}
                className="btn btn-outline"
              >
                <LuMail className="h-5 w-5" aria-hidden="true" />
                Email us
              </a>
            </div>
          </div>
        )}
      </section>

      <section aria-labelledby={`${groupId}-confirm`}>
        <h3 id={`${groupId}-confirm`} className="form-label text-base">
          3. Send us your receipt
        </h3>
        <p className="mt-1 text-muted">
          Once you have transferred, send a screenshot of your receipt so we can confirm your donation and thank you
          personally.
        </p>
        <a
          href={whatsappLink(receiptMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link mt-2"
        >
          <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
          Send receipt on WhatsApp
        </a>
      </section>
    </div>
  );
}
