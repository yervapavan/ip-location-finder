import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LocationMap({ ipAddress }) {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    if (ipAddress) {
      // Make an API request to fetch location data
      axios
        .get(`http://ip-api.com/json/${ipAddress}`)
        .then((response) => {
          setLocationData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching location data:', error);
        });
    } else {
      // Clear locationData when ipAddress is empty
      setLocationData(null);
    }
  }, [ipAddress]);

  return (
    <div className='container d-flex justify-content-center align-items-center' style={{marginTop:"5vh"}}>
    <div className="location-map text-center card justify-content-center align-items-center" style={{width: "18rem"}}>
        <div>
      <h2>Location Information</h2>
      {locationData ? (
        <div className='card-body' >
          <p>IP Address: {locationData.query}</p>
          <p>City: {locationData.city}</p>
          <p>Region: {locationData.regionName}</p>
          <p>Country: {locationData.country}</p>
          <p>Latitude: {locationData.lat}</p>
          <p>Longitude: {locationData.lon}</p>
          {/* Add more information as needed */}
        </div>
      ) : ipAddress ? (
        <p>Loading location data...</p>
      ) : (
        <p>Enter an IP address to retrieve location data.</p>
      )}
      </div>
    </div>
    </div>
  );
}

export default LocationMap;
