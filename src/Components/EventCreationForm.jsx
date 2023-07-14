import React, { useState } from 'react';
import './EventCreationForm.css';

const EventCreationForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [createdEvents, setCreatedEvents] = useState([]);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleEventDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };

  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleTicketPriceChange = (e) => {
    setTicketPrice(e.target.value);
  };

  const handleEventImageChange = (e) => {
    setEventImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the event object
    const event = {
      name: eventName,
      description: eventDescription,
      type: eventType,
      date: eventDate,
      price: ticketPrice,
      image: eventImage,
    };

    // Add the event to the list of created events
    setCreatedEvents([...createdEvents, event]);

    // Clear form fields
    setEventName('');
    setEventDescription('');
    setEventType('');
    setEventDate('');
    setTicketPrice('');
    setEventImage('');
  };

  return (
    <div className="event-creation-form">
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" value={eventName} onChange={handleEventNameChange} />
        </label>

        <label>
          Event Description:
          <textarea value={eventDescription} onChange={handleEventDescriptionChange} />
        </label>

        <label>
          Event Type:
          <input type="text" value={eventType} onChange={handleEventTypeChange} />
        </label>

        <label>
          Event Date:
          <input type="date" value={eventDate} onChange={handleEventDateChange} />
        </label>

        <label>
          Ticket Price:
          <input type="number" value={ticketPrice} onChange={handleTicketPriceChange} />
        </label>

        <label>
          Event Image URL:
          <input type="text" value={eventImage} onChange={handleEventImageChange} />
        </label>

        <button type="submit">Create Event</button>
      </form>

      {createdEvents.length > 0 && (
        <div className="created-events">
          <h2>Created Events</h2>
          {createdEvents.map((event, index) => (
            <div className="event-card" key={index}>
              {event.image && <img src={event.image} alt="Event" className="event-image" />}
              <h3>Event {index + 1}</h3>
              <p>Event Name: {event.name}</p>
              <p>Event Description: {event.description}</p>
              <p>Event Type: {event.type}</p>
              <p>Event Date: {event.date}</p>
              <p>Ticket Price: {event.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventCreationForm;
