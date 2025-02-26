import React from "react";
import content from "../data/content.json";
import "./About.css";

function About() {
  const { workingProcess } = content;

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Positivus</h1>
        <p>We're a team of digital experts helping businesses grow</p>
      </section>

      <section className="process-section">
        <h2>{workingProcess.title}</h2>
        <div className="process-grid">
          {workingProcess.steps.map((step) => (
            <div key={step.id} className="process-card">
              <div className="step-number">{step.id}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {content.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="quote">{testimonial.text}</p>
              <div className="author">
                <strong>{testimonial.author}</strong>
                <p>{testimonial.position}</p>
                <p>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
