/** Renders an email address that wraps cleanly before the "@" on narrow screens. */
export default function EmailText({ email }) {
  const [user, domain] = email.split("@");
  return (
    <>
      {user}
      <wbr />@{domain}
    </>
  );
}
