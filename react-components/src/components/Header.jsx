
const Header = ({user}) => {
  return (
    <div>
      <h1 className="text-5xl">{user.name}</h1>
      <h1 className="text-5xl">{user.age}</h1>
      <h1 className="text-5xl">{user.role}</h1>
    </div>
  )
}

export default Header
