import { useEffect, useRef } from "react";

function AboutPage() {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const skills = [
    "HTML","CSS","JavaScript","Bootstrap",
    "React","Maya","Nuke","After Effects"
  ];

  return (
    <div style={{ minHeight: "calc(100vh - 64px)", padding: "80px 40px" }}>
      <p className="sec-title">About Me</p>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <div className="card reveal" ref={cardRef} style={{ lineHeight: "1.85" }}>

          <p style={{ marginBottom: "18px", color: "#94a3b8" }}>
            I am a{" "}
            <strong style={{ color: "var(--white)" }}>
              creative and detail-oriented Junior Artist
            </strong>{" "}
            with a strong passion for visual storytelling and visual effects.
            I have foundational experience in composition and motion graphics,
            and working knowledge of tools such as{" "}
            <strong style={{ color: "var(--white)" }}>Maya</strong>,{" "}
            <strong style={{ color: "var(--white)" }}>Nuke</strong>, and{" "}
            <strong style={{ color: "var(--white)" }}>After Effects</strong>.
          </p>

          <p style={{ marginBottom: "18px", color: "#94a3b8" }}>
            Alongside my creative background, I am currently pursuing studies
            in the{" "}
            <strong style={{ color: "var(--white)" }}>
              Information Technology
            </strong>{" "}
            field, developing skills in{" "}
            <strong style={{ color: "var(--white)" }}>HTML</strong>,{" "}
            <strong style={{ color: "var(--white)" }}>CSS</strong>,{" "}
            <strong style={{ color: "var(--white)" }}>Bootstrap</strong>, and{" "}
            <strong style={{ color: "var(--white)" }}>JavaScript</strong>.
          </p>

          <p style={{ marginBottom: "18px", color: "#94a3b8" }}>
            This blend of creativity and technical knowledge helps me approach
            problems with both{" "}
            <strong style={{ color: "var(--white)" }}>design thinking</strong>{" "}
            and{" "}
            <strong style={{ color: "var(--white)" }}>logical solutions</strong>.
          </p>

          <p style={{ color: "#94a3b8" }}>
            I am committed to continuous learning and eager to contribute to
            innovative projects in the{" "}
            <strong style={{ color: "var(--white)" }}>VFX</strong> and{" "}
            <strong style={{ color: "var(--white)" }}>
              technology industries
            </strong>.
          </p>

          {/* SKILL TAGS */}
          <div style={{ marginTop: "28px" }}>
            <p style={{
              fontFamily: "'Orbitron', monospace",
              color: "var(--cyan)", fontSize: "0.8rem",
              letterSpacing: "3px", marginBottom: "14px"
            }}>
              SKILLS &amp; TOOLS
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {skills.map((s, i) => (
                <span
                  key={i}
                  className="skill-tag"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutPage;