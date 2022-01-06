// import React from 'react'
import propTypes from 'prop-types'; 

const clickHandler = () => {
    console.log("clicked");
}


const Button = ({color, text}) => {
    return (
    <button onClick={clickHandler} style={{backgroundColor : color}} className="btn"> 
            {text}         
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string
}

export default Button
