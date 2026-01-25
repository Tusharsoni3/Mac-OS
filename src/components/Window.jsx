import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const Window = ({ 
  children,
  windowsName,
  setWindowsState,
  isMinimized,
  setMinimizedWindows,
  initialWidth="50vw",
  initialHeight="65vh",
  allowResize = true,
  allowMaximize = true,
  initialX=450,
  intitialY=130
}) => {
  const [windowState, setWindowState] = useState({
    x: initialX,
    y: intitialY,
    width: initialWidth,
    height: initialHeight
  });

  const [isMaximized, setIsMaximized] = useState(false);
  const [preMaximizeState, setPreMaximizeState] = useState(null);
  
  const handleMinimized = (e) => {
    e.stopPropagation(); // FIX: Added brackets () to execute function
    setMinimizedWindows(prev => ({...prev, [windowsName]: true}));
  }

  const handleMaximize = () => {

    if (!allowMaximize) return;
    if (isMaximized) {
      setWindowState(preMaximizeState);
      setIsMaximized(false);
    } else {
      setPreMaximizeState(windowState);
      setWindowState({ x: 0, y: 0, width: '100vw', height: '100vh' });
      setIsMaximized(true);
    }
  }

  return (
    <Rnd 
      size={{ width: windowState.width, height: windowState.height }}
      position={{ x: windowState.x, y: windowState.y }}
      bounds="parent"
      enableResizing={allowResize}
      onDragStop={(e, d) => {
        
        if (!isMaximized) {
            setWindowState(prev => ({ ...prev, x: d.x, y: d.y }));
        }
      }}
      
      onResizeStop={(e, direction, ref, delta, position) => {
        if (!isMaximized) {
          setWindowState({
            width: ref.style.width,
            height: ref.style.height,
            ...position,
          });
        }
      }}
      
      disableDragging={isMaximized}
      dragHandleClassName="navbar"
      cancel=".dots"
      style={{ display: isMinimized ? 'none' : 'block' }}
    >

      <div className="windows">
        <div className="navbar" onDoubleClick={allowMaximize ? handleMaximize : undefined}>
          <div className='dots'>

            <div className='dot red'
              onClick={(e) => { // Wrapper function for cleaner logic
                e.stopPropagation();
                setWindowsState(state => ({ ...state, [windowsName]: false }));
              }}
            >
              <span className='close-icon'>✕</span>
            </div>

            <div className="dot yellow" onClick={handleMinimized}>
                <span className='minimize-icon'>-</span>
            </div>
            
           <div 
              className={`dot green ${!allowMaximize ? 'disabled' : ''}`} 
              onClick={allowMaximize ? handleMaximize : undefined}
            >
                <span className='full-icon'>+</span>
            </div>
          </div>
          <div className="title"><p>{windowsName}</p></div>
        </div>
        
        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default Window