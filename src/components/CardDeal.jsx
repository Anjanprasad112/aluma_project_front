import { card } from "../assets";
import styles, { layout } from "../style";
import Button1 from "./Button1";
import img from '../assets/img-02.png';

const CardDeal = () => (
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
        Book your appointment anywhere anytime.
      </p>

      <Button1 styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={img} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
