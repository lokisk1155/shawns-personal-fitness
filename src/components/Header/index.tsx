import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavLinks from "./NavLinks";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavLinks />
    </>
  );
};

export default IndexPage;
