import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ConfirmationModal = ({ isOpen, onClose }) => {
  const customStyles = {
    content: {
      width: '300px', // Ajuster la largeur de la modale
      height: '200px', // Ajuster la hauteur de la modale
      margin: 'auto', // Centrer la modale
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <h2>Employee Created !</h2>
      <button className="modal-close-btn" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

export default ConfirmationModal;
