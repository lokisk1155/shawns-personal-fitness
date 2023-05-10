import * as React from "react";
import { formDataToObject } from "./utils/formDataToObj";

const DTForm: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formDataToObject(formData)),
    };

    await fetch('https://email-server-shawns-fitness.herokuapp.com/send-email', requestOptions);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", height: "500px", width: "500px"}}>
    <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", backgroundColor: "#fff", height: "80%", width: "80%", border: "1px solid grey"}}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" required />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="phoneNumber">Phone number:</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" required />
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" required />
      <label htmlFor="bestTimes">Best times to reach out:</label>
      <input type="text" id="bestTimes" name="bestTimes" required />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default DTForm;

