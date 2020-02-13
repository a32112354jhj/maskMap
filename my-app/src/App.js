import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMap from './Map';


const fetchmaskData = () => {
  return fetch("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json")
    .then(response => response.json())
    .then(
      data => {
        // 定義需要取出需要的資料
        const locationData = data.features;
        // console.log(locationData);
        return locationData;
      }
    );
}

export function App() {

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all([
        fetchmaskData()
      ]);
      console.log("data", data[0]);
      const da = data[0].filter(item => {
        return item.type === "Feature"
      });
      console.log(da);
    };

    fetchData();
  }, []);


  
  return (
    <div className="App">
      <GoogleMap/>
    </div>
  );
}

export default App;


