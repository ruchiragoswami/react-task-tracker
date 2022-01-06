// import React from 'react'
import { useState} from 'react';



const Tasks = ({ tasks}) => { 
    return (
        <div>
            {tasks.map((task) => ( 
                <h3 key={task.id}> {task.test} </h3> 
            ))}
        </div>
    )
}

export default Tasks;
