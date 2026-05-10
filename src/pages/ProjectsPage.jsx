function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      desc:  "Personal portfolio built with React, Vite, and a custom dark-blue design system. Features animated backgrounds, orbiting rings, and smooth page transitions.",
      tags:  ["React","CSS","Vite"],
    },
    {
      title: "VFX Compositing Reel",
      desc:  "Short-film compositing work using Nuke and After Effects. Includes green-screen keying, motion tracking, and colour grading.",
      tags:  ["Nuke","After Effects","Maya"],
    },
    {
      title: "Full-Stack Java App",
      desc:  "CRUD application with a Spring Boot REST API and a React frontend, connected to MySQL with JWT authentication.",
      tags:  ["Java","Spring Boot","React","SQL"],
    },
  ];

  return (
    <div style={{ minHeight: "calc(100vh - 64px)", padding: "80px 40px" }}>
      <p className="sec-title">Projects</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "28px",
        maxWidth: "1000px", margin: "auto"
      }}>
        {projects.map((p, i) => (
          <div key={i} className="card">
            <h4 style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "0.9rem", marginBottom: "10px",
              color: "var(--accent)"
            }}>
              {p.title}
            </h4>
            <p style={{
              color: "#94a3b8", fontSize: "0.9rem",
              marginBottom: "16px", lineHeight: 1.7
            }}>
              {p.desc}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {p.tags.map((t, j) => (
                <span key={j} className="badge" style={{ fontSize: "0.75rem" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;