import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col justify-center items-center">
      <h3 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center">Subscribe for more updates</h3>
      {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p> */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-3/5">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Enter your email"
                className="p-3 w-full rounded-md text-black mt-2"
              />
             
              <div  className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button/>
    </div>
    
           
          </div>
    </div>

    
  </section>
);

export default CTA;
