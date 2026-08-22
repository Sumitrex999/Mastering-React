import Footer from "./components/Footer";
import Navbar from "./components/Navbar"


const App = () => {
  const name = "Rex"
  const age = 22
  const role = "Developer"
  return (
    <div>
      <Navbar/>
      <h1 className="text-4xl font-bold ">Hello:{name}</h1>
      <p className="text-2xl font-bold">Age:{age}</p>
      <p className="text-2xl font-bold">Role:{role} </p>
      <Footer/>
    </div>
  )
}

export default App
