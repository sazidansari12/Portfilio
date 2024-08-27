import React, { useEffect, useState } from 'react'
import "./UserInfo.css"
import axios from 'axios'
import { baseURL } from '../../utils/base'
// import { useState } from 'react'/

const UserInfo = () => {


  const [userData,setUserData]  = useState([]);

  useEffect(()=>{
             handleData();
  },[])


    const handleData = async()=>{
        axios
        .get(`${baseURL}/getUserData`)
        .then((data)=>{
            setUserData(data?.data?.data);
            console.log("userData",userData);
        })
        .catch((err)=>{
            console.log("error occurred in handle data in userInfo")
        })
    }
  return (



    <div className='flex-column'>

      {
        userData.length <= 0 &&

        <p> No User Data Yet</p>
        
      }
       
       {

        userData.length > 0 &&
      
      
         <div className='flex'>
         
         <p>Email Address</p>
         {/* <p>Name</p> */}
         <p>Description</p>
         </div>
        }


        <div>

        {
          userData.map((data,id)=>{
            return (

              <div key={id} className='flex data'>

              <p >
                {data?.email}
              </p>
            
              <p> {data?.description}</p>
              </div>
              
            )
          })
        }
        </div>
        
       
        

       
       <button className="getDetails" onClick={handleData}>
             Get UserDetails
       </button>
    </div>
  )
}

export default UserInfo