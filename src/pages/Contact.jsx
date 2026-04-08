import React, { useState } from "react";
import { Link } from "react-router-dom";
//import "./Contact.css";

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
    // Form submission is stubbed out here.
    // Replace with real API call or integration as needed.
    setStatus("submitting");

    // Simulate async submission for UX
    setTimeout(() => {
      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 700);
  }

  return (
    <main className="content-container">
      <section className="section section--bg-white section--edge-to-edge">
        <div className="section-inner">
          <h2>Contact the Georgia Red Snapper Project</h2>

          <p className="lead">
            We value your feedback, questions, and reports. Use the form below
            to contact the project team about reporting issues, data questions,
            or partnership inquiries. For urgent regulatory or enforcement
            matters, please contact your local fisheries office directly.
          </p>

          <div className="grid grid--cols-2" style={{ gap: 20, marginTop: 18 }}>
            <div className="card">
              <h3 className="card__title">Project Team</h3>
              <p className="card__body">
                Georgia Department of Natural Resources - Fisheries Management
              </p>

              <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:redsnapper@gadnr.gov">redsnapper@gadnr.gov</a>
                </li>
                <li>
                  <strong>Phone:</strong> (555) 555-5555
                </li>
                <li>
                  <strong>Office hours:</strong> Mon–Fri, 8:30am – 4:30pm
                </li>
              </ul>

              <p style={{ marginTop: 12 }}>
                For technical support with the VESL app, please include your
                device type and app version in your message.
              </p>
            </div>

            <div className="card">
              <h3 className="card__title">Mailing Address</h3>
              <p className="card__body" style={{ marginBottom: 12 }}>
                Georgia Department of Natural Resources
                <br />
                Fisheries Management Division
                <br />
                123 Coastal Way
                <br />
                Savannah, GA 31401
              </p>

              <h3 className="card__title" style={{ marginTop: 14 }}>
                General Inquiries
              </h3>
              <p className="card__body">
                If you have questions about seasons, regulations, or data use,
                review our <Link to="/faqs">FAQs</Link> or{" "}
                <Link to="/about">About</Link> pages for quick answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-blue-soft section--edge-to-edge">
        <div className="section-inner">
          <h2>Send Us a Message</h2>

          <div className="card" style={{ marginTop: 12 }}>
            <form onSubmit={handleSubmit} aria-label="Contact form">
              <div className="grid grid--cols-2" style={{ gap: 12 }}>
                <label style={{ display: "block" }}>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>Name</div>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: "1px solid var(--border)",
                    }}
                  />
                </label>

                <label style={{ display: "block" }}>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>Email</div>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: "1px solid var(--border)",
                    }}
                  />
                </label>
              </div>

              <div style={{ marginTop: 12 }}>
                <label style={{ display: "block" }}>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>
                    Subject
                  </div>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Short summary"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: "1px solid var(--border)",
                    }}
                  />
                </label>
              </div>

              <div style={{ marginTop: 12 }}>
                <label style={{ display: "block" }}>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>
                    Message
                  </div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={6}
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: "1px solid var(--border)",
                      resize: "vertical",
                    }}
                  />
                </label>
              </div>

              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
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
                  <span
                    style={{ color: "var(--primary-blue)", fontWeight: 700 }}
                  >
                    Message sent — thank you!
                  </span>
                )}
              </div>

              <p className="u-muted" style={{ marginTop: 12 }}>
                By contacting us you agree to our data handling practices.
                Personal information is used only to respond to inquiries and is
                not shared publicly.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="section section--bg-white section--edge-to-edge">
        <div className="section-inner">
          <h2>Media & Partnership Inquiries</h2>

          <p className="lead">
            For media requests or partnership discussions (research, outreach,
            or funding), please include details about your organization and the
            nature of the inquiry in the message form. We will route your
            inquiry to the appropriate team member.
          </p>

          <p style={{ marginTop: 12 }}>
            <Link to="/" className="btn btn--secondary">
              Back to Home
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
