import * as React from "react";
import { MainLinks } from "../../constants/mainLinks";
import {
  mainLinksHeaderContainer,
  mainLink,
  celebrationBannerHeader,
  celebrationText,
} from "../../styles/Header";
import { Link } from "gatsby";

const NavLinks: React.FC = () => {
  return (
    <>
      <header style={celebrationBannerHeader}>
        <h1 style={celebrationText}>25 years of Shawn's Personal Fitness</h1>
      </header>
      <nav style={mainLinksHeaderContainer}>
        {MainLinks.map((link) => (
          <Link
            className="nav-link"
            style={mainLink}
            to={link.linkTo}
            key={link.name}
          >
            <p>{link.name}</p>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default NavLinks;
