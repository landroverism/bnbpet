import React from 'react'
import './SignUp.css'
import {Route, Link, Routes, Navigate, useNavigate} from "react-router-dom"
import { useState } from "react"


function SignUp() {

  const [user, setUser] = useState({email: "", password:""})
  const navigate = useNavigate();

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
    fetch("http://127.0.0.1:8000/sign-up/", {
      headers: {
        "Content-Type" : "application/json",
      },
      method: "POST",
      body: JSON.stringify(user)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    navigate('/log-in')
  }


  return (
      <div className='sign_up_page'>
        <div className='sign_up_container'>
          <h1 className='sign_up_header'>Sign Up</h1>
          <hr></hr>
          <h2 className='welcome'>Welcome to Pawbnb</h2>

          <form className='sign_up_form'>
            <input className='sign_up_email_input' type="email" name="email" placeholder="Email" onChange={handleChange}/>
            <input className='sign_up_ps_input' type="password" name="password" placeholder="Password" onChange={handleChange}/>
            <input className='sign_up_submit' type="submit" value="Submit" onClick={handleSubmit}/>
          </form>
        </div>

        <footer>
          <p>© 2022 Pawbnb Inc.</p>
        </footer>
      </div>
  )
}

export default SignUp