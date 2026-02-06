import { useState } from 'react';

export default function useModal(initialState = null) {
  const [activeModal, setActiveModal] = useState(initialState);

  return {
    activeModal,
    setActiveModal,
    openSectionModal: (sectionId) =>
      setActiveModal({ type: 'section', sectionId }),
    openScheduleModal: () => setActiveModal({ type: 'schedule' }),
    closeModal: () => setActiveModal(null),
  };
}
