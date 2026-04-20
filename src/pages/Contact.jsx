import { useState } from "react";
import { Link } from "react-router-dom";
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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 700);
  }

  return (
    <main className="content-container">
      <section className="section section--bg-white">
        <div className="section-inner">
          <h2>Contact the Georgia Red Snapper Project</h2>
          <p className="lead">
            Use the form below to reach the project team about reporting issues,
            data questions, or partnership inquiries. For official regulatory
            information, visit the Georgia DNR website.
          </p>

          <div className="grid grid--cols-2">
            <div className="card">
              <h3 className="card__title">Official Regulatory Information</h3>
              <p className="card__body">
                For authoritative rules, season announcements, and enforcement
                contacts, visit the Georgia DNR website.
              </p>
              <p>
                <a
                  href="https://gadnr.org"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--secondary"
                >
                  Visit GA DNR
                </a>
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Project &amp; Reporting Questions</h3>
              <p className="card__body">
                This project is operated by the Georgia DNR Coastal Resources
                Division. Submit a message below and we'll route your request to
                the appropriate staff.
              </p>
              <p className="card__body">
                For technical issues with the mobile app, use the app's built-in
                help feature or the app store listing.
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
                  placeholder="Short summary"
                />
              </div>

              <div className="field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
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
                  onClick={() =>
                    setForm({ name: "", email: "", subject: "", message: "" })
                  }
                >
                  Reset
                </button>
                {status === "success" && (
                  <span className="form-success-msg">
                    Message sent — thank you!
                  </span>
                )}
              </div>

              <p className="form-disclaimer u-muted">
                By contacting us you agree to our data handling practices.
                Personal information is used only to respond to inquiries.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="section section--bg-white">
        <div className="section-inner u-center">
          <h2>Media &amp; Partnership Inquiries</h2>
          <p className="lead">
            For media requests or partnership discussions, include details about
            your organization in the message form above.
          </p>
          <Link to="/" className="btn btn--secondary">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
