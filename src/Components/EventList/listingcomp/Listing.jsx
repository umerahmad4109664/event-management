import React from 'react'
import {FaMicrophone} from 'react-icons/fa'
import {MdSportsCricket} from 'react-icons/md'
import {HiMusicalNote} from 'react-icons/hi2'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import './Listing.css'

const Listing = () => {
  return (
 <>
 <div className="line">___________</div>
 <div className="heading-light">Logo Events</div>
 <div className='flex-1'>
 <div className="listing-heading-45">EVENT LISTING</div>
 <div className="event-type-1">
    <div className="event-type-2">
        <FaMicrophone/>
        <h5 className='h5-heading-type'><span>Conference</span> Events</h5>
    </div>
    <div className="event-type-2">
        <MdSportsCricket/>
        <h5 className='h5-heading-type'><span>Sports</span> Events</h5>
    </div>
    <div className="event-type-2">
        <HiMusicalNote/>
        <h5 className='h5-heading-type'><span>Musical</span> Events</h5>
    </div>
    <div className="event-type-2">
        <AiOutlineCheckSquare/>
        <h5 className='h5-heading-type'><span>Other</span> Events</h5>
    </div>
 </div>
 </div>
 
 
 </>
  )
}

export default Listing