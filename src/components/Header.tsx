import * as React from "react";
import { MainLinks } from "../constants/mainLinks";
import { mainLinksHeaderContainer } from "./styles/mainLinksHeaderContainer";
import { Link } from "gatsby";

const Header: React.FC = () => {
  return (
    <nav style={mainLinksHeaderContainer}>
      {MainLinks.map((link) => (
        <Link to={link.linkTo} key={link.name}>
          <p>{link.name}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Header;
