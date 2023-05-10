import * as React from "react";
import { formDataToObject } from "../../components/Schedule/utils/formDataToObj";
import { SubmitFormStyles } from "../../styles/Schedule";
import useMediaQuery from "../../utils/useMediaQuery";

interface SubmitScheduleProps {
  formRef: React.RefObject<HTMLFormElement>;
  isFormValid: boolean;
}

const SubmitSchedule: React.FC<SubmitScheduleProps> = ({
  formRef,
  isFormValid,
}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:600px)");

  const handleCopyInfoButton = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!formRef.current) return;

    if (!isFormValid) return;

    const button = document.getElementById("Submit-Inquire-Button");
    if (button) {
      button.innerHTML = "&#x2713 Thank you for inquiring";
      button.style.backgroundColor = "lightgreen";
      button.style.borderColor = "lightgreen";
      button.style.borderWidth = "4px";
      button.style.borderStyle = "solid";
    }

    const formData = new FormData(formRef.current);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDataToObject(formData)),
    };

    await fetch(
      "https://email-server-shawns-fitness.herokuapp.com/send-email",
      requestOptions
    );
  };

  return (
    <button
      type="submit"
      id="Submit-Inquire-Button"
      style={{
        backgroundColor: isFormValid ? "lightgreen" : "whitesmoke",
        width: isAboveMediumScreens ? "81.5%" : "100%",
        ...SubmitFormStyles,
      }}
      onClick={handleCopyInfoButton}
    >
      Submit
    </button>
  );
};

export default SubmitSchedule;
