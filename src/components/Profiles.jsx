import React from 'react'
import "./Profiles.css";
function Profiles({name,status,message,profilePicture}) {
  return (
    <div className='Profiles_parent'> 
        <div className="dp-parent">
            <img src={profilePicture} className="dp"></img>
        </div>
        <div className="detail_parent">
            <div className="detail">
                <div className="name">
                    <h4>{name}</h4>
                </div>
                <div className="status">
                    <p>{status}</p>
                </div>
            </div>
            <div className="recent_chat">
                <p>{message}</p>
            </div>
        </div>

    </div>
  )
}

export default Profiles