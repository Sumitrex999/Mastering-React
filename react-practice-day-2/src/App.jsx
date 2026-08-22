import Card from "./components/Card";
import img from "./assets/blackCoat.jpg";

const App = () => {
  return (
    <div>
      <Card>
        <h2>Rex</h2>
        <p>Frontend Engineer</p>
      </Card>
      <br/>
      <br/>
      <Card>
        <h2>Sumit</h2>
        <p>Backend Engineer</p>
      </Card>
      <br/>
      <br/>
      <Card>
        <img src={img} 
        alt="Girl in a jacket" 
        />
      </Card>
    </div>
  )
}

export default App
