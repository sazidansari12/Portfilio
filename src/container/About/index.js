import React from 'react'
import Pageheadercontainer from '../../component/Pageheadercontainer';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import { DiApple ,DiAndroid} from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';
// import { Value } from 'sass';
import './style.css'


function About() {

 const personDetail =[
  {
    label : "Name",
   value : "Sazid Ansari",
  },
  {
    label : "Age",
    value : "20",
  },
  {
    label : "Email",
 value : "sazidansar1265@gmail.com"
  },
  {
   label : "Contact",
   value : "9520087647",
  },
  
];
   const jobsummery = ' I am thrilled to announce that I have successfully completed my journey in Data Structures and Algorithms (DSA) using Java. Additionally, I have honed my skills in web development with a focus on HTML, CSS, JavaScript, and React Key Highlights Mastered DSA concepts using Java. Developed dynamic and responsive web applications with HTML, CSS, JavaScript, and React.Built a variety of projects, including:'







  return (
    
    <section id='about' className='about'>
     <Pageheadercontainer   HeadersText = "About Me" icon = {<BsInfoCircleFill size={40}/>} />

      <div className='about-content'>
        <div className='about-content__personal__wrapper'>
        <Animate
  play 
  duration={1.5}
  delay={1}
  start={{
    transform: 'translateX(-900px)',
  }}
  end={{
    transform : 'translatex(0px)',
  }}
  >
   
     <h3>Front End developer</h3>
     <p>{jobsummery}</p>

</Animate>
<Animate
  play 
  duration={1.5}
  delay={1}
  start={{
    transform: 'translateX(500px)',
  }}
  end={{
    transform : 'translatex(0px)',
  }}
  >
<h3 className='personalinformationHeaderText'>personal information</h3>
<ul>
  {
    personDetail.map((item , i)=>(
      <li key={i}>
        <span className='title'>{item.label}</span>
        <span className='value'>{item.value}</span>

      </li>
    ))
  }
</ul>
</Animate>
        </div>
        <div className='about-content__service__wrapper'>
          <div className='about-content__service__wrapper__inner-content'>
          <div className='fadev'>
            <FaDev size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div className='Diandroid'>
          <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div className='fadatabase'>
          <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div className='diapple'>
          < DiApple size={60} color="var(--yellow-theme-main-color)"/>
          </div>
        </div>
          </div>
          
 
      </div>
    </section>
  )
}

export default About;