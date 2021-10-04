import React from "react";

const Event = ({ event }) => {
  const { time, title, description } = event;

  return (
    <div className="timeline-item">
      <div className="timeline-img"></div>
      <div className="timeline-content">
        <div className="event-time">{time}</div>
        <div className="event-text">
          <div className="event-title">{title}</div>
          <p className="event-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
