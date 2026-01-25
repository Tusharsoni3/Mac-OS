import React from 'react'
import Window from './Window'

const Spotify = ({ windowsName,
              setWindowsState,
              isMinimized,
              setMinimizedWindows }) => {
  return (
    <Window
        windowsName={windowsName} setWindowsState={setWindowsState}  isMinimized={isMinimized}
      setMinimizedWindows={setMinimizedWindows}>
       <div className="spotify" style={{ height: '100%', width: '100%' }}>
        <iframe 
          data-testid="embed-iframe" 
          // FIX 1: style string ko object mein badla {{ property: 'value' }}
          style={{ borderRadius: "0px" }} 
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVDvBpGQbzXj?utm_source=generator&theme=0" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          // FIX 2: camelCase use kiya allowFullScreen (S and F capital)
          allowFullScreen={true} 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        ></iframe>

      </div>
        </Window>
  )
}

export default Spotify