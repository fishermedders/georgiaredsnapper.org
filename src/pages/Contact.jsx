import { useState } from "react";
import { Link } from "react-router-dom";
import { CONTACT_FORM_URL } from "../utils/constants.js";
import "./styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(CONTACT_FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || "(no subject)",
          message: form.message,
          _replyto: form.email,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="content-container">
      <section className="section section--bg-white">
        <div className="section-inner">
          <h2>Contact Us</h2>
          <p className="lead">
            Have a question about the 2026 red snapper season, the VESL
            reporting process, or the Georgia Red Snapper Project? Here's how to
            reach us.
          </p>

          <div className="grid grid--cols-3">
            <div className="card">
              <h3 className="card__title">📧 Email</h3>
              <p className="card__body">
                <a href="mailto:RedSnapper@DNR.Ga.Gov">RedSnapper@DNR.Ga.Gov</a>
              </p>
              <p className="card__body">
                Best for reporting issues, data questions, and general
                inquiries.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">📞 Phone (toll-free)</h3>
              <p className="card__body">
                <a href="tel:84476274357">844-SNAP-HELP</a>
              </p>
              <p className="card__body">
                Technical support for VESL and reporting help.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">
                🌐 Coastal Resources Division of Georgia DNR
              </h3>
              <p className="card__body">
                <a
                  href="https://coastalgadnr.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  CoastalGaDNR.org
                </a>
              </p>
              <p className="card__body">
                Official regulatory information, season announcements, and
                enforcement contacts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-soft">
        <div className="section-inner">
          <h2>Send Us a Message</h2>

          <div className="card">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              <div className="form-row">
                <div className="field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. VESL related question, reporting issue"
                />
              </div>

              <div className="field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={6}
                  required
                />
              </div>

              <div className="form-actions">
                <button
                  className="btn"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={() => {
                    setForm({ name: "", email: "", subject: "", message: "" });
                    setStatus(null);
                  }}
                >
                  Reset
                </button>
                {status === "success" && (
                  <span className="form-success-msg">
                    Message sent! Thank you!
                  </span>
                )}
                {status === "error" && (
                  <span className="form-error-msg">
                    Something went wrong. Please email us directly at{" "}
                    <a href="mailto:RedSnapper@dnr.ga.gov">
                      RedSnapper@dnr.ga.gov
                    </a>
                    .
                  </span>
                )}
              </div>

              <p className="form-disclaimer u-muted">
                Personal information is used only to respond to your inquiry and
                is not shared publicly.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
