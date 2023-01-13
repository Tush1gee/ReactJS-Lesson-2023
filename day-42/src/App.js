import './App.css';
import {useState} from "react"

function App() {
  const [users , setUsers] = useState([]);

function handleRegister(event) {
  event.preventDefault();
  console.log(event.target.firstname.value)
  console.log(event.target.lastname.value)
  console.log(users)

  const user = {
    firstname: event.target.firstname.value,
    lastname: event.target.lastname.value,
    password: event.target.password.value,
  }


  setUsers([...users, user])
}


  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <label>First name: </label>
        <input type="text" name="firstname" placeholder="Firstname"></input>

        <label>Last name: </label>
        <input type="text" name="lastname" placeholder="Lastname" ></input>

        <label>Password: </label>
        <input type="password" name="password" placeholder="Password" ></input>

        <label>Confirm password: </label>
        <input type="password" name="confirmpassword" placeholder="confirm password" ></input>

        <button><i class="fa-regular fa-heart"></i></button>
      </form>

      {users.map(user => {
        return (
          <div className='contain'>
              <div>{user.firstname}</div>
              <div>{user.lastname}</div>  
              <div>{user.password}</div>  
            <hr/>
          </div>
        )
      })}
    </div>
  )

}

export default App;
