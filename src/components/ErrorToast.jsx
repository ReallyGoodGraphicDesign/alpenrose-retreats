import React from 'react';

export default function ErrorToast({ message, onRetry, onClose }) {
  return (
    <div className="error-toast" role="alert" aria-live="assertive">
      <div className="error-message">{message || 'Something went wrong.'}</div>
      <div className="toast-actions">
        <button className="btn-retry" onClick={onRetry}>
          Retry
        </button>
        <button className="btn-dismiss" onClick={onClose} aria-label="Dismiss">
          Dismiss
        </button>
      </div>
    </div>
  );
}
