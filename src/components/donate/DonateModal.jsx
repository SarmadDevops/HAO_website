import Modal from "../common/Modal";
import DonatePanel from "./DonatePanel";

export default function DonateModal({ isOpen, onClose, causeId }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      title="Donate to HAO"
      description="Choose a cause and transfer directly to HAO. No payment is taken on this website."
    >
      <DonatePanel initialFundId={causeId || undefined} />
    </Modal>
  );
}
