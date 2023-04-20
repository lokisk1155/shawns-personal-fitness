import * as React from "react";
import { Link } from "gatsby";
import { MainLinks } from "../../constants/mainLinks";
import {
  mainLinksHeaderContainer,
  mainLink,
  celebrationBannerHeader,
  celebrationText,
  NavigationContainer,
} from "../../styles/Header";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.jpg";

const NavLinks: React.FC = () => {
  return (
    <div style={NavigationContainer}>
      <header style={celebrationBannerHeader}>
        <h1 style={celebrationText}>
          Celebrating 29 years of Shawn's Personal Fitness
        </h1>
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
      </header>
      <nav style={mainLinksHeaderContainer}>
        {MainLinks.map((link) => (
          <Link style={mainLink} to={link.linkTo} key={link.name}>
            <p>{link.name}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavLinks;
