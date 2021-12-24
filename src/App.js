import {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const changeCount = (value) => {
    setCount(count + value)
  }
  const multi2 = () => {
    setCount(count * 2)
  }
  
  return (
    
    <div className="App">
      <h2>Counter:{count}</h2>
      
      <button onClick = {()=>changeCount(+1)}>Increment</button>
      <button onClick = {()=>changeCount(-1)}>Decrement</button>
      <button onClick = {multi2}>Double</button>
      
    </div>
  );
}

export default App;
