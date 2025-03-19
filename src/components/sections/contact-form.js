import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Contact = ({siteKey}) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");

    // Load siteKey from environment variable
  console.log("Received reCAPTCHA Site Key in ContactForm:", siteKey);


  useEffect(() => {
    // Load reCAPTCHA script dynamically
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    console.log("Form Submitted!"); // ✅ Debugging
    console.log("Recaptcha Token:", recaptchaToken); // ✅ Debugging

    if (!recaptchaToken) {
      setStatus("Please complete the reCAPTCHA verification.");
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ ...formData, recaptchaToken }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setIsSubmitted(true); // ✅ Show confirmation message
      setFormData({ name: "", email: "", message: "" });
      setRecaptchaToken(""); // Reset reCAPTCHA
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <ContactSection>
      <h2>Contact Us</h2>
      <p>Have a question or inquiry? Reach out to us below.</p>
      {isSubmitted ? (
        <SuccessMessage>🎉 Thank you! Your message has been sent.</SuccessMessage>
      ) : (
      <ContactForm onSubmit={handleSubmit}>
        <Label>
          Name
          <Input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        </Label>
        <Label>
          Message
          <Textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="4" required></Textarea>
        </Label>

        {/* ✅ Ensure reCAPTCHA Widget is Passed the Correct Site Key */}
        {siteKey ? (
          <div className="g-recaptcha" data-sitekey={siteKey} data-callback={(token) => setRecaptchaToken(token)}></div>
        ) : (
          <p style={{ color: "red" }}>Error: reCAPTCHA site key is missing.</p>
        )}
        

        <Button type="submit">Send Message</Button>
      </ContactForm>
      )}
      
      {status && <StatusMessage>{status}</StatusMessage>}

      <p>Or email us directly at <a href="mailto:team@prettypenny.io">team@prettypenny.io</a></p>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #5c67f2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StatusMessage = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;
