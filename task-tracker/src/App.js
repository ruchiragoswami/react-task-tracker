import Header from './compnents/Header';
import Button from "./compnents/Button";

function App() {
  const name = "Brad";
  const x = true;

  return ( 
    <div className = "container" >

      <Header />
      <Button color="green" text="Hello 1"/> 
      <Button color="red" text="Hello 2" /> 
      <Button color="yellow" text="Hello 3"/> 

    </div>
    
    );
  }

  export default App;