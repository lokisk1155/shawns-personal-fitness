import * as React from "react";
import { CopyInfoButtonStyle } from "../../styles/Buttons";

const CopyInfoButton: React.FC = () => {
  const handleCopyInfoButton = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    const element = document.getElementById("Buisness-Address");
    const text = element?.innerText;
    if (text) {
      navigator.clipboard.writeText(text);
      const button = document.getElementById("Copy-Buisness-Address");
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
      id="Copy-Buisness-Address"
      style={CopyInfoButtonStyle}
      onClick={handleCopyInfoButton}
    >
      Click to copy address
    </button>
  );
};

export default CopyInfoButton;
