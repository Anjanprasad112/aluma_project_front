import styles from "../style";
import Button3 from "./Button3";
import img from "../assets/icons8gmail.svg";
// import emailjs from '@emailjs/browser';
// import React, { useRef } from 'react';
import Contact  from "./Contact.jsx";


const CTA = () => (
  
  
  <section
    className={`${styles.flexCenter}  ${styles.padding} sm:flex-row flex-col bg-white rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col justify-center items-center ">
      
      
      <h3 className="font-montserrat font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full text-center">
        Subscribe to stay up to date
      </h3>
      <p className={`${styles.paragraph}`}>
        Subscribe to our newsletter for the latest news
      </p>
      <p className={`${styles.paragraph}`}>
        and products straight to your inbox
      </p>

      <div className="flex sm:flex-row items-center justify-between w-full md:w-3/5 rounded-[30px] border-2 p-1 mt-2">
        <img src={img} alt="" className="h-8 ml-1 md:ml-4" />
        
        
        <Contact/>
      </div>
      <div className="mt-2">
        <p className={`${styles.paragraph} ${styles.flexCenter}`}>
          Aluma Respects Your Privacy. No Spam!
        </p>
      </div>
    </div>
  </section>
);

export default CTA;
