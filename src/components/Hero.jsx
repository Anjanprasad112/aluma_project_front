import styles from "../style";
import { discount, robot } from "../assets";
// import GetStarted from "./GetStarted";
import img from "../assets/img-05.png";
import Button2 from "./Button2"


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            {/* The Next <br className="sm:block hidden" />{" "} */}
            <span className="text-gradient"></span>{" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-center text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          Grooming services at
        </h1>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-center text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          your fingertips.
        </h1>
        <div className="relative m-auto w-3/6 ">
          <img src={img} alt="image" />
        </div>
        <div className="relative m-auto text-2xl mb-2">
        <p className="text-center text-black w-full">
        Aluma allows users to
        </p>
        <p className="text-center text-black w-full">
        have their grooming services
        </p>
        <p className="text-center text-black w-full">
        at their fingertips.
        </p>
        </div>
        
      <Button2 styles="mt-4 p-1"/>
      </div>

     {/* <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img alt="carousel slider will be there here" className="w-[100%] h-[100%] relative z-[5] text-black" />
      </div>
        */}

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
