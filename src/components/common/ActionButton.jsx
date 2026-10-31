import { Link } from "react-router-dom";
import { useUI } from "../../context/ui-context";

/**
 * Renders a call to action described in data:
 * { label, action: "donate" | "volunteer" | "link", causeId?, to? }
 */
export default function ActionButton({ action, className = "btn btn-primary" }) {
  const { openDonate, openVolunteer } = useUI();
  if (!action) return null;

  if (action.action === "link") {
    return (
      <Link to={action.to} className={className}>
        {action.label}
      </Link>
    );
  }

  const handleClick = () =>
    action.action === "donate" ? openDonate(action.causeId || null) : openVolunteer();

  return (
    <button type="button" onClick={handleClick} className={className}>
      {action.label}
    </button>
  );
}
