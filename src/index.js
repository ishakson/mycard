import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function Avatar() {
  return (
    <div className="avatar">
      <img src="./avatar.jpg" alt="Avatar" className="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <h1>İshak Söylemez</h1>
      <p>He is a student of Jonas Schmedtmann, learning React</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          color={skill.color}
          level={skill.level}
          skillName={skill.skill}
        />
      ))}
    </ul>
  );
}

function Skill({ skillName, level, color }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>{skillName}</span>
      <span>
        {level === "beginner" && "🟢"}
        {level === "intermediate" && "🟡"}
        {level === "advanced" && "🔴"}
      </span>
    </li>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

// React DOM oluşturma
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
