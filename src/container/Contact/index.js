import React, { useState } from "react";
import Pageheadercontainer from "../../component/Pageheadercontainer";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import './style.css'
import { MdTextRotateVertical } from "react-icons/md";

function Contact() {


const[FomeData, setformdata] = useState({ firstName : "", LastName: "", email : "", comment : ""})

console.log(FomeData)
function changehandler(event){
  // const {name ,value,type,comment} = event.target;
 setformdata(prevFomeData =>{
  return{
    ...prevFomeData,
  [event.target.name]  : event.target.value
  }
 })

}
function submitHandler(event){
  event.preventDefault()
 console.log("finiallly")
 console.log(FomeData);

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
                <input type="text" name="firstName" onChange={changehandler}  value={FomeData.firstName} id="name" className="inputname"/>
               
              </div>
              <div >
              <label htmlFor="name"  className="namelabel">Lastname</label>
                <input type="text" name="LastName" onChange={changehandler}  value={FomeData.LastName} id="name" className="inputname"/>
               
              </div>
              <div>
              <label htmlFor="email" className="emaillabel">Email</label>
                <input type="email" name="email" className="inputemail"  onChange={changehandler}  value={FomeData.email}  id="email"/>
               
              </div>
              <br />
              {/* <div>
              <label htmlFor="email" className="emaillabel">Email</label>
                <input type="email" name="email" className="inputemail"  onChange={changehandler}  value={FomeData.email}  id="email"/>
               
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
                value={FomeData.comment}
                  className="inputdescription"
                  type={"text"}
                  rows={5}
                  id="comment"
                />
                
              </div>
            </div>
            <button>Submit</button>
          </div>
          </form>
        </Animate>
      </div>
    </section>
  );
}

export default Contact;
