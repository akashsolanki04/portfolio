import { useNavigate } from "react-router-dom";

import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import ResumePage from "./ResumePage";
import ContactPage from "./ContactPage";

const KEYFRAMES = `
  @keyframes spinRing    { to { transform: rotate(360deg);  } }
  @keyframes spinRingRev { to { transform: rotate(-360deg); } }
  @keyframes corePulse {
    from { box-shadow: 0 0 30px rgba(37,99,235,0.45); }
    to   { box-shadow: 0 0 70px rgba(6,182,212,0.70);  }
  }
  @keyframes orbitDot1 {
    0%   { transform: rotate(0deg)   translateX(108px); }
    100% { transform: rotate(360deg) translateX(108px); }
  }
  @keyframes orbitDot2 {
    0%   { transform: rotate(120deg) translateX(76px); }
    100% { transform: rotate(480deg) translateX(76px); }
  }
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-32px); }
    to   { opacity: 1; transform: translateX(0);     }
  }
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(32px); }
    to   { opacity: 1; transform: translateX(0);    }
  }
`;

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <style>{KEYFRAMES}</style>

      <div style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "60px 40px"
      }}>
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
          maxWidth: "1100px", width: "100%", gap: "60px"
        }}>

          {/* ── LEFT ── */}
          <div style={{ flex: "1", minWidth: "300px" }}>

            <p style={{
              fontSize: "0.85rem", letterSpacing: "4px",
              color: "var(--cyan)", textTransform: "uppercase",
              marginBottom: "12px", animation: "fadeInLeft .6s .1s both"
            }}>
              Hello World — I'm
            </p>

            <h1 style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 900, lineHeight: 1.1,
              marginBottom: "16px", animation: "fadeInLeft .6s .2s both"
            }}>
              <span style={{
                background: "linear-gradient(135deg, var(--blue-glow), var(--cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Akash Solanki
              </span>
            </h1>

            <h4 style={{
              color: "var(--muted)", letterSpacing: "2px",
              marginBottom: "20px", fontSize: "1.1rem",
              animation: "fadeInLeft .6s .3s both"
            }}>
              Frontend Developer
            </h4>

            <p style={{
              maxWidth: "440px", color: "#94a3b8",
              marginBottom: "32px", fontSize: "1rem",
              animation: "fadeInLeft .6s .4s both"
            }}>
              I build modern, responsive, and high-performance web applications
              using React and JavaScript — blending creative artistry with
              technical precision.
            </p>

            <div style={{
              display: "flex", gap: "16px", flexWrap: "wrap",
              animation: "fadeInLeft .6s .5s both"
            }}>
              <button className="btn-primary" onClick={() => navigate("/resume")}>
                <span>View Resume 🚀</span>
              </button>
              <button className="btn-secondary" onClick={() => navigate("/contact")}>
                Contact Me
              </button>
            </div>

            <div style={{ marginTop: "28px", animation: "fadeInLeft .6s .6s both" }}>
              <p style={{
                color: "var(--muted)", fontSize: "0.8rem",
                letterSpacing: "3px", marginBottom: "10px"
              }}>
                TECH STACK
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {["React","JavaScript","HTML","CSS","Java","Spring Boot"].map((t, i) => (
                  <span key={i} className="badge">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT – ORBITING RINGS ── */}
          <div style={{
            flex: "1", display: "flex",
            alignItems: "center", justifyContent: "center",
            animation: "fadeInRight .7s .3s both"
          }}>
            <div style={{ position: "relative", width: "280px", height: "280px" }}>

              {/* Ring 1 */}
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                border: "2px solid rgba(37,99,235,0.45)",
                animation: "spinRing 8s linear infinite"
              }} />

              {/* Ring 2 */}
              <div style={{
                position: "absolute", inset: "22px", borderRadius: "50%",
                border: "2px solid rgba(6,182,212,0.30)",
                animation: "spinRingRev 12s linear infinite"
              }} />

              {/* Ring 3 */}
              <div style={{
                position: "absolute", inset: "44px", borderRadius: "50%",
                border: "1.5px solid rgba(37,99,235,0.20)",
                animation: "spinRing 6s linear infinite"
              }} />

              {/* Glowing core */}
              <div style={{
                position: "absolute", inset: "62px", borderRadius: "50%",
                background: "radial-gradient(circle at 35% 35%, var(--blue-mid), var(--bg-0))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Orbitron', monospace",
                fontSize: "2.4rem", fontWeight: 900, color: "var(--accent)",
                animation: "corePulse 4s ease-in-out infinite alternate"
              }}>
                AS
              </div>

              {/* Orbiting dot 1 */}
              <div style={{
                position: "absolute", width: "11px", height: "11px",
                borderRadius: "50%", background: "var(--cyan)",
                top: "50%", left: "50%", transformOrigin: "0 0",
                boxShadow: "0 0 10px var(--cyan)",
                animation: "orbitDot1 4s linear infinite"
              }} />

              {/* Orbiting dot 2 */}
              <div style={{
                position: "absolute", width: "8px", height: "8px",
                borderRadius: "50%", background: "var(--blue-glow)",
                top: "50%", left: "50%", transformOrigin: "0 0",
                boxShadow: "0 0 10px var(--blue-glow)",
                animation: "orbitDot2 6s linear infinite"
              }} />

            </div>
          </div>

        </div>
      </div>

      <AboutPage />
      <SkillsPage />
      <ResumePage />
      <ContactPage />
    </>
  );
}

export default HomePage;