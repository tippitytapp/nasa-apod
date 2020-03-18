import React from "react";
import Title from "./Page Standards/title"
import GetPic from "./Page Standards/axios"
import "./App.css";




function App(props) {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!  
      </p>
      <Title />
      <GetPic />
      <h2>{props.title}</h2>
      <img src={props.hdurl} alt="NASA APOD"</img>
>
  
      </div>
  );
}

export default App;
