import React from 'react'
import Pageheadercontainer from '../../component/Pageheadercontainer';
import { BsInfoCircleFill } from 'react-icons/bs';
import DownloadResume from './DowloadResume';
import './style.css'
function Resume() {
  return (
   
    <section id='Resume' className='Resume'>
    <Pageheadercontainer
   HeadersText = "Resume"
    icon = {<BsInfoCircleFill size={40}/>}
    />
     <div className="resume__container">
      <h1>Download PDF Resume</h1>
      <DownloadResume />
    </div>
   </section>
  )
}

export default  Resume;