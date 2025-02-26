import React from "react";
import "./home.css";
import useContent from "../hooks/useContent";
import LoadingScreen from "../components/LoadingScreen";

function Home() {
  const { content, loading, error } = useContent();

  if (loading) {
    return <LoadingScreen />;
  }

  if (error || !content) {
    return (
      <div className="error-state">
        <p>Unable to load content</p>
      </div>
    );
  }

  const { hero, services, workingProcess, testimonials } = content;

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <a href={hero.ctaButton.link} className="cta-button">
            {hero.ctaButton.text}
          </a>
        </div>
        <div className="trusted-by">
          <p className="trusted-title">{hero.trustedBy.title}</p>
          <div className="company-logos">
            {hero.trustedBy.companies.map((company, index) => (
              <div key={index} className="logo-container">
                <img
                  src={`/images/${company.toLowerCase()}.svg`}
                  alt={company}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Transforming businesses through digital excellence</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              style={{ backgroundColor: service.bgColor }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="learn-more">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-header">
          <h2>{workingProcess.title}</h2>
          <p>Our proven methodology for success</p>
        </div>
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
        <div className="section-header">
          <h2>Client Success Stories</h2>
          <p>What our clients say about us</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p className="quote">{testimonial.text}</p>
                <div className="author-info">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                    <p className="company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>Let's create something amazing together</p>
          <a href="/contact" className="cta-button">
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
