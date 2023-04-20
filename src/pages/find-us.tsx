import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../components/Navigation/indexNav";
import KatonahMap from "../components/Maps/KatonahMap";
import { mainContainer } from "../styles/FindUs";
import KatonahInfo from "../components/Maps/KatonahInfo";

const FindUsPage: React.FC<PageProps> = () => {
  //
  return (
    <>
      <Navigation />
      <main style={mainContainer}>
        <KatonahMap />
        <KatonahInfo />
      </main>
    </>
  );
};

export default FindUsPage;

// The Head component sets the meta tags for the FindUsPage component
export const Head: HeadFC = () => (
  <>
    <title>
      Shawn's Personal Fitness - Training Studio in Westchester, Katonah
    </title>
    <meta
      name="description"
      content="Find Shawn's Personal Fitness at 223 Katonah Avenue, Katonah, NY 10536. Locate us on Google Maps and get directions to our state-of-the-art training studio in Westchester."
    />
    {/* <link rel="canonical" href={`${window.location.origin}/find-us`} /> */}
  </>
);
