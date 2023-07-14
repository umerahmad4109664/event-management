// import React, { useState } from 'react';
// import "./EventCreation.css";

// const EventCreation = () => {

//         const [eventName, setEventName] = useState('');
//         const [eventDescription, setEventDescription] = useState('');
//         const [eventType, setEventType] = useState('');
//         const [eventDate, setEventDate] = useState('');
//         const [ticketPrice, setTicketPrice] = useState('');
//         const [eventImage, setEventImage] = useState('');
//         const [createdEvents, setCreatedEvents] = useState([]);

//         const handleEventNameChange = (e) => {
//           setEventName(e.target.value);
//         };

//         const handleEventDescriptionChange = (e) => {
//           setEventDescription(e.target.value);
//         };

//         const handleEventTypeChange = (e) => {
//           setEventType(e.target.value);
//         };

//         const handleEventDateChange = (e) => {
//           setEventDate(e.target.value);
//         };

//         const handleTicketPriceChange = (e) => {
//           setTicketPrice(e.target.value);
//         };

//         const handleEventImageChange = (e) => {
//           setEventImage(e.target.value);
//         };

//         const handleSubmit = (e) => {
//           e.preventDefault();

//           // Create the event object
//           const event = {
//             name: eventName,
//             description: eventDescription,
//             type: eventType,
//             date: eventDate,
//             price: ticketPrice,
//             image: eventImage,
//           };

//           onsubmit(event);

//           // Add the event to the list of created events
//           setCreatedEvents([...createdEvents, event]);

//           // Clear form fields
//           setEventName('');
//           setEventDescription('');
//           setEventType('');
//           setEventDate('');
//           setTicketPrice('');
//           setEventImage('');
//         };

//   return (
//     <>
//       <div className="main-div">
//         <div className="create-form">
//           <h1>
//             {" "}
//             <span>Event</span> Creation
//           </h1>
//           <h3>Create an Event</h3>

//           <form onSubmit={handleSubmit}>
//             <input type="text" required placeholder="Event Name" value={eventName} onChange={handleEventNameChange}/>
//             <textarea required placeholder="Description" value={eventDescription} onChange={handleEventDescriptionChange}/>
//             <select required className="type" value={eventType} onChange={handleEventTypeChange}>
//               <option className="selected">Event Type</option>
//               <option >Sports</option>
//               <option >Party</option>
//               <option >Others</option>
//             </select>

//             <input required type="date" value={eventDate} onChange={handleEventDateChange}/>
//             <input required type="number" placeholder="Ticket Price in Rs" value={ticketPrice} onChange={handleTicketPriceChange}/>
//             <input required type="text" placeholder="Add Cover Image URL " value={eventImage} onChange={handleEventImageChange}/>

//             <button type="submit" className="submit-btn">Create Event</button>
//           </form>
//         </div>
//         {createdEvents.length > 0 && (
//         <div className="created-events">
//           <h2>Created Events</h2>
//           {createdEvents.map((event, index) => (
//             <div className="event-card" key={index}>
//               {event.image && <img src={event.image} alt="Event" className="event-image" />}
//               <h3>Event {index + 1}</h3>
//               <p>Event Name: {event.name}</p>
//               <p>Event Description: {event.description}</p>
//               <p>Event Type: {event.type}</p>
//               <p>Event Date: {event.date}</p>
//               <p>Ticket Price: {event.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       </div>
//     </>
//   );
// };

// export default EventCreation;

import React, { useState } from "react";
import "./EventCreation.css";
import { useDispatch } from "react-redux";
import { setFormData } from '../../Store/FormSlice';


const EventCreation = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [eventImage, setEventImage] = useState("");
  // const [createdEvents, setCreatedEvents] = useState([]);
  const dispatch = useDispatch();

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
    const formData = {
      name: eventName,
      description: eventDescription,
      type: eventType,
      date: eventDate,
      price: ticketPrice,
      image: eventImage,
    };console.log("formdata",formData)

    dispatch(setFormData(formData));

    // Add the event to the list of created events
    // setCreatedEvents([...createdEvents, event]);

    // Clear form fields
    setEventName("");
    setEventDescription("");
    setEventType("");
    setEventDate("");
    setTicketPrice("");
    setEventImage("");
  };

  return (
    <>
      <div className="main-div">
        <div className="create-form">
          <h1>
            {" "}
            <span>Event</span> Creation
          </h1>
          <h3>Create an Event</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Event Name"
              value={eventName}
              onChange={handleEventNameChange}
            />
            <textarea
              required
              placeholder="Description"
              value={eventDescription}
              onChange={handleEventDescriptionChange}
            />
            <select
              required
              className="type"
              value={eventType}
              onChange={handleEventTypeChange}
            >
              <option className="selected">Event Type</option>
              <option>Sports</option>
              <option>Party</option>
              <option>Others</option>
            </select>

            <input
              required
              type="date"
              value={eventDate}
              onChange={handleEventDateChange}
            />
            <input
              required
              type="number"
              placeholder="Ticket Price in Rs"
              value={ticketPrice}
              onChange={handleTicketPriceChange}
            />
            <input
              required
              type="text"
              placeholder="Add Cover Image URL "
              value={eventImage}
              onChange={handleEventImageChange}
            />

            <button type="submit" className="submit-btn">
              Create Event
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EventCreation;
