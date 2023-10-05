import React, { useState, useEffect } from 'react';

function DogImage() {
  const [dogData, setDogData] = useState({
    imageURL: '',
    breed: '',
    location: '',
    reviews: [],
  });

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/api/dog/data/husky'); // Adjust the API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDogData({
          imageURL: data.image_url,
          breed: data.breed,
          location: data.location,
          reviews: data.reviews,
        });
      } catch (error) {
        console.error('Error fetching dog data:', error);
      }
    };

    fetchDogData();
  }, []);

  return (
    <div>

      <img src={dogData.imageURL} alt="Dog" />
      <p>Breed: {dogData.breed}</p>
      <p>Location: {dogData.location}</p>
      <div>
        <h2>Reviews:</h2>
        <ul>
          {dogData.reviews.map((review, index) => (
            <li key={index}>
              Rating: {review.rating}
              <br />
              Comment: {review.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DogImage;
