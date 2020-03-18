import React, {useEffect, useState} from 'react';
import axios from 'axios';


function GetPic(){

    const [aPOD, setAPOD] = useState([]);



    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=dJzDggM75pbT24RjF0Qf3fYqvjezw1ishFbfpa6p')
        .then(response => (
            setAPOD(response.data)
            // console.log(response.data)
        ))
        .catch(err => (
            console.log(`error ${err}`)
        ))
    }, []);

    // console.log(response.data);
    
return(
    <div className="APOD">
        <GetPic title={aPOD.title} img={aPOD.hdurl} date={aPOD.date} description={aPOD.explanation} />
    </div>
)


}

export default GetPic;


