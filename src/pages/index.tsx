import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../components/Navigation/indexNav";
import Home from "../components/Home/IndexHome";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation />
      <Home />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Shawns Personal Fitness</title>;
