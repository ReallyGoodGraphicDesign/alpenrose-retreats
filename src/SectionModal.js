import "./SectionModal.css";

function SectionModal({ section, onClose }) {
  if (!section) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>{section.title}</h2>
        <p>{section.long_text || section.text}</p>
      </div>
    </div>
  );
}

export default SectionModal;
