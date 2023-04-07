import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavLinks from "../components/Header/index";
import useMediaQuery from "../utils/useMediaQuery";
import MobileNav from "../components/Header/MobileNav";

const IndexPage: React.FC<PageProps> = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  if (isAboveMediumScreens) {
    return <NavLinks />;
  } else {
    return <MobileNav />;
  }
};

export default IndexPage;

export const Head: HeadFC = () => <title>Shawns Personal Fitness</title>;
