import * as React from "react";
import { MainLinks } from "../../constants/mainLinks";
import { Link } from "gatsby";
import NavCloseSvg from "../svg/NavCloseSvg";
import {
  HeaderContainer,
  HeaderText,
  MobileLinksContainer,
  MobileLink,
  MobileNavigationContainer,
} from "../../styles/MobileNavigation";

interface MobileOpenProps {
  closeNav: () => void;
}

const MobileOpen: React.FC<MobileOpenProps> = ({ closeNav }) => {
  const closeNavigation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    closeNav();
  };

  return (
    <div style={MobileNavigationContainer}>
      <header style={HeaderContainer} onClick={closeNavigation}>
        <h1 style={HeaderText}>Shawn's Personal Fitness</h1>
        <NavCloseSvg />
      </header>
      <nav style={MobileLinksContainer}>
        {MainLinks.map((link) => (
          <Link style={MobileLink} to={link.linkTo} key={link.name}>
            <p>{link.name}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileOpen;
