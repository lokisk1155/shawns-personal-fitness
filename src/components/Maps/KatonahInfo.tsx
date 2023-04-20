import React, { useState } from "react";
import {
  KatonahInfoContainer,
  KatonahInfoMinimized,
  BuisnessInfoContainer,
} from "../../styles/Maps";
import CopyInfoButton from "../Buttons/CopyInfoButton";
import MinimizeExpandKMap from "../Buttons/MinimizeExpandKMap";

const KatonahInfo: React.FC = () => {
  const [cardState, setCardState] = useState(true);

  return (
    <>
      {cardState ? (
        <section style={KatonahInfoContainer}>
          <h2>Location</h2>
          <MinimizeExpandKMap
            cardState={cardState}
            setCardState={setCardState}
          />
          <address id="Buisness-Address" style={BuisnessInfoContainer}>
            <p>Shawn's Personal Fitness </p>
            <p>223 Katonah Avenue Katonah</p>
            <p>NY 10536</p>
          </address>
          <CopyInfoButton />
        </section>
      ) : (
        <div style={KatonahInfoMinimized}>
          <MinimizeExpandKMap
            cardState={cardState}
            setCardState={setCardState}
          />
        </div>
      )}
    </>
  );
};

export default KatonahInfo;
