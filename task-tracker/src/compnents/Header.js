// import React from 'react'

const Header = ({title}) => {
    return (
        <div> 
            <h1> {title} </h1>

            {/* <h2> This is {props.title} </h2> */}

        </div>
       

    )
}


Header.defaultProps = {
    title : 'Task Tracker'
}

export default Header
