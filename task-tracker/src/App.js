
function App() {
  const name = "Brad";
  const x = true;

  return ( <div className = "container" >

    <div className="test"> 
      
      <h1> Ruchi </h1>

      <h2> Hello {name}  </h2>
      x = {x ? 'Yes' : 'No'}

    </div>  
  

  </div>);
}

export default App;