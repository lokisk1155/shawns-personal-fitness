import * as React from "react";
import SubmitSchedule from "../Buttons/SubmitSchedule";
import {
  MobileContainerStyles,
  MobileFormStyles,
  MobileInputStyles,
  MobileNameContainerStyles,
  MobileNameStyles,
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
    <div style={MobileContainerStyles}>
      <form ref={formRef} onChange={handleFormChange} style={MobileFormStyles}>
        <div style={MobileNameContainerStyles}>
          <input
            style={MobileNameStyles}
            placeholder="First"
            type="text"
            id="firstName"
            name="firstName"
            required
          />
          <input
            style={MobileNameStyles}
            placeholder="Last"
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </div>
        <input
          style={MobileInputStyles}
          placeholder="email"
          type="email"
          id="email"
          name="email"
          required
        />
        <input
          style={MobileInputStyles}
          placeholder="phone number"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
        />
        <input
          style={MobileInputStyles}
          placeholder="address"
          type="text"
          id="address"
          name="address"
          required
        />
        <SubmitSchedule formRef={formRef} isFormValid={isFormValid} />
      </form>
    </div>
  );
};

export default MobileForm;
