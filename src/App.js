import React, {useState, useEffect} from "react";
import axios from "axios";
import Title from "./Components/title";
import GetPic from "./Components/image";
import Explanation from "./Components/explanation";
import Footer from "./Components/footerinfo";
import "./App.css";




function App() {

  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=dJzDggM75pbT24RjF0Qf3fYqvjezw1ishFbfpa6p")
    .then(response => (
      setNasaData(response.data)
      // console.log(response.data)
    ))
    .catch(err => (
      console.log(`error received ${err}`)
    ))
  }, [])

  return (
    <div className="App">
      
      <Title title={nasaData.title} />

      <div>
        <GetPic src={nasaData.url}/>
        <Explanation expl={nasaData.explanation} title={nasaData.title} />
      </div>
      <Footer copyright={nasaData.copyright} date={nasaData.date} />

      </div>
  );
}    

export default App;
