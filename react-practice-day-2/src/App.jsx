import {useState} from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increaseCount = ()=>{
      setCount((prev)=>prev+5);
      console.log(count);
  }
  const decreaseCount = ()=>{
      setCount((prev)=>prev-5);
      console.log(count);
  }
  const resetCount = ()=>{
      setCount(0);
      console.log(count);
  }

  return (
    <div>
      <h1 className="text-5xl font-bold">Counter</h1>
      <h1 className="text-2xl font-bold">{count} </h1>
      <button className="text-1xl font-bold border-2" onClick={increaseCount}>increase(+)</button>
      <button className="text-1xl font-bold border-2" onClick={decreaseCount}>decrease(-)</button>
      <button className="text-1xl font-bold border-2" onClick={resetCount}>reset</button>
    </div>
  )
} 

export default App
