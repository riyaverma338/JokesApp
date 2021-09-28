import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState("loading")
  useEffect(() =>{
    fetch("http://api.icndb.com/jokes/random?firstName=John&lastName=Doe").
    then(res=>res.json())
    .then(res2=>{
      console.log(res2)
      setJoke(res2.value.joke)
    })
  },[])
  return (
   <>
   <div className="App">
     <h2>Hello there!</h2>
     <h3>Joke of the Day😆</h3>
     <button className="btn btn-outline-warning">Get another Joke<i className="bi bi-plus"></i></button>
     <h4>{joke}</h4>
   </div>
   </>
  );
}

export default App;
