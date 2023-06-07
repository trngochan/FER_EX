import React from "react";
import "./Navigation.css"
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div className="Header">
      <nav className="item" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <ul className="list-item" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <li><a className='active' href='#home' style={{ color: theme.color }}>Home</a></li>
              <li><a href='#news' style={{ color: theme.color }}>News</a></li>
              <li><a href='#about' style={{ color: theme.color }}>About</a></li>
              <li><a href='#contact' style={{ color: theme.color }}>Contact</a></li>
          </ul>
          <div style={{position: 'relative'}}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>
      </nav>
    </div>
  )
}


