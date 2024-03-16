import React  from "react"

export default function Header(){
    return (
    <header>
      <nav className='nav'>
      <img src="./react-logo.png" />
      <ul className="nav-items">
        <li>About</li>
        <li>Contact</li>
        <li>Pricing</li>
      </ul>
        
      </nav>
    </header>
    )
  }