import { useState } from 'react';
import Header from './compnents/Header';
import Tasks from "./compnents/Tasks";


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



  return ( 
    <div className = "container" >

      <Header />
      <Tasks tasks={tasks} /> 
      

    </div>
    
    );
  }


  

  export default App;