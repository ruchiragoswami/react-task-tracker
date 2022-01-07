import React from 'react'

const AddTask = () => {
    return (
        <form action="" className="add-form">
            <div className='form-control'> 
                <label htmlFor="addTask"> Task </label>
                <input id="addTask" type="text" placeholder='Add Task' />
            </div>

            <div className='form-control'> 
                <label htmlFor="addDay"> Day & Time </label>
                <input id="addDay" type="text" placeholder='Add Day & Time' />
            </div>

            <div className='form-control form-control-check'> 
                <label htmlFor="setReminder"> Set Reminder </label>
                <input id="setReminder" type="checkbox" />
            </div>

            <input type="submit" value="Save Task"  className='btn btn-block'/>

        </form>
    )
}

export default AddTask
