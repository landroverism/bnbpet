import React from 'react'
import './LogIn.css'
import {Route, Link, Routes, Navigate, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"


function LogIn() {

  const [user, setUser] = useState({email: "", password:""})
  const [token, setToken] = useState("")

  const handleChange = (event) => {
    event.persist();
    console.log("Handle Change")
    setUser((prevUser) => {
      const editedUser = {
        ...prevUser,
        [event.target.name]: event.target.value,
      }
      return editedUser
    })
  }

  const handleSubmit = (event) => {
    
    event.preventDefault()

    fetch("http://127.0.0.1:8000/sign-in/", {
      headers: {
        "Content-Type" : "application/json",
      },
      method: "POST",
      body: JSON.stringify(user)
    })
    .then((response) => response.json())
    .then((data) => setToken(data.user.token))
  }


  return (
      <div className='log_in_page'>
        <div className='log_in_container'>
          <h1 className='log_in_header'>Log In</h1>
          <hr></hr>
          <h2 className='welcome'>Welcome back to Pawbnb</h2>

          <form className='log_in_form'>
            <input className='log_in_email_input' type="email" name="email" placeholder="Email" onChange={handleChange}/>
            <input className='log_in_ps_input' type="password" name="password" placeholder="Password" onChange={handleChange}/>
            <input className='log_in_submit' type="submit" value="Submit" onClick={handleSubmit}/>
          </form>
        </div>

        <footer>
          <p>© 2022 Pawbnb Inc.</p>
        </footer>
      </div>
  )
}

export default LogIn