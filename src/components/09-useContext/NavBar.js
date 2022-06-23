import React from 'react';
import {Link,NavLink} from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

    <Link className="navbar-brand" to="#">useContext</Link>
    <div className="collapse navbar-collapse" id="navbarNav">
        <div className='navbar-nav'>
          <NavLink exact activeClassName = "active" className="nav-link" to="/">Home</NavLink>

          <NavLink exact activeClassName = "active" className="nav-link" to="/Login">Login</NavLink>

          <NavLink exact activeClassName = "active" className="nav-link" to="/About">About</NavLink>
        </div>
    </div>
</nav>
  )
}
