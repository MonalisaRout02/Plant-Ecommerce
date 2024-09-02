import React from 'react';
import './Modal.css'; // Add styles for your modal

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                {children}
                <button className='modal-close' onClick={onClose}>X</button>
            </div>
        </div>
    );
};

export default Modal;
