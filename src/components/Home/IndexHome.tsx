import * as React from "react";
import useMediaQuery from "../../utils/useMediaQuery";

const Home: React.FC = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  if (isAboveMediumScreens) {
    return <></>;
  } else {
    return <></>;
  }
};

export default Home;
