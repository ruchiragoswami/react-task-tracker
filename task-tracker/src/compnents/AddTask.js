import {useState} from 'react'; 

const AddTask = () => {
    const [text, setText] = useState(''); 
    const [day, setDay] = useState('');
    const [reminder, setReminder] =  useState(false); 


    return (
        <form action="" className="add-form">
            <div className='form-control'> 
                <label htmlFor="addTask"> Task </label>
                <input id="addTask" type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value) } />
            </div>

            <div className='form-control'> 
                <label htmlFor="addDay"> Day & Time </label>
                <input id="addDay" type="text" placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}  />
            </div>

            <div className='form-control form-control-check'> 
                <label htmlFor="setReminder"> Set Reminder </label>
                <input id="setReminder" type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value="Save Task"  className='btn btn-block'/>

        </form>
    )
}

export default AddTask
