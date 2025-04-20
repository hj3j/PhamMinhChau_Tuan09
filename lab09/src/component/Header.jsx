import React from 'react'
import '../App.css'

function Header() {
  return (
    <header className="header">
        <div className="header-left">
        <div className="logo">
          <img src="/Group 9.png" alt="Chefify Logo" />
        </div>
      </div>

      <div className="header-middle">
        <div className="search-bar">
            <button className="search-icon">
                 <img src="/Search.png" alt="" />
            </button>
            <input type="text" placeholder="What would you like to cook?" />
          
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
