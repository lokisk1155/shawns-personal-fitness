import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavLinks from "./NavLinks";
import useMediaQuery from "../../utils/useMediaQuery";
import MobileNav from "./MobileNav";

const Navigation: React.FC<PageProps> = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  if (isAboveMediumScreens) {
    return <NavLinks />;
  } else {
    return <MobileNav />;
  }
};

export default Navigation;

export const Head: HeadFC = () => <title>Shawns Personal Fitness</title>;
