import React from "react";
// import axios from "axios";


function Title (props){
console.log(props.title)

    return (
        <>
        <h1>{props.title}</h1>
        </>
    );
}

export default Title;