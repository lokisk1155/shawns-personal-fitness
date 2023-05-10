import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../components/Navigation/indexNav";
import ContactForm from "../components/Schedule/ContactForm";
import useMediaQuery from "../utils/useMediaQuery";
import { MainStyles } from "../styles/Schedule";

const Schedule: React.FC<PageProps> = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const mainMargin = isAboveMediumScreens ? "130px" : "65px";

  return (
    <>
      <Navigation />
      <main style={{ marginTop: mainMargin, ...MainStyles }}>
        <ContactForm />
      </main>
    </>
  );
};

export default Schedule;

export const Head: HeadFC = () => <title>Schedule first session</title>;
