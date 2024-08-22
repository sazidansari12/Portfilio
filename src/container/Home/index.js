import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { Animate } from 'react-simple-animate'
import { BsTranslate } from 'react-icons/bs'
const Home=()=> {

  const navigate =  useNavigate();


const handleNavigateTocontactpage = ()=>{
  navigate('/contact');
  

}

  return (
   
 <section id="home" className='home'>
  <div className='home__text-wrapper'>
    <h1>
      HELLO I'm SAZID ANSARI
      <br />
      FRONTEND DEVELOPER
    </h1>
  </div>
  <Animate
  play 
  duration={1.5}
  delay={1}
  d
  start={{
    transform: 'translateY(550px)',
  }}
  end={{
    transform : 'translatex(0px)',
  }}
  >
  <div className='home-contact-me'>
    <button onClick={handleNavigateTocontactpage}> Hire Me</button>
   </div>
  </Animate>
   


 </section>
   
  )
}

export default  Home;