import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Body.css'; // Make sure to create a CSS file for styling
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const Body= () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i4z07bd', 'template_bnhdlz9', form.current, {
        publicKey: 'vOTjCZHRoLmXPxK95',
      })
      .then(
        () => {
          console.log("MESSAGE SENT SUCCESSFULLY!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

  return (
    <div>
    <div className="body1">
      <div className="body-form">
        <form ref={form} onSubmit={sendEmail}>
        <div className="form-head"> <p> Contact Us</p> </div>
        <div className="form-body">
          <label>Name</label> <br></br>
          <input type="text" name="to_name" />
        </div>
        <div className="form-body">
          <label>Email</label> <br></br>
          <input type="email" name="from_name" />
        </div>
        <div className="form-body">
          <label>Message</label> <br></br>
          <textarea name="message" />
        </div>
        <div className="form-button"> 
          <input type="submit" value="Send Message" />
        </div>
    </form>
    
    <div className="body-infoH">
        <div className="body-info1"></div>
          <div className="body-info2">
             <p> <FaMapMarkerAlt /> 12th street, Kumarathunga Mawatha,Colombo 07, Sri Lanka  </p> 
          </div>
          <div className="body-info2">
             <p> <FaEnvelope /> abc@gmail.com </p>  
          </div>
          <div className="body-info2">
             <p> <FaPhoneAlt />  (011) 234 5567 </p>
             </div>
           </div>
       </div>
</div>
      
      
        <div className="map">
        <section className="map-section1">
        <iframe width="650" height="920" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=650&amp;height=920&amp;hl=en&amp;q=Institute%20of%20Alexandria,%20262%20B240,%20Sri%20Jayawardenepura%20Kotte%2010120+(Where%20are%20we)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>
      </section>
    </div>
    </div>

      
      
    );
};

export default Body;