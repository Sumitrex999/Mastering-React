import {useState} from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increaseCount = ()=>{
      setCount(count+1);
      console.log(count+1);
  }

  return (
    <div>
      <h1>{count} </h1>
      <button onClick={increaseCount}>Increment</button>
    </div>
  )
} 

export default App
