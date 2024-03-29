import { features } from "../constants";
import styles, { layout } from "../style";
import Button1 from "./Button1";
import img from '../assets/img-01.png';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px]  ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-gray-100`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-montserrat font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-montserrat font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Image = () =>(
<div>
  <img src={img} alt="Image-01" />
</div>
);

const Business = () =>  (
  <section id="features" className={`${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} `}>
        Features  <br className="sm:block hidden" /> Aluma Offers
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Here are some features which Aluma provides.
      </p>

      <Button1 styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    <div>
      <img src={img} alt="image" />
    </div>
  </section>
);

export default Business;
