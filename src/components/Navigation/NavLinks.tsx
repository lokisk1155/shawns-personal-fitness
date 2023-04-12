import * as React from "react";
import { MainLinks } from "../../constants/mainLinks";
import { mainLinksHeaderContainer, mainLink } from "../../styles/Header";
import { Link } from "gatsby";

const NavLinks: React.FC = () => {
  return (
    <nav style={mainLinksHeaderContainer}>
      {MainLinks.map((link) => (
        <Link style={mainLink} to={link.linkTo} key={link.name}>
          <p>{link.name}</p>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
