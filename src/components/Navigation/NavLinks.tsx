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
import DtHeaderSocialLinks from "../Social/DesktopHeaderSocials";

const NavLinks: React.FC = () => {
  return (
    <div style={NavigationContainer}>
      <header style={celebrationBannerHeader}>
        <h1 style={celebrationText}>
          Celebrating 29 years of Shawn's Personal Fitness
        </h1>
        <DtHeaderSocialLinks />
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
