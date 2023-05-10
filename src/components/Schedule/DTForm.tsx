import * as React from "react";
import { formDataToObject } from "./utils/formDataToObj";
import SubmitSchedule from "../Buttons/SubmitSchedule";

const DTForm: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleFormChange = () => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        height: "500px",
        width: "500px",
      }}
    >
      <form
        ref={formRef}
        onChange={handleFormChange}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "80%",
          width: "80%",
          border: "1px solid grey",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <input
            style={{ height: "35px" }}
            placeholder="First"
            type="text"
            id="firstName"
            name="firstName"
            required
          />
          <input
            style={{ height: "35px" }}
            placeholder="Last"
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </div>
        <input
          style={{ width: "81.5%", alignSelf: "center", height: "35px" }}
          placeholder="email"
          type="email"
          id="email"
          name="email"
          required
        />
        <input
          style={{ width: "81.5%", alignSelf: "center", height: "35px" }}
          placeholder="phone number"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
        />
        <input
          style={{ width: "81.5%", alignSelf: "center", height: "35px" }}
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

export default DTForm;
