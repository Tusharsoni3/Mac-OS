import React from 'react'
import './dock.scss'

const Dock = ({ windowsState, setWindowsState, setMinimizedWindows }) => {

    const dockItems = [
    { id: 'github', icon: '/icons/github.png', name: 'Github' },
    { id: 'cli', icon: '/icons/terminal.png', name: 'Terminal' },
    { id: 'calendar', icon: '/icons/calendar.png', name: 'Calendar' },
    { id: 'notes', icon: '/icons/notes.png', name: 'Notes' },
    { id: 'spotify', icon: '/icons/spotify.png', name: 'Spotify' },
    { id: 'linkedin', icon: '/icons/linkedin.png', name: 'LinkedIn' },
    { id: 'mail', icon: '/icons/mail.png', name: 'Mail' },
    { id: 'about', icon: '/icons/profile.png', name: 'About' },
    { id: 'settings', icon: '/icons/Settings.png', name: 'Settings' },
    { id: 'twitter', icon: '/icons/twitter.png', name: 'Twitter' },
  ];


  return (
    <footer className='dock'>
      
      {/* 1. Github */}
      <div className='icon' onClick={() => window.open("https://github.com/Tusharsoni3", "_blank")}>
        <span className="dock-tooltip">Github</span>
        <img src="/icons-png/github.png" alt="Github" />
      </div>

      {/* 2. Calendar */}
      <div className='icon'
              onClick={() => { 
          setWindowsState(s => ({ ...s, calendar: true })) 
          setMinimizedWindows(s => ({...s, calendar: false}))
        }}>
        <span className="dock-tooltip">Calendar</span>
        <img src="/icons-png/calendar.png" alt="Calendar" />
      </div>

      {/* 3. LinkedIn */}
      <div className='icon'
        onClick={() => window.open("https://www.linkedin.com/in/tushar-soni-007613277/", '_blank')}
      >
        <span className="dock-tooltip">LinkedIn</span>
        <img src="/icons-png/linkedin.png" alt="Linkedin" />
      </div>

      {/* 4. Profile / About */}
   

      {/* 5. Terminal */}
      <div className='icon' 
        onClick={() => { 
          setWindowsState(s => ({ ...s,  Terminal: true })) 
          setMinimizedWindows(s => ({...s,  Terminal: false}))
        }}>
        <span className="dock-tooltip">Terminal</span>
        <img src="/icons-png/terminal.png" alt="Terminal" />
        {windowsState.Terminal && <div className="dot"></div>}
      </div>

      {/* 6. Spotify */}
      <div className='icon'
        onClick={() => { 
          setWindowsState(s => ({ ...s, spotify: true })) 
          setMinimizedWindows(s => ({...s, spotify: false}))
        }}>
        <span className="dock-tooltip">Spotify</span>
        <img src="/icons-png/spotify.png" alt="Spotify" />
        {windowsState.spotify && <div className="dot"></div>}
      </div>

      {/* 7. Mail */}
      <div className='icon' onClick={() => window.open("mailto:tstsuhar342@gmail.com",'_blank')}>
        <span className="dock-tooltip">Mail</span>
        <img src="/icons-png/mail.png" alt="Mail" />
      </div>

      {/* 8. Notes */}
      <div className='icon'
      onClick={() => { 
          setWindowsState(s => ({ ...s, notes: true })) 
          setMinimizedWindows(s => ({...s, notes: false}))
        }}>
        <span className="dock-tooltip">Notes</span>
        <img src="/icons-png/notes.png" alt="Notes" />
      </div>

      {/* 9. Settings */}
      <div className='icon'>
        <span className="dock-tooltip">Settings</span>
        <img src="/icons-png/Settings.png" alt="Settings" />
      </div>

      {/* 10. Twitter */}
      <div className='icon' onClick={() => window.open("https://x.com/TusharSenp55985",'_blank')}>
        <span className="dock-tooltip">Twitter</span>
        <img src="/icons-png/twitter.png" alt="Twitter" />
      </div>

       {/* 11. About ME */}
       <div className='icon'
      onClick={() => { 
          setWindowsState(s => ({ ...s, aboutme: true })) 
          setMinimizedWindows(s => ({...s, aboutme: false}))
        }}>
        <span className="dock-tooltip">About Me</span>
        <img src="/icons-png/profile.png" alt="profile" />
      </div>

    </footer>
  )
}

export default Dock