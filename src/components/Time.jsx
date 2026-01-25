import React, { useState, useEffect } from 'react';
import './time.scss';

const Time = () => {
    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatOptions = {
        weekday: 'long', 
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    };

    const formattedDate = date.toLocaleString('en-GB', formatOptions)
        .replace(',', '') 
        .replace('at', '');

    return (
        <div className="macos-menu-item">
            <span className="datetime-text">{formattedDate}</span>
        </div>
    );
}

export default Time;