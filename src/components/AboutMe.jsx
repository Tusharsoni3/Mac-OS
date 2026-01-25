import React from 'react';
import Window from './Window';
import portfolioImg from '../assets/portfolioImg.png'; 
import './aboutme.scss';

const AboutMe = ({ windowsName, setWindowsState, isMinimized, setMinimizedWindows }) => {
  
  const profile = {
    name: "TUSHAR SONI", // Caps look better in Bungee Hairline
    role: "Full Stack Developer &  Linux Enthusiast",
    bio: "I'm a college student passionate about building tools that solve real problems."
  };

  const socials = [
    { id: 'github', icon: '/icons/github.png', link: 'https://github.com/Tusharsoni3', label: 'GitHub' },
    { id: 'linkedin', icon: '/icons/linkedin.png', link: 'https://www.linkedin.com/in/tushar-soni-007613277/', label: 'LinkedIn' },
    { id: 'twitter', icon: '/icons/twitter.png', link: 'https://x.com/TusharSenp55985', label: 'Twitter' },
    { id: 'gmail', icon: '/icons/gmail.png', link: 'mailto:tstsuhar342@gmail.com', label: 'Email' }
  ];

  const projects = [
    {
      id: 1,
      title: "MacOS Portfolio",
      desc: "Interactive macOS clone with draggable windows and  and dynamic / functional apps.",
      tech: ["React", "SCSS",],
      image: "/project-img/macOS.png"
    },
  ];

  return (
    <Window 
      windowsName={windowsName} 
      setWindowsState={setWindowsState}
      isMinimized={isMinimized}
      setMinimizedWindows={setMinimizedWindows}
      initialWidth="900px" // Thoda wider kiya split layout ke liye
      initialHeight="650px"
    >
      <div className="about-container">
        
        {/* SCROLLABLE WRAPPER STARTS HERE */}
        <div className="scroll-content">

            {/* --- 1. HERO SECTION (Split Layout) --- */}
            <div className="hero-split">
                {/* LEFT: Full Image */}
                <div className="image-side">
                    <img src={portfolioImg} alt="Tushar Soni" />
                </div>

                {/* RIGHT: Details */}
                <div className="text-side">
                    <h1>{profile.name}</h1>
                    <h3 className="role">{profile.role}</h3>
                    <p className="bio">{profile.bio}</p>
                </div>
            </div>

            {/* --- 2. SOCIALS --- */}
            <section className="section">
                <h2 className="section-title">Connect</h2>
                <div className="socials-grid">
                {socials.map(social => (
                    <a key={social.id} href={social.link} target="_blank" rel="noreferrer" className="social-card">
                    <img src={social.icon} alt={social.label} />
                    <span>{social.label}</span>
                    </a>
                ))}
                </div>
            </section>

            {/* --- 3. PROJECTS --- */}
            <section className="section">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="card-img" style={{ backgroundImage: `url(${project.image})` }}></div>
                        <div className="card-info">
                            <h4>{project.title}</h4>
                            <p>{project.desc}</p>
                            <div className="tech-stack">
                            {project.tech.map(t => <span key={t}>{t}</span>)}
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </section>

        </div>
      </div>
    </Window>
  );
};

export default AboutMe;