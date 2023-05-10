import * as React from "react";
import { CopyInfoButtonStyle } from "../../styles/Buttons";

interface SubmitScheduleProps {
  formRef: React.RefObject<HTMLFormElement>;
}

const SubmitSchedule: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleCopyInfoButton = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDataToObject(formData)),
    };

    const request = await fetch(
      "https://email-server-shawns-fitness.herokuapp.com/send-email",
      requestOptions
    );

    if (!request) return;

    const element = document.getElementById("Buisness-Address");
    const text = element?.innerText;
    if (text) {
      navigator.clipboard.writeText(text);
      const button = document.getElementById("Submit-Inquire-Button");
      if (button) {
        button.innerHTML = "&#x2713 Copied to clipboard";
        button.style.backgroundColor = "lightgreen";
        button.style.borderColor = "lightgreen";
        button.style.borderWidth = "4px";
        button.style.borderStyle = "solid";
      }
    }
  };

  return (
    <button
      type="submit"
      id="Submit-Inquire-Button"
      style={CopyInfoButtonStyle}
      onClick={handleCopyInfoButton}
    >
      Submit
    </button>
  );
};

export default SubmitSchedule;
