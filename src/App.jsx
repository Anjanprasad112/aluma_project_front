import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-white
      ${styles.flexCenter}`}>
        {/* ${styles.paddingX} */}
      <div className={`${styles.boxWidth}`}>
        <div className="bg-black">
        <Stats />
        </div>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <Business />
        </div>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>

        <Billing />
        </div>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>

        <CardDeal />
        </div>
        <div className={`${styles.boxWidth} ${styles.paddingX} bg-black`}>

        <Testimonials />
        </div>
        {/* <div className={`${styles.boxWidth} ${styles.paddingX} `}>

        <Clients />
        </div> */}
        <div className={`${styles.boxWidth} ${styles.paddingX} bg-black`}>

        <CTA />
        </div>
        <div className={`${styles.boxWidth} ${styles.paddingX} bg-black`}>

        <Footer />
        </div>
        {/* <Screenshow /> */}
      </div>
    </div>
  </div>
);

export default App;
