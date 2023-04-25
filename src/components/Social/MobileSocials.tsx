import * as React from "react";
import facebook from "../../assets/fb.jpg";
import instagram from "../../assets/ig.jpg";
import {
  AddressMobileStyles,
  FacebookMobileStyles,
  InstagramMobileStyles,
} from "../../styles/Social";

const MobileSocials: React.FC = () => {
  return (
    <address style={AddressMobileStyles}>
      <a
        href="https://www.facebook.com/shawnsfitness"
        target="_blank"
        rel="noopener"
      >
        <img
          src={facebook}
          style={InstagramMobileStyles}
          alt="Follow us on Facebook"
        />
      </a>
      <a
        href="https://www.instagram.com/shawnspersonalfitness/"
        target="_blank"
        rel="noopener"
      >
        <img
          src={instagram}
          style={FacebookMobileStyles}
          alt="Follow us on Instagram"
        />
      </a>
    </address>
  );
};

export default MobileSocials;
