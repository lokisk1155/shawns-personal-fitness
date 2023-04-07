import React, { useState } from "react";
import type { PageProps } from "gatsby";

const MobileNav: React.FC<PageProps> = () => {
  const [navOpen, setNavOpen] = useState(null);

  if (navOpen) {
    return <></>;
  } else {
    return <></>;
  }
};

export default MobileNav;
