import React from "react";
import "./home.css";
import content from "../data/content.json";

function Home() {
  const { hero, services } = content;

  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
          <div className="brand-logos">
            {hero.trustedBy.companies.map((company, index) => (
              <img
                key={index}
                src={`/images/${company.toLowerCase()}.svg`}
                alt={company}
              />
            ))}
          </div>
          <a href={hero.ctaButton.link} className="cta-button">
            {hero.ctaButton.text}
          </a>
        </div>
        <div className="hero-illustration">
          {/* Add decorative elements */}
          <div className="geometric-shapes">
            <div className="shape circle"></div>
            <div className="shape star"></div>
            <div className="shape square"></div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              style={{ backgroundColor: service.bgColor }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3
                style={{
                  color:
                    service.bgColor === "var(--dark)"
                      ? "var(--primary-green)"
                      : "var(--dark)",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color:
                    service.bgColor === "var(--dark)"
                      ? "var(--light)"
                      : "var(--dark)",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
