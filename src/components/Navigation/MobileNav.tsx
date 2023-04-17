import React, { useState } from "react";
import MobileOpen from "./MobileOpen";
import MobileClosed from "./MobileClosed";

const MobileNav: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  if (navOpen) {
    return <MobileOpen closeNav={() => setNavOpen(false)} />;
  } else {
    return <MobileClosed openNav={() => setNavOpen(true)} />;
  }
};

export default MobileNav;
