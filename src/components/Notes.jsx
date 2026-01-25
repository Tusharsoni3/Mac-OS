import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Window from './Window';
import './notes.scss';

// --- ICONS ---
const TrashIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>;
const MoonIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>;
const SunIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>;
const PlusIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;

const NoteApp = ({ windowsName, setWindowsState, isMinimized, setMinimizedWindows }) => {

  const [theme, setTheme] = useState('dark');

  const [notes, setNotes] = useState([
    { 
      id: 1, 
      title: "About Me", 
      content: [
        { id: 101, text: "Who am I?", type: 'h1' },
        { id: 102, text: "I am a passionate developer and a student currently working into the world of Full Stack Development. I love building tools that solve real problems.", type: 'p' },
        
        { id: 103, text: "My Tech Stack", type: 'h2' },
        { id: 104, text: "• Languages: C++, Java, Go (Golang), JavaScript", type: 'p' },
        { id: 105, text: "• Frontend: React.js, HTML/SCSS, Tailwind", type: 'p' },
        { id: 106, text: "• Backend: Go, MongoDB, Node.js", type: 'p' },
        
        { id: 107, text: "Linux Enthusiast", type: 'h2' },
        { id: 108, text: "I use Arch Linux (btw). I love customizing my workflow and  I spend way too much time ricing my dotfiles to get that perfect aesthetic.", type: 'p' },
        
        { id: 109, text: "Fun Fact", type: 'h2' },
        { id: 110, text: "Anime's,manga's and competitive games are my rest ", type: 'p' }
      ] 
    },
    { 
      id: 2, 
      title: "My Projects", 
      content: [
        { id: 201, text: "Featured Projects", type: 'h1' },
        
        { id: 202, text: "1. MacOS Portfolio", type: 'h2' },
        { id: 203, text: "The website you are looking at right now! A fully functional macOS clone built with React, featuring draggable windows, a dock, and dynamic apps.", type: 'p' },
        
      ] 
    }
  ]);

  const [activeNoteId, setActiveNoteId] = useState(1);
  const [focusId, setFocusId] = useState(null); 

  const activeNote = notes.find(n => n.id === activeNoteId) || notes[0];

  const createNewNote = () => {
    const newId = Date.now();
    const newNote = { 
      id: newId, 
      title: "Untitled Note", 
      content: [{ id: Date.now() + 1, text: "", type: 'p' }] 
    };
    setNotes([...notes, newNote]);
    setActiveNoteId(newId);
  };

  const deleteActiveNote = () => {
    if (notes.length <= 1) {
      const resetNote = { ...activeNote, title: "", content: [{ id: Date.now(), text: "", type: 'p' }] };
      setNotes(notes.map(n => n.id === activeNoteId ? resetNote : n));
      return;
    }
    const filtered = notes.filter(n => n.id !== activeNoteId);
    setNotes(filtered);
    setActiveNoteId(filtered[0].id);
  };

  const updateTitle = (val) => {
    setNotes(notes.map(n => n.id === activeNoteId ? { ...n, title: val } : n));
  };

  const updateLine = (lineId, key, value) => {
    const updatedContent = activeNote.content.map(line => 
      line.id === lineId ? { ...line, [key]: value } : line
    );
    setNotes(notes.map(n => n.id === activeNoteId ? { ...n, content: updatedContent } : n));
  };

  const handleKeyDown = (e, index, lineId) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newLine = { id: Date.now(), text: "", type: 'p' };
      const newContent = [...activeNote.content];
      newContent.splice(index + 1, 0, newLine); 
      setNotes(notes.map(n => n.id === activeNoteId ? { ...n, content: newContent } : n));
      setFocusId(newLine.id); 
    }
    
    if (e.key === 'Backspace' && activeNote.content[index].text === "" && activeNote.content.length > 1) {
      e.preventDefault();
      const prevLineId = activeNote.content[index - 1] ? activeNote.content[index - 1].id : null;
      const newContent = activeNote.content.filter(l => l.id !== lineId);
      setNotes(notes.map(n => n.id === activeNoteId ? { ...n, content: newContent } : n));
      if (prevLineId) setFocusId(prevLineId);
    }
  };

  return (
    <Window 
      windowsName={windowsName} 
      setWindowsState={setWindowsState}
      isMinimized={isMinimized}
      setMinimizedWindows={setMinimizedWindows}
      initialWidth="65vw"
      initialHeight="70vh"
    >
      <div className="note-app-container" data-theme={theme}>
        
        {/* SIDEBAR */}
        <div className="sidebar">
          <div className="sidebar-header">
            <span>My Notes</span>
            <button className="add-btn" onClick={createNewNote}><PlusIcon/></button>
          </div>
          <div className="note-list">
            {notes.map(note => (
              <div 
                key={note.id} 
                className={`note-item ${note.id === activeNoteId ? 'active' : ''}`}
                onClick={() => setActiveNoteId(note.id)}
              >
                {note.title || "Untitled Note"}
              </div>
            ))}
          </div>
        </div>

        {/* EDITOR AREA */}
        <div className="editor-area">
          <div className="toolbar">
            <div className="group">
               <button onClick={() => updateLine(focusId, 'type', 'h1')}>H1</button>
               <button onClick={() => updateLine(focusId, 'type', 'h2')}>H2</button>
               <button onClick={() => updateLine(focusId, 'type', 'p')}>Text</button>
            </div>
            
            <div className="group">
              <button className="delete-btn" onClick={deleteActiveNote}><TrashIcon /></button>
              <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </button>
            </div>
          </div>

          <div className="paper">
             <input 
               className="note-title-input"
               placeholder="Note Title"
               value={activeNote.title}
               onChange={(e) => updateTitle(e.target.value)}
             />

             {activeNote.content.map((line, index) => (
               <Block 
                 key={line.id} 
                 line={line} 
                 index={index}
                 updateLine={updateLine} 
                 handleKeyDown={handleKeyDown}
                 shouldFocus={focusId === line.id}
                 setFocusId={setFocusId}
               />
             ))}
          </div>
        </div>
      </div>
    </Window>
  );
};

const Block = ({ line, index, updateLine, handleKeyDown, shouldFocus, setFocusId }) => {
  const textAreaRef = useRef(null);

 const resize = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'; // Reset height
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'; 
    }
  };

  // 1. Resize immediately when component loads or text changes
  useLayoutEffect(() => {
    resize();
  }, [line.text]);

  // 2. Handle Focus
  useEffect(() => {
    if (shouldFocus && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [shouldFocus]);

  return (
    <div className="block">
      <div className="bullet"></div>
      <textarea
        ref={textAreaRef}
        className={`type-${line.type}`}
        value={line.text}
        onChange={(e) => {
            updateLine(line.id, 'text', e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e, index, line.id)}
        onFocus={() => setFocusId(line.id)}
        placeholder={index === 0 ? "Start writing here..." : ""}
        rows={1}
      />
    </div>
  );
};

export default NoteApp;