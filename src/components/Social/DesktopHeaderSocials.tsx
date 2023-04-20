import * as React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.jpg";

const DtHeaderSocialLinks: React.FC = () => {
  return (
    <address
      style={{
        position: "absolute",
        right: "0",
        marginRight: "10px",
        width: "80px",
        backgroundColor: "whitesmoke",
        height: "65px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        href="https://www.facebook.com/shawnsfitness"
        target="_blank"
        rel="noopener"
      >
        <img
          src={facebook}
          style={{
            height: "35px",
            width: "35px",
            backgroundColor: "transparent",
            borderRadius: "10px",
            margin: "auto",
            padding: "1px",
          }}
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
          style={{
            height: "35px",
            width: "35px",
            backgroundColor: "transparent",
            borderRadius: "10px",
            margin: "auto",
            padding: "1px",
          }}
          alt="Follow us on Instagram"
        />
      </a>
    </address>
  );
};

export default DtHeaderSocialLinks;
