import React from 'react'
import styles, { layout } from "../style";
import img from '../assets/img-02.png';


const CardDeal = () => {
  return (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        How Aluma Works? <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Aluma works in a simple manner <br/>
        Find a Saloon in your locality,
        <br/>
        Explore your dezire services on-the-go,<br/>
        Book your appointment <p className="font-new text-blue-600 text-xl  ">anywhere anytime.</p> 
      </p>

      <button onClick={()=>navigation()} className={`mt-10 py-4 px-6 font-montserrat  font-medium text-[18px] text-white bg-black rounded-[30px] outline-none ${styles}`}>
        More Info
      </button>
    </div>


    <div className={layout.sectionImg}>
      <img src={img} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
  )
}

export default CardDeal;
