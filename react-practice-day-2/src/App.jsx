import UserCard from "./components/UserCard";

const App = () => {
  const users = [
    {id:1, name:"Rex"},
    {id:2, name:"Sumit"},
    {id:3, name:"Amit"},
  ]
  return (
    <div>
      {users.map((user)=>{
        return <UserCard key={user.id} name={user.name} id={user.id}/>
      })}
    </div>
  )
}

export default App
