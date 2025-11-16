import React, { useState, useEffect, useRef } from "react";
import Event from "./event";

const EventContainer = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [eventData, setEventData] = useState([]);
  const count = useRef(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`events.json`);
        const events = await response.json();
        setAllEvents(events);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    if (allEvents.length === 0) return;

    const addNewElement = () => {
      setEventData(prevEventData => {
        const nextEvent = allEvents[count.current];
        count.current = (count.current + 1) % allEvents.length;

        const newEventData = [nextEvent, ...prevEventData];
        if (newEventData.length > 5) {
          return newEventData.slice(0, 5);
        }
        return newEventData;
      });
    };

    const timer = setInterval(addNewElement, 5000);

    return () => clearInterval(timer);
  }, [allEvents]);

  return (
    <div className="timeline">
      {eventData.map((event, id) => (
        <Event event={event} key={id} />
      ))}
    </div>
  );
};

export default EventContainer;
