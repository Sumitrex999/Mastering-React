// import Content from "./components/Content";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

import UserCard from "./components/UserCard";

const App = () => {
  const user = {
    name:"Sumit",
    age:22,
    role:"Developer"
  };
  const user2 = {
    name:"Rex",
    age:22,
    role:"Jr.Developer"
  };
  const user3 = {
    name:"Sam",
    age:22,
    role:"Sr.Developer"
  };
  return (
    <div>
      {/* <Header user={user}/>
      <Header user={user2}/>
      <Content/>
      <Footer/> */}
      <UserCard user={user} isOnline={true}/>
      <br/>
      <UserCard user={user2} isOnline={true}/>
      <br/>
      <UserCard user={user3} isOnline={false}/>


    </div>
  )
}

export default App
