import React from 'react'
import {Route, Link, Routes, Navigate, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import './Search.css'

function Search() {

  const [homes, setHomes] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/homes/")
    .then(response => response.json())
    .then(data => setHomes(data))
  },[])

  const allHomes = homes.map((home,index) => {

    return(
      <div className='listHomes' key={index}>
          <img src={home.home_url} alt="" />

          <div className='listHomes__info'>
              <div className="listHomes__infoTop">
                  <p>{home.location}</p>
                  <h3>{home.title}</h3>
                  <p>____</p>
                  <p>{home.description}</p>
              </div>
          </div>
      </div>
    )
  })

  return (
    <div className='searchPage'>
      <div className='search_options'>
        <div className='home_types'>
          <p>Cabins</p>
          <p>Tiny Homes</p>
          <p>Amazing Pools</p>
          <p>Mansions</p>
          <p>More</p>
        </div>

        <div className='search_filters'>
            <button className='searchButton' variant="outlined">Guests</button>
            <button className='searchButton' variant="outlined">Filters</button>
        </div>
      </div>

      {homes.length ? allHomes : <p>NO HOMES AVAILABLE</p>}

      <footer>
        <p>© 2022 Pawbnb Inc.</p>
      </footer>
    </div>
  )
}

export default Search