
import React from 'react'
import './Contact.css'

import msgIcon from '../../assets/msgicon.png'
import mail from '../../assets/mail.png'
import call from '../../assets/call.png'
import map from '../../assets/map.png'
import arrow from '../../assets/warrow.png'

const Contact = () => {

 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4cc045c1-b612-47d5-8a09-c724ebe73fad");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();  //^Clear the form
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

    return (
        <div className='contact container'>
            <div className='contact-col'>
                <h3>Send us a Message <img src={msgIcon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li>
                        <img src={mail} alt="" />
                        dynamod886@gmail.com
                    </li>
                    <li>
                        <img src={call} alt="" />
                        +91 93223 54850
                    </li>
                    <li>
                        <img src={map} alt="" />
                        123 Main Street Cityville
                        <br />
                        Stateland,98765
                    </li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Your name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required/>
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter Your Mobile No' required/>
                    <label htmlFor="">Write Your Message here</label>
                    <textarea name="message"  rows="6" placeholder='Enter your message here' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit <img src={arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
