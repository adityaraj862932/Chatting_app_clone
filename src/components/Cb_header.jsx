import React from 'react';
import "./Cb_header.css";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { LiaSearchSolid } from "react-icons/lia";

function Cb_header({ name, profilePicture }) {
  return (
    <div className='Cb_parent'>

        <div className="Cbh_prof_parent">
            <img className="Cbh_prof_pic" src={profilePicture} alt="" />
        </div>


        <div className="Cbh_detail_parent">
            <div className="Cbh_detail_name">
                <h3>{name}</h3>
            </div>
            {/* <div className="Cbh_detail_info"></div> */}

        </div>


        <div className="Cbh_buttons">
            <div className="Cbh_calls">
                <div>
                <MdOutlineVideoCall/>
                </div>
                <div>
                <IoCallOutline />
                </div>
            </div>
            <div className="Cbh_search">
            <div>
            <LiaSearchSolid/>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Cb_header