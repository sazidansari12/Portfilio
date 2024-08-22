import React from 'react'
// import {FaBars} from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { BiAlignRight } from "react-icons/bi";
import './style.css';


const data = [
  {
    label : "HOME",
    to : '/'
  },
  {
    label : "ABOUT",
    to : '/about'
  },
  
  {
    label : "SKILL",
    to : '/skill'
  },
  {
    label : "RESUME",
    to : '/resume'
  },
  {
    label : "PROJECT",
    to : '/Project'
  },
  {
    label : "CONTACT",
    to : '/contact'
  },
];

const Navbar =()=>{
  const[toggleIcon, settoggleicon] = ("false");

const handletoggleicon = () => {
  settoggleicon(!toggleIcon);
};
  return (
    <div>
      <nav className='navabar'>
        <div className='navbar__container'>
          <Link to={'/'} className='navbar__container__logo'>
          SAZID ANSARI 
          </Link>
        </div>
     <ul className={`navbar-__contaner__menu ${toggleIcon ? "active" : ''}`}>

      {
        data.map((item, key)=>(
          <li  key={key} className='navbar__container__menu__item'>
            <Link className='navbar__container__menu__item__link' to={item.to}>
            {item.label}
            
            </Link>

          </li>
        ))
      }

     </ul>
     <div className='navicon' onClick={handletoggleicon}>
      {
        toggleIcon ?  <BiAlignRight size={30}/> : <FaTimes size={30}/>
      }

     </div>
    
      </nav>
    </div>
  )

}
 export default Navbar