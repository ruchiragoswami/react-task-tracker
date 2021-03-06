import { useState } from 'react';
import Header from './compnents/Header';
import Tasks from "./compnents/Tasks";
import Task from "./compnents/AddTask";
import AddTask from './compnents/AddTask';


function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id:1,
        text: "Doctor's appointment",
        day: " Feb 5th at 1:30pm",
        reminder: true, 
      } ,
      {
        id:2,
        text: "Meeting at School",
        day: " Feb 6th at 2:30pm",
        reminder: true, 
      }, 
      {
        id:3,
        text: "Grocery Shopping",
        day: " Feb 5th at 3:30pm",
        reminder: false, 
      }
    ]      
  )

  // 


  // Delete Task 
  const deleteTask = (id) => {
    console.log('delete', id); 
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {    
    console.log(id + ' clicked. Double click is working ')
    setTasks(
      tasks.map((task) => 
        task.id == id ? {...task, reminder : !task.reminder} : task))

  }


  return ( 
    <div className = "container" >

     
      <Header />

      <AddTask /> 

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} 
      />: 'No tasks to show '}     

    </div>
    
    );
  }


  

  export default App;