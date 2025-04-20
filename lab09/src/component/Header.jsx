import React from 'react'
import '../App.css'

function Header() {
  return (
    <header className="header">
        <div className="header-left">
        {/* Placeholder for Logo */}
        <div className="logo">
          {/* <img src="/path/to/your/logo.png" alt="Chefify Logo" /> */}
          🍳
        </div>
        <span className="site-title">Chefify</span>
      </div>

      <div className="header-middle">
        <div className="search-bar">
          <input type="text" placeholder="What would you like to cook?" />
          <button className="search-icon">
            {/* Placeholder for Search Icon */}
            🔍
          </button>
        </div>
      </div>

      <div className="header-right">
        <nav className="navigation">
          <ul>
            <li><a href="#what-to-cook">What to cook</a></li>
            <li><a href="#recipes">Recipes</a></li>
            <li><a href="#ingredients">Ingredients</a></li>
            <li><a href="#occasions">Occasions</a></li>
            <li><a href="#about-us">About Us</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </header>
  )
}

export default Header
