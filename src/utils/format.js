const numberFormatter = new Intl.NumberFormat("en-PK");

export const formatNumber = (value) => numberFormatter.format(value);

export const formatRupees = (amount) => `Rs ${numberFormatter.format(amount)}`;

export const percentOf = (part, whole) =>
  whole > 0 ? Math.min(100, Math.round((part / whole) * 1000) / 10) : 0;

export function formatDate(isoDate) {
  if (!isoDate) return null;
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
