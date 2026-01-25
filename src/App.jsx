import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Terminal from './components/Cli'
import Spotify from './components/Spotify'
import Calendar from './components/Calendar'
import NoteApp from './components/Notes'
import AboutMe from './components/AboutMe'
function App() {


  const [windowsState,setWindowsState]  = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    Terminal: true,
    calendar:false,
    aboutme: false
  })

  const [minimizedWindows, setMinimizedWindows] = useState({
     Terminal:false,
    calendar:false,
    spotify:false,
    aboutme: false
  })

  return (
        <main>
         <Dock 
         windowsState={windowsState} 
         setWindowsState={setWindowsState} 
         minimizedWindows={minimizedWindows}
         setMinimizedWindows={setMinimizedWindows}
         />
         <Navbar/>

        {windowsState.Terminal && (
        <Terminal 
          windowsName="Terminal" 
          setWindowsState={setWindowsState}
          isMinimized={minimizedWindows.Terminal}
          setMinimizedWindows={setMinimizedWindows}
        />
      )}

      {windowsState.notes && (
        <NoteApp
          windowsName="notes" 
          setWindowsState={setWindowsState}
          isMinimized={minimizedWindows.notes}
          setMinimizedWindows={setMinimizedWindows}
        />)}

        {windowsState.calendar && (
        <Calendar
          windowsName="calendar" 
          setWindowsState={setWindowsState}
          isMinimized={minimizedWindows.calendar}
          setMinimizedWindows={setMinimizedWindows}
        />
      )}

        {windowsState.aboutme && (
        <AboutMe
          windowsName="aboutme" 
          setWindowsState={setWindowsState}
          isMinimized={minimizedWindows.aboutme}
          setMinimizedWindows={setMinimizedWindows}
        />
      )}


        {windowsState.spotify && (
        <Spotify
          windowsName="spotify" 
          setWindowsState={setWindowsState}
          isMinimized={minimizedWindows.spotify}
          setMinimizedWindows={setMinimizedWindows}
        />
      )}
        </main>
  )
}

export default App
