import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Card from '../Card/Card';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API request to fetch data (images, breed, and reviews) from your backend.
    fetch('http://127.0.0.1:5555/doghouse')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const renderCards = () => {
    return data.map((item, index) => (
      <Card
        key={index}
        src={item.image}
        title={item.breed}
        distance={item.review}
      />
    ));
  }

  return (
    <div className='homePage'>
      <div className='main_image'>
        <h1>Let your curiosity do the booking</h1>
        <button><Link to='/search'>Explore</Link></button>
      </div>

      <div className='inspiration'>
        <h1>Inspiration for your next booking</h1>
        <div className='inspiration_cards'>
          {renderCards()}
        </div>
      </div>

      <footer>
        <p>© 2023 Pawbnb Inc. ft Lawi, Ham, Steve, Ian, and Stephan</p>
      </footer>
    </div>
  );
}

export default Home;
