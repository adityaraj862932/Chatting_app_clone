import React from 'react';
import './nav.css';
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdGroups2 } from "react-icons/md";
function Nav() {
  return (
    <div className='Container_nav'>
       <div className='cn-parts'><MdMessage /></div>
      <div className='cn-parts'> <MdGroups2/></div>
       <div className='cn-parts'> <IoMdCall/></div>
        

    </div>
  )
}

export default Nav