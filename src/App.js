import './App.css';
import {  Route, Routes,useLocation } from 'react-router-dom';
import Project from './container/Project';
import Home from './container/Home';
import Skill from './container/Skill';
import About from './container/About';
import Resume from './container/Resume';
import Contact from './container/Contact';
import Navbar from './component/Navbar'
import UserInfo from './container/userDetails/UserInfo';

// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';

function App() {
  return (
    <div className='App'>
   {/* Navbar */}
   
   <Navbar/>


<div className='APP__main-page-container'>

<Routes>
       {/* this is become default route */}
      <Route index path="/" element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='userInfo' element={<UserInfo/>}/>
      <Route path='skill' element={<Skill/>}/>
      <Route path='Project' element={<Project/>}/>
      <Route path='Resume' element={<Resume/>} />
    </Routes>
    </div>
    </div>
    
  );
}

export default App;
