import * as React from "react";
import { CSSProperties } from "react";

const KatonahInfoContainer: CSSProperties = {
  zIndex: 1,
  marginLeft: "3vw",
  height: "300px",
  width: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "3px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2), 0px 8px 12px rgba(0, 0, 0, 0.1)",
};

const BuisnessInfoContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const CopyInfoButton: CSSProperties = {
  width: "80%",
  height: "15%",
  border: "1px dashed lightgrey",
};

const KatonahInfo: React.FC = () => {
  const handleClick = (): void => {
    const element = document.getElementById("#Buisness-Address");
    const text = element?.innerText;
    if (text) {
      navigator.clipboard.writeText(text);
      const button = document.getElementById("#Copy-Buisness-Address");
      if (button) {
        button.innerHTML = "Copied";
        button.style.backgroundColor = "lightgreen";
        button.style.borderColor = "lightgreen";
        button.style.borderWidth = "4px";
        button.style.borderStyle = "solid";
      }
    }
  };

  return (
    <section style={KatonahInfoContainer}>
      <h2>Location</h2>
      <address id="#Buisness-Address" style={BuisnessInfoContainer}>
        <p>Shawn's Personal Fitness </p>
        <p>223 Katonah Avenue Katonah</p>
        <p>NY 10536</p>
      </address>
      <button
        id="#Copy-Buisness-Address"
        style={CopyInfoButton}
        onClick={handleClick}
      >
        Click to copy address
      </button>
    </section>
  );
};

export default KatonahInfo;
