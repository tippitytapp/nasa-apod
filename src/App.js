import React, {useState, useEffect} from "react";
import axios from "axios";
import Title from "./Components/title";
import GetPic from "./Components/image";
import Explanation from "./Components/explanation";
import Footer from "./Components/footerinfo";
import styled from  "styled-components";
import "./App.css";

const NavStyles = styled.nav`
display:flex;
justify-content:center;
align-items:center;
`;

const ImgStyles = styled.img`
width:50px;
height:50px;
margin-right:1%;
`;


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
      <header>
        <NavStyles>
          <a href="https://www.nasa.gov">
            
          <ImgStyles src="https://i.pinimg.com/originals/4d/e4/30/4de430dde2298e5af2f8287318acf19f.png" alt="nasa logo"></ImgStyles>
          </a>
          <h2> NASA Astronomy Photo of The Day</h2>
          
        </NavStyles>
      </header>
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
