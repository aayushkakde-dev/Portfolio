import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <a className="logo" href="#overview">AK</a>
        <div className="nav-links">
          <a href="#overview">OVERVIEW</a>
          <a href="#projects">PROJECTS</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <section id="overview" className="hero">
        <div className="intro">
          <p className="name">Aayush Prashanth Kakde</p>
          <p className="role">AI &amp; ML Engineering Student</p>
          <p className="degree">
            Pursuing a Bachelor's Degree in Engineering, majoring in
            Artificial Intelligence and Machine Learning.
          </p>
          <p className="description">
            I build intelligent applications, explore machine learning,
            and design interactive digital experiences that transform
            complex ideas into practical solutions.
          </p>
          <div className="socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:YOUR_EMAIL@example.com">Email ↗</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <h1>Building intelligent solutions<span>.</span></h1>
      </section>

      <section id="projects" className="content-section">
        <p className="eyebrow">WHAT I'VE BUILT</p>
        <h2>Selected Projects</h2>
        
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "12px", fontWeight: "400", color: "#f1f3f4" }}>Movie Recommendation System</h3>
          <a 
            style={{ color: "#8dd5ff", textDecoration: "none", borderBottom: "1px solid #8dd5ff", paddingBottom: "4px", fontSize: "14px" }} 
            href="https://github.com/aayushkakde-dev/Movie-Recommendation-System/tree/main" 
            target="_blank" 
            rel="noreferrer">
            View on GitHub ↗
          </a>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "12px", fontWeight: "400", color: "#f1f3f4" }}>Weather Prediction Dashboard</h3>
          <a 
            style={{ color: "#8dd5ff", textDecoration: "none", borderBottom: "1px solid #8dd5ff", paddingBottom: "4px", fontSize: "14px" }} 
            href="https://github.com/aayushkakde-dev/Weather-Prediction-ML" 
            target="_blank" 
            rel="noreferrer">
            View on GitHub ↗
          </a>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "12px", fontWeight: "400", color: "#f1f3f4" }}>TO-DO-LIST</h3>
          <a 
            style={{ color: "#8dd5ff", textDecoration: "none", borderBottom: "1px solid #8dd5ff", paddingBottom: "4px", fontSize: "14px" }} 
            href="https://github.com/aayushkakde-dev/TO-DO-LIST" 
            target="_blank" 
            rel="noreferrer">
            View on GitHub ↗
          </a>
        </div>
      </section>

      <section id="skills" className="content-section">
        <p className="eyebrow">MY TOOLKIT</p>
        <h2>Skills &amp; Technologies</h2>
        <div className="skills">
          <span>Python</span><span>Java</span><span>Machine Learning</span>
          <span>Data Analysis</span><span>HTML &amp; CSS</span><span>JavaScript</span>
          <span>Git &amp; GitHub</span>
        </div>
      </section>

      <section id="contact" className="content-section contact">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Have an idea? Let's talk.</h2>
        <a href="mailto:YOUR_EMAIL@example.com">Get in touch ↗</a>
      </section>

      <footer>© 2026 Aayush Prashanth Kakde</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);