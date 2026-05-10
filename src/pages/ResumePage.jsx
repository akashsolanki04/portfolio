const skillBars = [
  { name: "HTML",       pct: "90%", delay: "0s"    },
  { name: "CSS",        pct: "85%", delay: "0.15s" },
  { name: "JavaScript", pct: "80%", delay: "0.30s" },
  { name: "React",      pct: "85%", delay: "0.45s" },
];

function Label({ children }) {
  return (
    <p style={{
      fontFamily: "'Orbitron', monospace",
      color: "var(--cyan)", fontSize: "0.8rem",
      letterSpacing: "3px", marginBottom: "20px"
    }}>
      {children}
    </p>
  );
}

function ResumePage() {
  return (
    <div style={{ minHeight: "calc(100vh - 64px)", padding: "80px 40px" }}>
      <p className="sec-title">Resume</p>

      <div style={{
        maxWidth: "860px", margin: "auto",
        display: "flex", flexDirection: "column", gap: "48px"
      }}>

        {/* ── EDUCATION ── */}
        <div>
          <Label>🎓 EDUCATION</Label>
          <div className="timeline">
            <div className="timeline-item">
              <div className="card">
                <h5>Bachelor of Commerce </h5>
                <p> PUNE University, India</p>
                <span className="date"> JUN 2021 – MARCH  2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── EXPERIENCE ── */}
        <div>
          <Label>💼 EXPERIENCE</Label>
          <div className="timeline">

            <div className="timeline-item">
              <div className="card">
                <h5>Full Stack Java Development – Master Program</h5>
                <p>React &amp; Java Ecosystem</p>
                <span className="date">2026 – 2027</span>
                <ul>
                  <li>Built responsive web applications using React</li>
                  <li>Worked with REST APIs and dynamic UI</li>
                  <li>Improved performance and UI/UX</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="card">
                <h5>Frontend Developer</h5>
                <span className="date">April 2026 – Present</span>
                <ul>
                  <li>Developing scalable React applications</li>
                  <li>Implementing reusable components</li>
                  <li>Optimizing performance and SEO</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* ── SKILL BARS ── */}
        <div>
          <Label>🛠 PROFICIENCY</Label>
          <div className="card">
            {skillBars.map((s, i) => (
              <div
                key={i}
                className="skill-bar-wrap"
                style={{ marginBottom: i === skillBars.length - 1 ? 0 : "18px" }}
              >
                <div className="skill-bar-label">
                  <span>{s.name}</span>
                  <span style={{ color: "var(--cyan)" }}>{s.pct}</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: s.pct, animationDelay: s.delay }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ResumePage;
