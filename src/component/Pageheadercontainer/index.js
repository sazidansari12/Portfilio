import React from 'react'
import './style.css'

import { TypeAnimation } from 'react-type-animation';
function Pageheadercontainer(props) {

    const {HeadersText ,icon} = props;
  return (
    <div className='wrapper '>
    <h2>{HeadersText}</h2>
   
  
    <span>{icon}</span>
    </div>
  )
}

export default Pageheadercontainer;