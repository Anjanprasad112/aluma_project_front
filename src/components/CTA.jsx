import styles from "../style";
import Button3 from "./Button3";
import img from "../assets/icons8gmail.svg";

const CTA = () => (
  <section
    className={`${styles.flexCenter}  ${styles.padding} sm:flex-row flex-col bg-white rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col justify-center items-center">
      <h3 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full text-center">
        Subscribe to stay up to date
      </h3>
      <p className={`${styles.paragraph}`}>
        Subscribe to our newsletter for the latest news
      </p>
      <p className={`${styles.paragraph}`}>
        and products straight to your inbox
      </p>

      <div className="flex sm:flex-row items-center justify-between w-3/5 rounded-[30px] border-2 p-1 ">
        <img src={img} alt="" className="w-8 h-8 ml-4" />
        <input
          type="email"
          required
          autoComplete="off"
          placeholder="Please enter your email address"
          className="flex-1 h-10 px-6 m-2 w-full text-black mt-2 focus:outline-none"
        />
        <Button3 className="m-2"/>
      </div>
      <div>
        <p className={`${styles.paragraph}`}>
          Aluma Respects Your Privacy. No Spam!
        </p>
      </div>
    </div>
  </section>
);

export default CTA;
