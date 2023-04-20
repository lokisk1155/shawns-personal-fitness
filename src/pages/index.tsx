import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../components/Navigation/indexNav";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Shawns Personal Fitness</title>;
