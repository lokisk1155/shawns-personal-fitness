import * as React from "react";
import { MeKMapStyles } from "../../styles/Buttons";

type MinimizeExpandKMapProps = {
  cardState: boolean;
  setCardState: (state: boolean) => void;
};

const MinimizeExpandKMap: React.FC<MinimizeExpandKMapProps> = ({
  cardState,
  setCardState,
}) => {
  const handleMinimizeExpandKMap = (): void => {
    // Toggle the cardState value
    setCardState(!cardState);
  };

  return (
    <>
      {cardState ? (
        <svg
          onClick={handleMinimizeExpandKMap}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="35px"
          height="35px"
          style={MeKMapStyles}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M5 11h14v2H5z" />
        </svg>
      ) : (
        <svg
          onClick={handleMinimizeExpandKMap}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="35"
          height="35"
          style={MeKMapStyles}
        >
          <rect x="4" y="11" width="16" height="2" fill="black" />
          <rect x="11" y="4" width="2" height="16" fill="black" />
        </svg>
      )}
    </>
  );
};

export default MinimizeExpandKMap;
