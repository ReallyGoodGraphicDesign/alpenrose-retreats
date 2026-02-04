import { useEffect, useRef } from "react";
import "./Modal.css";

function Modal({ children, onClose }) {
  const modalRef = useRef(null);

useEffect(() => {
  const scrollY = window.scrollY;

  // Calculate scrollbar width
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  // Lock scroll and preserve scrollbar space
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.paddingRight = `${scrollbarWidth}px`;

  const modal = modalRef.current;
  if (!modal) return;

  const focusableSelectors = [
    "a[href]",
    "button:not([disabled])",
    "textarea:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ];

  const focusableElements = modal.querySelectorAll(
    focusableSelectors.join(",")
  );

  const firstFocusable = focusableElements[0];
  const lastFocusable =
    focusableElements[focusableElements.length - 1];

  requestAnimationFrame(() => {
    firstFocusable?.focus();
  });

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
      return;
    }

    if (e.key === "Tab") {
      if (focusableElements.length === 0) {
        e.preventDefault();
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.paddingRight = "";

    window.scrollTo(0, scrollY);
  };
}, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                        <button className="list_close_btn" onClick={onClose}>
                                <i className="bi bi-x-lg"></i>
                        </button>
                </div>
                <div className="modal-content">
                        {children}
                </div>
      </div>
    </div>
  );
}

export default Modal;
