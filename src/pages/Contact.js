import React, { useState } from "react";
import content from "../data/content.json";
import "./Contact.css";

function Contact() {
  const { contact } = content;
  const { address, email, phone } = content.footer.contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>{contact.title}</h1>
        <p>{contact.subtitle}</p>
      </section>

      <section className="contact-form-section">
        <form onSubmit={handleSubmit}>
          {contact.formFields.map((field) => (
            <div key={field.id} className="form-group">
              <label htmlFor={field.id}>{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  required={field.required}
                  value={formData[field.id]}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  required={field.required}
                  value={formData[field.id]}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
          <button type="submit" className="cta-button">
            {contact.submitButton.text}
          </button>
        </form>

        <div className="contact-info">
          <h3>Get in touch</h3>
          <div className="info-item">
            <strong>Address:</strong>
            <p>{address}</p>
          </div>
          <div className="info-item">
            <strong>Email:</strong>
            <p>{email}</p>
          </div>
          <div className="info-item">
            <strong>Phone:</strong>
            <p>{phone}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
