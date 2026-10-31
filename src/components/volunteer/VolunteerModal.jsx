import Modal from "../common/Modal";
import VolunteerForm from "../forms/VolunteerForm";

export default function VolunteerModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Become a Change Maker"
      description="Join HAO as a member or volunteer. Fill in the form and our team will get in touch."
    >
      <VolunteerForm onDone={onClose} />
    </Modal>
  );
}
