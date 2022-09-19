import React from "react"
import logo from "../autobots_white.png"
import {Link} from "react-router-dom"

export default function Navbar(){

    return (
        <div className="nav">
            <Link to="/" className="logo noDecoration">
                <img href="/" src={logo} className="logo-img"/>
                <h4 className="logo-name">Roboto</h4>
            </Link>

            
            <div className="links">
                <Link className="noDecoration" to="/">Home</Link>
                <Link className="noDecoration" to="/about">About</Link>
                <Link className="noDecoration" to="/contact">Contact</Link>
            </div>
        </div>
    )
}