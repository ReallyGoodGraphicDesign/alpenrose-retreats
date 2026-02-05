import Modal from "./Modal";

function decodeHTMLEntities(str) {
  if (!str) return str;
  const textarea = document.createElement("textarea");
  textarea.innerHTML = str;
  return textarea.value;
}

// Inside your modal (or wherever you render long content), add a helper:
function parseBlocks(longText) {
  if (!longText) return [];

  try {
    return JSON.parse(longText);
  } catch (e) {
    console.error("Invalid long_text JSON:", e);
    return [];
  }
}
// Create a small renderer function (keep this near the modal):
function renderBlocks(blocks) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "h3":
        return <h3 key={i}>{block.text}</h3>;
      case "h4":
        return <h4 key={i}>{block.text}</h4>;
      case "p":
        return <p key={i}>{block.text}</p>;
      case "ul":
        return (
          <ul key={i}>
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        );
        case "cta":
                return (
                        <button key={i} className="cta"
                        onClick={() => handleCTA(block.url)}>
                                <p>{block.label}</p>
                        </button>
                );
      default:
        return null;
    }
  });
}
function handleCTA(url) {
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
}
function SectionModal({ section, onClose }) {
  const blocks = parseBlocks(section.long_text);

return (
        <Modal onClose={onClose}>
                <div className="modal-content">
                        <h2>{decodeHTMLEntities(section.title)}</h2>        {renderBlocks(blocks)}
                </div>
        </Modal>
);
}

export default SectionModal;
