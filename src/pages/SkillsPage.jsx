function SkillsPage() {
  const skills = [
    { name: "HTML",        img: "https://cdn-icons-png.flaticon.com/512/732/732212.png"  },
    { name: "CSS",         img: "https://cdn-icons-png.flaticon.com/512/732/732190.png"  },
    { name: "JavaScript",  img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"},
    { name: "React",       img: "https://cdn-icons-png.flaticon.com/512/919/919851.png"  },
    { name: "Java",        img: "https://cdn-icons-png.flaticon.com/512/226/226777.png"  },
    { name: "Spring Boot", img: "https://www.svgrepo.com/show/333604/spring-boot.svg"    },
    { name: "SQL",         img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png"},
  ];

  return (
    <div style={{ minHeight: "calc(100vh - 64px)", padding: "80px 40px" }}>
      <p className="sec-title">Skills</p>

      <div className="skills-grid" style={{ maxWidth: "860px", margin: "auto" }}>
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;