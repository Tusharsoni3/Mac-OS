import React, { useState, useEffect, useRef } from 'react'
import Window from './Window'
import './terminal.scss'

const Cli = ({ windowsName,
              setWindowsState,
              isMinimized,
              setMinimizedWindows }) => {

    const scrollRef = useRef(null);

   

    const welcomeMessage = `
╔════════════════════════════════════════╗
║      Welcome to My Portfolio CLI!      ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
about        - about Tushar Soni
skills       - Skills i have
projects     - Check out my work
clear        - Clear terminal
experience   - Learn about me
contact      - Get in touch with me
github       - Check out my github profile
resume       - Download my resume
social       - See my shitposting in socialsh

Happy exploring! 🚀
`;
  const commands = {
    about: { fn: () => 'I am a full-stack web developer passionate about building modern web applications with React, Node.js.' },
    skills: { fn: () => `Frontend: React,Vanilla JS, Scss, HTML/CSS\nBackend: Node.js, Express, Python, Django\nDatabases: MongoDB, PostgreSQL, MySQL\nTools: Git, Vite\n` },
    projects: { fn: () => `1. Portfolio Website - React + Vite\n` },
    experience: { fn: () => `I am fresher ` },
    contact: { fn: () => `Email: tusharsoni8908@gmail.com\nPhone: 8853303990\nLocation: prayagraj UP` },
    github: { fn: () => { window.open('https://github.com/Tusharsoni3', '_blank'); return 'Opening GitHub...'; } },
    resume: { fn: () => 'Resume download started...' },
    social: { fn: () => `Twitter: @TusharSoni\nLinkedIn: /in/TusharSoni\nPortfolio: tusharSoni.dev` },
    echo: { fn: (...args) => args.join(' ') },
    help: {
    fn: () => `
Available commands:
-------------------
about        - about Tushar Soni
skills       - Skills i have
projects     - Check out my work
clear        - Clear terminal
experience   - Learn about me
contact      - Get in touch with me
github       - Check out my github profile
resume       - Download my resume
social       - See my shitposting in socials

`
  },
    clear: { fn: 'clear' }
  };

  const [history, setHistory] = useState([welcomeMessage]);
  const [input, setInput] = useState('');

   useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const parts = input.trim().split(' ');
      const commandName = parts[0].toLowerCase();
      const args = parts.slice(1);
      
      let response = '';

      if (commands[commandName]) {
        if (commandName === 'clear') {
          setHistory([]);
          setInput('');
          return;
        }
        response = commands[commandName].fn(...args);
      } else if (input.trim() === '') {
        response = '';
      } else {
        response = `Command not found: ${commandName}. Type 'help' for assistance.`;
      }

      setHistory([...history, `TusharSoni-MAC ~ % ${input}`, response]);
      setInput('');
    }
  };

  return (
    <Window  windowsName={windowsName} setWindowsState={setWindowsState} isMinimized={isMinimized}
      setMinimizedWindows={setMinimizedWindows}>
      <div className='console'>
        <div className='top-bar'>
          <span className="terminal-title">Terminal~</span>
        </div>
        <div className="terminal-body" ref={scrollRef}>
          {history.map((line, i) => (
            <div key={i} className="terminal-line">{line}</div>
          ))}
          <div className="input-area">
            <span className="prompt">TusharSoni-MAC ~ % </span>
            <input 
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoComplete="off"
              className="cli-input"
              style={{ 
               background: 'transparent',
                border: 'none', 
                color: 'white', 
                outline: 'none', 
                flex: 1,
                fontFamily: 'inherit',
                fontSize: 'inherit'
              }}
            />
          </div>
        </div>
      </div>
    </Window>
  );
};

export default Cli;