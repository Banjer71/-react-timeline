import React from "react";

const Event = ({ event }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-img"></div>
      <div className="timeline-content">
        <div className="event-time">{event.time}</div>
        <div className="event-text">
          <div className="event-title">{event.title}</div>
          <p className="event-description">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
