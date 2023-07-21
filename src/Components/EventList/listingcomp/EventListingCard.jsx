import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { transferFormData } from "../../../Store/FormSlice";
import { FaLocationDot } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import "./EventListingCard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "react-modal";

export const EventListingCard = () => {
  const { formData } = useSelector((state) => state.form);
  const dispatch = useDispatch()
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    formData && console.log(formData);
  }, [formData]);

  const openPopup = (event) => {
    setSelectedEvent(event);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedEvent(null);
    setPopupOpen(false);
  };

  // Adding some additional dummy list items to formData
  const additionalFormData = [
    {
      name: "Event Name event 4",
      price: 200,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis assumenda consequatur explicabo atque unde corrupti fugiat et commodi, in cumque deleniti expedita autem modi sint labore placeat ad voluptatem voluptatum dignissimos ratione eligendi? Molestiae animi veniam vero, quaerat voluptatibus nisi nulla nihil id sequi reprehenderit voluptatum iure quo laborum minus eaque ullam amet soluta rem nesciunt dolorum blanditiis corporis assumenda perferendis accusamus. Quo quasi veniam dolores quam ipsam aut magnam perferendis repudiandae accusantium reprehenderit? Aut neque quae impedit reiciendis blanditiis eligendi eos ratione numquam tenetur mollitia, inventore, explicabo natus culpa itaque incidunt. Soluta, explicabo ducimus. Molestias voluptates dolor laboriosam obcaecati?",
      type: "Conference",
      date: "August 15",
      location: "Barcelona, Spain",
      image:
        "https://jthemes.net/themes/html/harmony-event/assets/images/event/1.event-grid.jpg",
    },
    {
      name: "Event Name event 5",
      price: 500,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis assumenda consequatur explicabo atque unde corrupti fugiat et commodi, in cumque deleniti expedita autem modi sint labore placeat ad voluptatem voluptatum dignissimos ratione eligendi? Molestiae animi veniam vero, quaerat voluptatibus nisi nulla nihil id sequi reprehenderit voluptatum iure quo laborum minus eaque ullam amet soluta rem nesciunt dolorum blanditiis corporis assumenda perferendis accusamus. Quo quasi veniam dolores quam ipsam aut magnam perferendis repudiandae accusantium reprehenderit? Aut neque quae impedit reiciendis blanditiis eligendi eos ratione numquam tenetur mollitia, inventore, explicabo natus culpa itaque incidunt. Soluta, explicabo ducimus. Molestias voluptates dolor laboriosam obcaecati?",
      type: "Conference",
      date: "September 22",
      location: "Berlin, Germany",
      image:
        "https://jthemes.net/themes/html/harmony-event/assets/images/event/2.event-grid.jpg",
    },
    {
      name: "Event Name event 6",
      price: 350,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis assumenda consequatur explicabo atque unde corrupti fugiat et commodi, in cumque deleniti expedita autem modi sint labore placeat ad voluptatem voluptatum dignissimos ratione eligendi? Molestiae animi veniam vero, quaerat voluptatibus nisi nulla nihil id sequi reprehenderit voluptatum iure quo laborum minus eaque ullam amet soluta rem nesciunt dolorum blanditiis corporis assumenda perferendis accusamus. Quo quasi veniam dolores quam ipsam aut magnam perferendis repudiandae accusantium reprehenderit? Aut neque quae impedit reiciendis blanditiis eligendi eos ratione numquam tenetur mollitia, inventore, explicabo natus culpa itaque incidunt. Soluta, explicabo ducimus. Molestias voluptates dolor laboriosam obcaecati?",
      type: "Art",
      location: "Rome, Italy",
      date: "October 16",
      image:
        "https://images-eur.cvent.com/pr53/6a03f092600d4fd7b17308d9c0fb8bf9/beedfc5e5aa6bb934a4c6bccef6608ea/7fd7380177ad4c92a0916df31d1e07e0/9e7730605ddb469c14a53fa7a925f670!_!5efa45f3e4ce3801b26349988b74b909.jpeg?f=webp",
    },
  ];

  const allFormData = formData.concat(additionalFormData);

  return (
    <div>
      {/* <h3>Form Data:</h3> */}
      <ul className="main456">
        {allFormData.map((item, index) => (
          <li key={index}>
            <div className="list-card">
              <div className="upper-card-part">
                <img className="event-img" src={item.image} alt="" />
                <span className="event-date"> {item.date} </span>
              </div>
              <div className="lower-card-part">
                <div className="name">{item.name}</div>
                <div className="ticket-price">
                  Ticket Price : ${item.price} 
                </div>
                <div className="flex-678">
                  <FaLocationDot className="icon-col-400" />
                  <div className="event-location">{item.location}</div>
                </div>
                <div className="flex-678">
                  <BiCategory className="icon-col-400" />
                  <div className="event-location">{item.type}</div>
                </div>
                <button
                  className="register-event-btn"
                  onClick={() => {
                    dispatch(transferFormData(item))
                    openPopup(item)}}
                >
                  Tickets & Details
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={isPopupOpen}
        onRequestClose={closePopup}
        contentLabel="Event Details"
      >
        {selectedEvent && (
          <div className="popup">
            <button className="close-popup" onClick={closePopup}>
              X
            </button>
            <div className="line">___________</div>
            {/* <div className="heading-light">Logo Events</div> */}
            <div className="listing-heading-45">EVENT DETAILS</div>
            <h2 className="popup-heading">{selectedEvent.name}</h2>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.name}
              style={{ width: "100%", height: "auto" }}
              className="popup-img"
            />
            <div className="popup-container">
              <div className="popup-location">
                Location: {selectedEvent.location}
              </div>
              <div className="popup-location">Type: {selectedEvent.type}</div>
              <div className="popup-location">
                Price: ${selectedEvent.price}
              </div>
              <div className="popup-location">Date: {selectedEvent.date}</div>
            </div>

            <div className="popup-description">{selectedEvent.description}</div>
            {/* Add other details you want to display in the popup */}
            <Link to="/Register-now">
              <button onClick={()=>dispatch(transferFormData(selectedEvent))} className="popup-registration">Register Now</button>
            </Link>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default EventListingCard;
