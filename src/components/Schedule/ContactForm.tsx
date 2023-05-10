import * as React from "react";
import useMediaQuery from "../../utils/useMediaQuery";
import DTForm from "./DTForm";
import MobileForm from "./MobileForm";

const ContactForm: React.FC = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:600px)");

  if (isAboveMediumScreens) {
    return <DTForm />;
  } else {
    return <MobileForm />;
  }
};

export default ContactForm;
