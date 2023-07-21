import React from 'react'
import './TopListing.css'
import { Link } from "react-router-dom";


const TopListing = () => {
  return (
<>
<div className="top">
  <h3 className='h3'>Plan an Event</h3>
  <h1 className='event'>Event <span>listing</span></h1>
</div>
<div className="second">
    <div className="headings">
        <h2 className='h2-heading'><span className='discount'>30%</span> Off In June~July For <span className='h2-span-2'>Sports Events</span> </h2>
        <p className='para-second'>Contact us now and we will manage your event unique & unforgettable</p>
    </div>
    <div className='button'>
        <Link to="/EventCreate">
        <button className='event-button'>MAKE AN EVENT NOW</button>
        </Link>
    </div>
</div>

</>  )
}

export default TopListing