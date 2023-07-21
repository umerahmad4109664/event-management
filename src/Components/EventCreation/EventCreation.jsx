
import React, { useState } from "react";
import "./EventCreation.css";
import { useDispatch } from "react-redux";
import { setFormData } from '../../Store/FormSlice';


const EventCreation = () => {
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [eventImage, setEventImage] = useState("");
  // const [convertedDate, setConvertedDate] = useState('');
  
  const [showModal, setShowModal] = useState(false);


  // const [createdEvents, setCreatedEvents] = useState([]);
  const dispatch = useDispatch();

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleEventLocationChange = (e) => {
    setEventLocation(e.target.value);
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
    // setConvertedDate(formatDate(eventDate));


    // Create the event object
    const formData = {
      name: eventName,
      description: eventDescription,
      type: eventType,
      date: formatDate(eventDate),
      price: ticketPrice,
      image: eventImage,
      location: eventLocation,
    };console.log("formdata",formData)

    dispatch(setFormData(formData));
   
    // Clear form fields
    setEventName("");
    setEventDescription("");
    setEventType("");
    setEventDate("");
    setTicketPrice("");
    setEventImage("");
    setEventLocation("");


    setTimeout(() => {
      setShowModal(true);
    }, 200);
  };
  
  const closeModalHandler = () => {
    setShowModal(false);
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

          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Event Name"
              value={eventName}
              onChange={handleEventNameChange}
            />
            
            <input
              type="text"
              required
              placeholder="Event Location i.e City, Country"
              value={eventLocation}
              onChange={handleEventLocationChange}
            />
            <select
              required
              className="type"
              value={eventType}
              onChange={handleEventTypeChange}
            >
              <option className="selected">Event Type</option>
              <option>Sports</option>
              <option>Arts</option>
              <option>Conference</option>
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
              placeholder="Ticket Price $"
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
            <textarea
              rows={10}
              required
              placeholder="Description"
              value={eventDescription}
              onChange={handleEventDescriptionChange}
            />

            <button type="submit" className="submit-btn">
              Create Event
            </button>
          </form>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModalHandler}>
              &times;
            </span>
            <h2 className="success">Success!</h2>
            <p className="evnt-created">Your event has been created.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCreation;
