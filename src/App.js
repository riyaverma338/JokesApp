import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState("loading");
  const [fname, setFn] = useState("John");
  const [sname, setSn] = useState("Doe");
  const newJoke = (first, second) =>{
    fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${second}`).
    then(res=>res.json())
    .then(res2=>{
      console.log(res2)
      setJoke(res2.value.joke)
    })
  }
  useEffect(() =>{
    newJoke(fname, sname)
  },[])

  return (
   <>
   <div className="App">
     <h2>Hello there!</h2>
     <h3>Joke of the Day😆</h3>
     <div className="d-flex align-items-center flex-column">
     <input type="text" value={fname} onChange={(e)=> setFn(e.target.value)}/>
     <input type="text" value={sname} onChange={(e)=> setSn(e.target.value)}/>
     <button onClick={()=>newJoke(fname, sname)} className="btn btn-outline-warning">Get another Joke<i className="bi bi-plus"></i></button>
     </div>
     <h4>{joke}</h4>
   </div>
   </>
  );
}

export default App;
