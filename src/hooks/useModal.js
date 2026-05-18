import { useState } from 'react';

export default function useModal(initialState = null) {
  const [activeModal, setActiveModal] = useState(initialState);

  return {
    activeModal,
    setActiveModal,
    openSectionModal: (sectionId) =>
      setActiveModal({ type: 'section', sectionId }),
    openYourJourneyModal: () => setActiveModal({ type: 'your_journey' }),
    closeModal: () => setActiveModal(null),
  };
}
