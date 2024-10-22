import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Body.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Body = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i4z07bd', 'template_bnhdlz9', form.current, {
        publicKey: 'vOTjCZHRoLmXPxK95',
      })
      .then(
        () => {
          setSuccessMessage('Message sent successfully!');
          form.current.reset(); // Clear form inputs
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="mainCont">
      {/* Contact Form */}
      <div className="bodyForm">
        <h2>Contact Us</h2>
        {successMessage && <p className="successMessage">{successMessage}</p>} {/* Success Message */}
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-body">
            <label>Name</label><br />
            <input type="text" name="to_name" />
          </div>
          <div className="form-body">
            <label>Email</label><br />
            <input type="email" name="from_name" />
          </div>
          <div className="form-body">
            <label>Message</label><br />
            <textarea name="message" rows="4" />
          </div>
          <div className="form-button">
            <input type="submit" value="Send Message" />
          </div>
        </form>
        <hr className="line" />
        <div className="details">
          <p><FaMapMarkerAlt /> 12th Street, Kumarathunga Mawatha, Colombo 07, Sri Lanka</p>
          <p><FaEnvelope /> abc@gmail.com</p>
          <p><FaPhoneAlt /> (011) 234 5567</p>
        </div>
      </div>

      {/* Map */}
      <div className="map">
        <iframe
          width="940"
          height="700"
          src="https://maps.google.com/maps?width=650&amp;height=920&amp;hl=en&amp;q=Institute%20of%20Alexandria,%20262%20B240,%20Sri%20Jayawardenepura%20Kotte%2010120+(Where%20are%20we)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>
      </div>
    </div>
  );
}

export default Body;