
const App = () => {
  const isLogin = true;
  const isAdmin = true;
  return (
    <div>
      {
        isLogin?(
          <>
            <h1>Welcome Rex</h1>
            <button>Logout</button>
            <br />
            {isAdmin && <button>Delete User</button>}

          </>
          
        ):(
          <h1>Please Login</h1>
        )
      }
    </div>
  )
}

export default App
