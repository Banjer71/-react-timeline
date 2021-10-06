import React from "react";

const Modal = ({ event, closeModal }) => {
  const { time, title, description } = event;
  return (
    <div className="modal-box">
      <div className="event-text">
        <div className="time">{time}</div>
        <div className="event-title">{title}</div>
        <p className="event-description">{description}</p>
      </div>
      <button onClick={() => closeModal(false)}>X</button>
    </div>
  );
};

export default Modal;
