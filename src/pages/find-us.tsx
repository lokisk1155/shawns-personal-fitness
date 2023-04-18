import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../components/Navigation/indexNav";
import { useLoadScript } from "@react-google-maps/api";

const FindUsPage: React.FC<PageProps> = () => {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${googleMapsApiKey}`,
  });

  return (
    <>
      <Navigation />
    </>
  );
};

export default FindUsPage;

export const Head: HeadFC = () => (
  <title>Personal training in Westchester</title>
);
