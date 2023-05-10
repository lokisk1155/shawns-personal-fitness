import * as React from "react";
import { formDataToObject } from "./utils/formDataToObj";
import SubmitSchedule from "../Buttons/SubmitSchedule";
import {
  DTContainerStyles,
  FormStyles,
  InputStyles,
  NameContainerStyles,
  NameStyles,
} from "../../styles/Schedule";

const MobileForm: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleFormChange = () => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  };

  return (
      <form ref={formRef} onChange={handleFormChange} style={{ display: "flex", flexDirection: "column", height: "60vh", width: "100vw", justifyContent: "space-between" }}>
        <div style={NameContainerStyles}>
          <input
            style={NameStyles}
            placeholder="First"
            type="text"
            id="firstName"
            name="firstName"
            required
          />
          <input
            style={NameStyles}
            placeholder="Last"
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </div>
        <input
          style={InputStyles}
          placeholder="email"
          type="email"
          id="email"
          name="email"
          required
        />
        <input
          style={InputStyles}
          placeholder="phone number"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
        />
        <input
          style={InputStyles}
          placeholder="address"
          type="text"
          id="address"
          name="address"
          required
        />
        <SubmitSchedule formRef={formRef} isFormValid={isFormValid} />
      </form>
  );
};

export default MobileForm;
