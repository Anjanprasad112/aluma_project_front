import React from "react";
// let a = ['Subscribe','More Info','Get Started'];
const Button = ({ styles }) => (
  
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    More Info
  </button>
);

export default Button;
