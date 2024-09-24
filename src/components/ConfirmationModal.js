//Réimplémentation de la fonctionnalité modale en React avec une bibliothèque déjà existante
// Importation de React et du package react-modal
import React from 'react';
import Modal from 'react-modal';

// Configuration initiale pour l'accessibilité : le modal sera monté sur l'élément root de l'application
Modal.setAppElement('#root');

// Composant ConfirmationModal qui prend deux props : isOpen (pour indiquer si la modale est ouverte) et onClose (pour fermer la modale)
const ConfirmationModal = ({ isOpen, onClose }) => {

  // Définition des styles personnalisés pour la modale. 
  const customStyles = {
    content: {
      width: '300px', 
      height: '200px', 
      margin: 'auto', 
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
