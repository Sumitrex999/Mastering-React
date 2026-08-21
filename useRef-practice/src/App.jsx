const Card = ({title}) =>{
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}


const App = ()=> {
  return(
    <div>
      <h1>Hello React</h1>
      <Card title="PK 2"/>
      <Card title="Bahubali 2"/>
      <Card title="Don 2"/>
      
    </div>
  )
}

export default App;