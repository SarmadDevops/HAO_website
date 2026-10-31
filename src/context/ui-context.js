import { createContext, useContext } from "react";

export const UIContext = createContext(null);

/**
 * Access the site-wide dialogs:
 * openDonate(causeId?) and openVolunteer().
 */
export function useUI() {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUI must be used inside <UIProvider>.");
  return context;
}
