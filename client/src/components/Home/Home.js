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
        <h1>Inspiration for your next trip</h1>
        <div className='inspiration_cards'>
          <Card
            src="https://a0.muscache.com/im/pictures/1542f3bf-a2e5-4917-8370-391a5b004fac.jpg?im_w=720"
            title="Joshua Tree"
            distance="92 miles away"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/a9d37076-0758-4041-83f8-0e828c32fc85.jpg?im_w=720"
            title="Palm Springs"
            distance= "78 miles away"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=720"
            title="Big Bear Lake"
            distance="62 miles away"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=720"
            title="Lake Arrowhead"
            distance="48 miles away"
          />
        </div>
      </div>

      <footer>
        <p>© 2022 Pawbnb Inc.</p>
      </footer>
    </div>
  )
}

export default Home