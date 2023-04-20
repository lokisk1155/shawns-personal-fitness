import * as React from "react";
import facebook from "../../assets/fb.jpg";
import instagram from "../../assets/ig.jpg";
import {
  AddressStyles,
  FacebookStyles,
  InstagramStyles,
} from "../../styles/Social";

const DtHeaderSocialLinks: React.FC = () => {
  return (
    <address style={AddressStyles}>
      <a
        href="https://www.facebook.com/shawnsfitness"
        target="_blank"
        rel="noopener"
      >
        <img
          src={facebook}
          style={InstagramStyles}
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
          style={FacebookStyles}
          alt="Follow us on Instagram"
        />
      </a>
    </address>
  );
};

export default DtHeaderSocialLinks;
