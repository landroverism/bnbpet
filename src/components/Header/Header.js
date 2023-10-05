import React from 'react'
import {Route, Link, Routes, Navigate, useNavigate} from "react-router-dom"
import './Header.css'

function Header() {

  const navigate = useNavigate();

  const homePage = () => {
    navigate('/')
  } 
  return (
    <div className='header'>

        <img className="header_icon"
            src = "https://i.imgur.com/Zb73UyT.png"
            alt = "pawbnb logo"
            onClick={homePage}
        ></img>

        <div className='header_options'>
            <Link to='/search'>Search Homes</Link>
            <Link to='/sign-up'>Sign Up</Link>
            <Link to='/log-in'>Log In</Link>
            <Link to='/'>Home</Link>
        </div>
    </div>
  )
}

export default Header