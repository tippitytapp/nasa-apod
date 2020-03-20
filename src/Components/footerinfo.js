import React from "react";


function Footer (props){

    return(
        <div className="footer">
            <span> Copyright {props.copyright}  {props.date}</span>
        </div>
    );
};













export default Footer;