
const App = () => {
  const handleClick = (event)=>{
    console.log("Button Clicked!");
    console.log(event.target.textContent);
  }
  return (
    <div>
      <h1 className="text-3xl">React Events</h1>
      <br />
      <br />
      <button onClick={handleClick}>
        like
      </button>
      <br />
      <button onClick={handleClick}>
        dislike
      </button>
      <br />
      <button onClick={handleClick}>
        Share
      </button>
    </div>
  )
}

export default App
