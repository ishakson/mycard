import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


function Avatar() {
    return (
        <div className="avatar">
            <img
                src="./avatar.jpg"
                alt="Avatar"
            />
        </div>
    )
}

function Intro() {
    return (
        <div className="intro">
            <h1>İshak Söylemez</h1>
            <p>He is a student of jonas schmedtmann, he is learning React</p>
        </div>
    )
}


function SkillList(props) {
    return (
        <li className="skill" style={{backgroundColor: props.color}}>{props.skillName} {props.imoji}</li>
    )
         
  
}
function App() {
    return (
        <div className="card">
            <Avatar/>
            <div className="data">
                <Intro/>
                <ul className="skill-list">
                    <SkillList skillName="Python" color="blue" imoji="🐍"/>
                    <SkillList skillName="JavaScript" color="red" imoji="🤖"/>
                    <SkillList skillName="CSS" color="green" imoji="🎨"/>
                    <SkillList skillName="HTML" color="orange" imoji="🌎"/>
                </ul>
            </div>
        </div>
    )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)