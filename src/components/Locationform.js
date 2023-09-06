import React, { useState } from 'react';

function LocationForm({ onLocationSubmit }) {
  const [ipAddress, setIpAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the IP address to the parent component (App) for further processing
    onLocationSubmit(ipAddress);
  };

  return (
    <div className="location-form text-center rounded">
        <h1>Ip Address Location Finder</h1>
     
      <form onSubmit={handleSubmit}>
        <input className='rounded'
          type="text"
          placeholder="Enter IP Address"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button type="submit" className='rounded'>Submit</button>
      </form>
    </div>
  );
}

export default LocationForm;
