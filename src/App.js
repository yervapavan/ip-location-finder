import './App.css';
import Locationform from './components/Locationform';
import Locationmap from './components/Locationmap';
import React, { useState } from 'react';

function App() {
  const [ipAddress,setIpAddress]=useState("")
  const handleSubmit=(ipAddress)=>{
        setIpAddress(ipAddress);
  }
  return (
    <div>
      <Locationform onLocationSubmit={handleSubmit}/>
      <Locationmap ipAddress={ipAddress}/>
    </div>
  );
}

export default App;
