import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../components/Navigation/indexNav";
import KatonahMap from "../components/Maps/KatonahMap";
import { mainContainer } from "../styles/FindUs";

const FindUsPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation />
      <main style={mainContainer}>
        <KatonahMap />
      </main>
    </>
  );
};

export default FindUsPage;

export const Head: HeadFC = () => <title>Training studio in Westchester</title>;
