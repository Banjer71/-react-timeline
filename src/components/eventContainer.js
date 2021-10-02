import React, { useState, useEffect } from "react";
import Event from "./event";

const EventContainer = () => {
  const [eventData, setEventData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const addNewElementToArr = async () => {
      const fetchEvents = await fetch(`events.json`);
      const events = await fetchEvents.json();

      if (eventData.length < events.length) {
        const temp = eventData.slice();
        temp.unshift(events[count]);
        setEventData(temp);

        setCount(count === events.length - 1 ? 0 : count + 1);
      }
    };

    const deleteEvent = () => {
      if (eventData.length > 5) {
        let temp = eventData.slice();
        temp.pop();
        setEventData(temp);
      }
    };

    deleteEvent();
    const timer = setInterval(addNewElementToArr, 5000);
    return () => clearInterval(timer);
  });

  return (
    <div className="timeline">
      {eventData &&
        eventData.map((event, id) => {
          return <Event event={event} key={id} />;
        })}
    </div>
  );
};

export default EventContainer;
