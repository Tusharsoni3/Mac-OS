import React from 'react'
import './navbar.scss'
import Time from './Time'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <div className='apple-icon'><img src="/Navbar-Icons/apple.svg" alt="" /></div>
            <div className='nav-item'><p>Tushar Soni</p></div>
            <div className='nav-item'><p>File</p></div>
            <div className='nav-item'><p>Windows</p></div>
            <div className='nav-item'><p>Terminal</p></div>
        </div>
        <div className='right'>
            <img src="/Navbar-Icons/wifi.svg" alt="" />
            <Time/>
        </div>
    </div>
  )
}

export default Navbar