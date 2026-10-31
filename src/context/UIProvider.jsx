import { lazy, Suspense, useCallback, useMemo, useState } from "react";
import { UIContext } from "./ui-context";

const DonateModal = lazy(() => import("../components/donate/DonateModal"));
const VolunteerModal = lazy(() => import("../components/volunteer/VolunteerModal"));

export default function UIProvider({ children }) {
  const [dialog, setDialog] = useState({ type: null, causeId: null });

  const openDonate = useCallback((causeId = null) => setDialog({ type: "donate", causeId }), []);
  const openVolunteer = useCallback(() => setDialog({ type: "volunteer", causeId: null }), []);
  const closeDialog = useCallback(() => setDialog({ type: null, causeId: null }), []);

  const value = useMemo(
    () => ({ openDonate, openVolunteer, closeDialog }),
    [openDonate, openVolunteer, closeDialog]
  );

  return (
    <UIContext.Provider value={value}>
      {children}
      <Suspense fallback={null}>
        {dialog.type === "donate" && (
          <DonateModal isOpen causeId={dialog.causeId} onClose={closeDialog} />
        )}
        {dialog.type === "volunteer" && <VolunteerModal isOpen onClose={closeDialog} />}
      </Suspense>
    </UIContext.Provider>
  );
}
