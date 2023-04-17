import * as React from "react";
import {
  HeaderContainer,
  HeaderText,
  MobileNavigationContainer,
} from "../../styles/MobileNavigation";
import NavSvg from "../svg/NavSvg";

interface MobileClosedProps {
  openNav: () => void;
}

const MobileClosed: React.FC<MobileClosedProps> = ({ openNav }) => {
  const openNavigation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    openNav();
  };

  return (
    <div style={MobileNavigationContainer}>
      <header style={HeaderContainer} onClick={openNavigation}>
        <h1 style={HeaderText}>Shawn's Personal Fitness</h1>
        <NavSvg />
      </header>
    </div>
  );
};

export default MobileClosed;
