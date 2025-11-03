import React, { useState } from "react";
import "./newsletter.css";
import ButtonClose from "../button/closebutton";

const Newsletter = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/newsletter/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email_address: email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Confirmation email sent! Check your inbox.");
        setEmail(""); // clear input
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="newsletter-overlay">
      <div className="newsletter-modal">
        <ButtonClose className="newsletter-close-button" onClose={onClose} />

        <div className="subscribe-container">
          {/*form box*/}
          <div className="subscribe-box">
            {/* Decorative Banner */}
            <div className="subscribe-banner"></div>

            {/* Content */}
            <div className="subscribe-content">
              <h2 className="subscribe-title">Stay in touch</h2>
              <p className="subscribe-text">
                Subscribe to our newsletter so we can spam you with offers and
                more events!
              </p>

              <form onSubmit={handleSubmit} className="subscribe-form">
                <div className="label-wrapper">
                  <label htmlFor="email" className="email-in">
                    Email
                  </label>
                </div>
                <input
                  type="email"
                  id="email"
                  className="subscribe-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subscribe-button">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
