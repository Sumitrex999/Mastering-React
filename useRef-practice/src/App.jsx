import './App.css'
import{useRef} from 'react'

function App() {

  const inputRef = useRef(null);
  function handleFocus() {
    const input = inputRef.current.type;
    console.log(input);
    inputRef.current.focus();
  }


  return (
    <div className="container">

      <h1>Learning useRef</h1>

      <input 
      ref={inputRef} 
      type="text"
      placeholder="Enter your name"
      />

      <button onClick={handleFocus}>
        Focus Input
        </button>


    </div>
  )
}

export default App