// import React from 'react'
import Button from "./Button";

import propTypes from 'prop-types'; 

const Header = ({title}) => {
    const clickHandler = () => {
        console.log('clicked in header file ');
    }


    return (
        <header className ='header'> 
            <h1> {title} </h1>           

            <Button color="green" text="Add" onClick={clickHandler} /> 
          
        </header> 
        
        
    )
}


Header.defaultProps = {
    title : 'Task Tracker'
}

export default Header
