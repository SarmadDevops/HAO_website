/**
 * Donation settings.
 *
 * No payment is processed on this website. Donors transfer money directly
 * using the details below and then share their receipt with the team.
 *
 * A payment method is shown only when `enabled` is true AND every required
 * field is filled in. Never put API keys or merchant secrets in this file:
 * everything here is shipped to the browser.
 */

export const donationFunds = [
  {
    id: "general",
    name: "HAO General Fund",
    description: "Used wherever the need is greatest across our projects.",
  },
  {
    id: "baitul-rehma",
    name: "Baitul Rehma Fund",
    description: null,
  },
  {
    id: "clean-water-tharparkar",
    name: "Clean Water for Tharparkar",
    description: "Hand pumps and wells for villages without safe water.",
  },
  {
    id: "education-rural-kids",
    name: "Education for Rural Children",
    description: "Books, bags, classes and better school facilities.",
  },
];

export const paymentMethods = [
  {
    id: "bank",
    label: "Bank transfer",
    // TODO(HAO): These details appear on the earlier HAO website. Confirm them
    // with the finance team before switching `enabled` to true.
    enabled: false,
    fields: [
      { label: "Bank", value: "UBL (United Bank Limited)" },
      { label: "Account title", value: "Tehreem Qureshi" },
      { label: "Account number", value: "1305324481176", copy: true },
      { label: "IBAN", value: "PK02UNIL0109000324481176", copy: true },
    ],
  },
  {
    id: "jazzcash",
    label: "JazzCash",
    // TODO(HAO): Add the official JazzCash account, then enable.
    enabled: false,
    fields: [
      { label: "Account title", value: "" },
      { label: "Mobile number", value: "", copy: true },
    ],
  },
  {
    id: "easypaisa",
    label: "Easypaisa",
    // TODO(HAO): Add the official Easypaisa account, then enable.
    enabled: false,
    fields: [
      { label: "Account title", value: "" },
      { label: "Mobile number", value: "", copy: true },
    ],
  },
];

export const activePaymentMethods = paymentMethods.filter(
  (method) => method.enabled && method.fields.every((field) => field.value.trim() !== "")
);
