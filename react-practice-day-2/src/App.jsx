
const App = () => {
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(event.target.elements.name.value);
    console.log(event.target.elements.email.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Enter the Name" />
        <input name="email" type="text" placeholder="Enter the Email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
