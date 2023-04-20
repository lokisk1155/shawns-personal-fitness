import * as React from "react";
import { KatonahInfoContainer, BuisnessInfoContainer } from "../../styles/Maps";
import CopyInfoButton from "../Buttons/CopyInfoButton";

const KatonahInfo: React.FC = () => {
  return (
    <section style={KatonahInfoContainer}>
      <h2>Location</h2>
      <address id="Buisness-Address" style={BuisnessInfoContainer}>
        <p>Shawn's Personal Fitness </p>
        <p>223 Katonah Avenue Katonah</p>
        <p>NY 10536</p>
      </address>
      <CopyInfoButton />
    </section>
  );
};

export default KatonahInfo;
