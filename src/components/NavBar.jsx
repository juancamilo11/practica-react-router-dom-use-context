import React from 'react';
import { NavLink } from 'react-router-dom';



export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink activeClassName="active" className="navbar-brand" to="./home">React-Router Practice</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName="active" className="nav-link" to="./home">Home</NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="./about">About</NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="./login">Login</NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="./photos">Photos</NavLink>
                    </div>
                </div>
            </div>
      </nav>
    )
}
