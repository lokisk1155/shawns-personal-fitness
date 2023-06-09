import * as React from "react";
import NavLinks from "./NavLinks";
import useMediaQuery from "../../utils/useMediaQuery";
import MobileNav from "./MobileNav";

const Navigation: React.FC = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  if (isAboveMediumScreens) {
    return <NavLinks />;
  } else {
    return <MobileNav />;
  }
};

export default Navigation;
