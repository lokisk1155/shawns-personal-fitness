import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavLinks from "./NavLinks";
import useMediaQuery from "../../utils/useMediaQuery";
import MobileNav from "./MobileNav";

const IndexNav: React.FC<PageProps> = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  if (isAboveMediumScreens) {
    return <NavLinks />;
  } else {
    return <MobileNav />;
  }
};

export default IndexNav;

export const Head: HeadFC = () => <title>Shawns Personal Fitness</title>;
