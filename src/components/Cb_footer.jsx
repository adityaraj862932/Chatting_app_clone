import React from 'react'
import './Cb_footer.css'
import { GoSmiley } from "react-icons/go";
import { GoPaperclip } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa";
function Cb_footer() {
  return (
    <div className='Cbf_parent'>
      <div className="Cbf_docs">
        <div><GoSmiley/></div>
        <div><GoPaperclip/></div>
        
      </div>
      <div className="Cbf_msg">
      <input
            type="text"
            className="Cbf_input"
            placeholder= " Type a Message..."
            />
      </div>
      <div className="Cbf_mic">
        <div><FaMicrophone/></div>
      </div>
    </div>
  )
}

export default Cb_footer