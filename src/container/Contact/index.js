import React, { useState } from "react";
import Pageheadercontainer from "../../component/Pageheadercontainer";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import './style.css'
import { MdTextRotateVertical } from "react-icons/md";
import axios from "axios";
import { baseURL } from "../../utils/base";

function Contact() {


const[formData, setformdata] = useState({ firstName : "", LastName: "", email : "", comment : ""})

console.log(formData)
function changehandler(event){
  // const {name ,value,type,comment} = event.target;
 setformdata(prevformData =>{
  return{
    ...prevformData,
  [event.target.name]  : event.target.value
  }
 })

}
function submitHandler(event){
  event.preventDefault()
  const payload = {
    firstName:formData.firstName,
    lastName:formData.LastName,
    email:formData.email,
    description:formData.comment
  }

  axios
  .post(`${baseURL}/contactDetails`,payload)
  .then((res)=>{
    console.log("details send successfully");
  })
  .catch((error)=>{
    console.log("error in axios catch");
  })
  //  console.log("finiallly")
//  console.log(payload);

}




  return (
    <section id="Contact" className="contact">
      <Pageheadercontainer
        HeadersText="Contact"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="contact__container">
        <Animate
          play
          duration={1.5}
          delay={0}
          start={{
            transform: 'translateX(-200px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
        >
          <h3 className="contact__container__header">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(200px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <form onSubmit={submitHandler}>
          <div className="contact__container__form">
            <div className="contact__container__form__controlwrapper">
              <div >
              <label htmlFor="name"  className="namelabel">Firstname</label>
                <input type="text" name="firstName" onChange={changehandler}  value={formData.firstName} id="name" className="inputname"/>
               
              </div>
              <div >
              <label htmlFor="name"  className="namelabel">Lastname</label>
                <input type="text" name="LastName" onChange={changehandler}  value={formData.LastName} id="name" className="inputname"/>
               
              </div>
              <div>
              <label htmlFor="email" className="emaillabel">Email</label>
                <input type="email" name="email" className="inputemail"  onChange={changehandler}  value={formData.email}  id="email"/>
               
              </div>
              <br />
              {/* <div>
              <label htmlFor="email" className="emaillabel">Email</label>
                <input type="email" name="email" className="inputemail"  onChange={changehandler}  value={formData.email}  id="email"/>
               
              </div> */}
              <div >
              <label
                  htmlFor="comment"
                  className="descriptionlabel"
                >description</label>
                <textarea
                onChange={changehandler}
                name="comment"
                required
                value={formData.comment}
                  className="inputdescription"
                  type={"text"}
                  rows={5}
                  id="comment"
                />
                
              </div>
            </div>
            <button className="submit-btn">Submit</button>
          </div>
          </form>
        </Animate>
      </div>
    </section>
  );
}

export default Contact;
