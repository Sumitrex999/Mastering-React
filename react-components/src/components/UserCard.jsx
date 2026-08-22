
const UserCard = ({user,isOnline}) => {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.role}</p>
      <p>Status: {isOnline?"Online":"Offline"}</p>
    </div>
  )
}

export default UserCard
