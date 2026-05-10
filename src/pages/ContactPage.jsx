import { useState } from "react";

function InfoLine({ icon, text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "14px",
        color: "#94a3b8"
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          background: "rgba(37,99,235,0.15)",
          border: "1px solid rgba(37,99,235,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          flexShrink: 0
        }}
      >
        {icon}
      </div>

      <span>{text}</span>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const err = {};

    if (!form.name.trim()) {
      err.name = "Name is required";
    }

    if (!form.email.trim()) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      err.message = "Message cannot be empty";
    }

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();

    if (Object.keys(err).length > 0) {
      setErrors(err);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: ""
      });
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid rgba(37,99,235,0.25)",
    background: "rgba(37,99,235,0.07)",
    color: "#ffffff",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "1rem",
    outline: "none",
    marginBottom: "4px",
    transition: "all 0.3s"
  };

  const focusOn = (e) => {
    e.target.style.borderColor = "#3b82f6";
    e.target.style.boxShadow =
      "0 0 12px rgba(59,130,246,0.35)";
  };

  const focusOff = (e) => {
    e.target.style.borderColor =
      "rgba(37,99,235,0.25)";

    e.target.style.boxShadow = "none";
  };

  const sectionLabel = {
    fontFamily: "'Orbitron', monospace",
    color: "#22d3ee",
    fontSize: "0.8rem",
    letterSpacing: "2px",
    marginBottom: "20px"
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        padding: "80px 40px"
      }}
    >
      <p className="sec-title">
        Get In Touch
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          maxWidth: "960px",
          margin: "auto"
        }}
      >
        {/* INFO SECTION */}

        <div
          className="card"
          style={{
            flex: "1",
            minWidth: "260px"
          }}
        >
          <p style={sectionLabel}>
            CONTACT INFO
          </p>

          <InfoLine
            icon="📍"
            text="Mumbai, India"
          />

          <InfoLine
            icon="📧"
            text="sky130494@gmail.com"
          />

          <InfoLine
            icon="📞"
            text="+91 8779948849"
          />

          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.8rem",
              letterSpacing: "2px",
              margin: "24px 0 12px"
            }}
          >
            FOLLOW ME
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px"
            }}
          >
            <a
              className="social-btn"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              in
            </a>

            <a
              className="social-btn"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GH
            </a>
          </div>
        </div>

        {/* FORM SECTION */}

        <div
          className="card"
          style={{
            flex: "1",
            minWidth: "260px"
          }}
        >
          <p style={sectionLabel}>
            SEND MESSAGE
          </p>

          <form onSubmit={handleSubmit}>
            {/* NAME */}

            <div style={{ marginBottom: "12px" }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />

              {errors.name && (
                <p className="err-msg">
                  {errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}

            <div style={{ marginBottom: "12px" }}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />

              {errors.email && (
                <p className="err-msg">
                  {errors.email}
                </p>
              )}
            </div>

            {/* MESSAGE */}

            <div style={{ marginBottom: "16px" }}>
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "110px"
                }}
                onFocus={focusOn}
                onBlur={focusOff}
              />

              {errors.message && (
                <p className="err-msg">
                  {errors.message}
                </p>
              )}
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%" }}
            >
              Send Message 🚀
            </button>

            {success && (
              <p className="success-msg">
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
