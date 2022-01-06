// import React from 'react'
import Button from "./Button";

const Header = ({title}) => {
    return (
        <header className ='header'> 
            <h1> {title} </h1>
            {/* <button className='btn'> Add </button> */}

            <Button color="green" text="Add"/> 

          
        </header> 
        
        
    )
}


Header.defaultProps = {
    title : 'Task Tracker'
}

export default Header
