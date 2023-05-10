import * as React from "react";
import { formDataToObject } from "./utils/formDataToObj";

const DTForm: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

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
        onSubmit={handleSubmit}
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
            placeholder="First"
            type="text"
            id="firstName"
            name="firstName"
            required
          />
          <input
            placeholder="Last"
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </div>
        <input
          placeholder="email"
          type="email"
          id="email"
          name="email"
          required
        />
        <input
          placeholder="phone number"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
        />
        <input
          placeholder="address"
          type="text"
          id="address"
          name="address"
          required
        />
        <label style={{ paddingLeft: "33px" }} htmlFor="bestTimes">
          Best times to reach out:
        </label>
        <input type="text" id="bestTimes" name="bestTimes" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DTForm;
