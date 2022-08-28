import React, { useEffect, useState } from 'react';
import './App.css';


function getRandom (max, min) {
  const number = Math.floor(Math.random() * (max - min));
  return number
}


function App() {
  const range = getRandom(710, 1);
  const [facts, setFacts] = useState();
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '466e204c27msh426d08ada9700f7p1c83b6jsn5df82df1c172',
      'X-RapidAPI-Host': 'fun-facts-generator.p.rapidapi.com'
    }
  };
  const getApiData = async () => {
    const response = await fetch(
      `https://fun-facts-generator.p.rapidapi.com/${range}`, options
    ).then((response) => response.json());
    setFacts(response.fact);
  };
  useEffect(() => {
    getApiData();
  }, [])
  return (
    <>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1254943943999168"
        crossorigin="anonymous"></script>
      </head>
      <div className="card">
        <div className="inner-card">
          <h1>{facts ? <>{facts}</> : <>Loading...</>}</h1>
        </div>
      </div>
    </>
  );
};

export default App;
