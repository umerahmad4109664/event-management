// import React from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { BiCategory } from "react-icons/bi";
// import './EventListingCard.css'

// export const EventListingCard = () => {
//   return (
//     <>
//       <div className="main456">
//         <div className="list-card">
//           <div className="upper-card-part">
//             <img className='event-img' src="https://jthemes.net/themes/html/harmony-event/assets/images/event/1.event-grid.jpg" alt="" />
//             <span className="event-date"> 31 July</span>
//           </div>
//           <div className="lower-card-part">
//             <div className="name">Event Name event 1</div>
//             <div className="ticket-price">Ticket Price : 1000 Rs</div>
//             <div className="flex-678">
//               <FaLocationDot className="icon-col-400"  />
//               <div className="event-location">Karachi</div>
//             </div>
//             <div className="flex-678">
//               <BiCategory  className="icon-col-400"/>
//               <div className="event-location">Sports</div>
//             </div>
//             <button className="register-event-btn">Tickets & Details</button>
//           </div>
//         </div>
//         <div className="list-card">
//           <div className="upper-card-part">
//             <img className='event-img' src="https://jthemes.net/themes/html/harmony-event/assets/images/event/1.event-grid.jpg" alt="" />
//             <span className="event-date"> 31 July</span>
//           </div>
//           <div className="lower-card-part">
//             <div className="name">Event Name event 1</div>
//             <div className="ticket-price">Ticket Price : 1000 Rs</div>
//             <div className="flex-678">
//               <FaLocationDot className="icon-col-400" />
//               <div className="event-location">Karachi</div>
//             </div>
//             <div className="flex-678">
//               <BiCategory className="icon-col-400" />
//               <div className="event-location">Sports</div>
//             </div>
//             <button className="register-event-btn">Tickets & Details</button>
//           </div>
//         </div>
//         <div className="list-card">
//           <div className="upper-card-part">
//             <img className='event-img' src="https://jthemes.net/themes/html/harmony-event/assets/images/event/1.event-grid.jpg" alt="" />
//             <span className="event-date"> 31 July</span>
//           </div>
//           <div className="lower-card-part">
//             <div className="name">Event Name event 1</div>
//             <div className="ticket-price">Ticket Price : 1000 Rs</div>
//             <div className="flex-678">
//               <FaLocationDot className="icon-col-400" />
//               <div className="event-location">Karachi</div>
//             </div>
//             <div className="flex-678">
//               <BiCategory className="icon-col-400" />
//               <div className="event-location">Sports</div>
//             </div>
//             <button className="register-event-btn">Tickets & Details</button>
//           </div>
//         </div>
        
//       </div>
      
//     </>
//   );
// };

// export default EventListingCard;

import React ,{useEffect}from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import './EventListingCard.css'
import { useSelector } from 'react-redux';

export const EventListingCard = () => {
  const{ formData} = useSelector((state) => state.form);
  
  useEffect(()=>{
formData && console.log(formData)
  },[formData])

  return (
    <div>
      <h2>Entered Values:</h2>
      {formData ? (
        <div className="form-data-entry">
          <p>Name: {formData[1].name}</p>
          <p>Email: {formData[1].price }</p>
          <p>Message: {formData[1].description}</p>
        </div>
      ) : (
        <p>No data to display.</p>
      )}
    </div>
  );

};

export default EventListingCard;
