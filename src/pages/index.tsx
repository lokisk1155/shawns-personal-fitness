import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import IndexNav from "../components/Navigation";

const IndexPage: React.FC<PageProps> = () => {
  return <IndexNav />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Shawns Personal Fitness</title>;
