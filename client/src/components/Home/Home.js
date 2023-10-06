import React from 'react'
import {Route, Link, Routes, useNavigate} from "react-router-dom"
import './Home.css' 
import Card from '../Card/Card'

function Home() {

  const navigate = useNavigate();

  const searchPage = () => {
    navigate('/search')
  } 


  return (
    <div className='homePage'>

      <div className='main_image'>
        <h1>Let your curiosity do the booking</h1>
        <button onClick={searchPage}>Explore</button>
      </div>

      <div className='inspiration'>
        <h1>Inspiration for your next booking</h1>
        <div className='inspiration_cards'>
          <Card
            src="https://i.pinimg.com/236x/24/bc/1b/24bc1b4f7fe377849b845c3182f47b4c.jpg"
            title="Ham Kemboi"
            distance="92 miles away"
          />
          <Card
            src="https://i.pinimg.com/236x/ca/67/0f/ca670fd8f9b595b0c6a16ba49490d450.jpg"
            title="Lawi Mwaura"
            distance= "78 miles away"
          />
          <Card
            src="https://i.pinimg.com/236x/68/99/3c/68993c4fe7034de36b0b6c4fa29ddba5.jpg"
            title="Steve Kariuki"
            distance="62 miles away"
          />
          <Card
            src="https://i.pinimg.com/236x/bb/15/d3/bb15d335184c544143051f20631ecd51.jpg"
            title="Stephan Maina"
            distance="48 miles away"
          />
        </div>
      </div>

      <footer>
        <p>© 2023 Pawbnb Inc. ft Lawi,Ham,Steve,Ian and Stephan</p>
      </footer>
    </div>
  )
}

export default Home