import React, { useRef } from 'react';
// import Button3 from './Button3';
import emailjs from '@emailjs/browser';
import styles from "../style";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1x7tgot', 'template_imcphdh', form.current, 'rttpwcu_NHw27e6xi')
      .then((result) => {
          console.log(result.text);
          console.log("Email sent successfully")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}  className="flex sm:flex-row items-center justify-between w-full">
      
      <input type="email" name="user_email"
      className="flex-1 h-full w-full visible text-black  focus:outline-none p-1" 
      placeholder="Enter your email address"
      autocomplete="off"/>
      
     <button type="submit" value="Send" className={`p-2 w-auto md:p-3 h-full font-montserrat font-medium text-white bg-black rounded-[30px] outline-none ${styles}`}>
        Notify Me
     </button>
    </form>
  );
};
export default Contact;