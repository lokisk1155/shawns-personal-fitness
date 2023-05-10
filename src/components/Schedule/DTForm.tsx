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
    <form ref={formRef} onSubmit={handleSubmit}>
      <h2>Contact Form</h2>
      <label htmlFor="desiredTimes">Desired times:</label>
      <input type="text" id="desiredTimes" name="desiredTimes" required />
      <br />
      <label htmlFor="specificTrainer">Specific trainer:</label>
      <input type="text" id="specificTrainer" name="specificTrainer" required />
      <br />
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" required />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" required />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br />
      <label htmlFor="phoneNumber">Phone number:</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" required />
      <br />
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" required />
      <br />
      <label htmlFor="bestTimes">Best times to reach out:</label>
      <input type="text" id="bestTimes" name="bestTimes" required />
      <br />
      <label htmlFor="socialMedia">Follow us on social media:</label>
      <input type="checkbox" id="socialMedia" name="socialMedia" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DTForm;

