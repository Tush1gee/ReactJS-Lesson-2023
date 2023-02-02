import "./App.css";
import { useState, useEffect } from "react";
import { updateUser, createUser } from "./services/usersServices";
import { fetchAllData, deleteUser } from "./services/axiosUsersService";

function App() {
  const URL = "http://localhost:8080/users";
  const newUser = {
    id: "",
    username: "",
    age: "",
  };

  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(newUser);

  useEffect(() => {
    fetchAllData(URL, setUsers);
  }, []);

  async function handleDelete(userId) {
    deleteUser(userId, URL, setUsers);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isUpdate) {
      updateUser(e, URL, setUsers);
    } else {
      createUser(
        currentUser,
        URL,
        setUsers,
        setIsUpdate,
        setCurrentUser,
        newUser
      );
    }
  }

  async function handleEdit(userId) {
    setIsUpdate(true);

    const filterUser = users.filter((user) => user.id === userId)[0];

    if (filterUser) {
      setCurrentUser({
        id: filterUser.id,
        age: filterUser.age,
        username: filterUser.username,
      });
    }
  }

  function handleUserName(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value,
    });
  }

  function handleUserAge(e) {
    setCurrentUser({
      ...currentUser,
      age: e.target.value,
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            name="username"
            value={currentUser.username}
            onChange={handleUserName}
          />
        </label>
        <br />
        <label>
          Age:
          <input name="age" value={currentUser.age} onChange={handleUserAge} />
        </label>
        <br />
        <button>{isUpdate ? "Update" : "Submit"}</button>
      </form>

      <h3>Users List</h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index} className="btn-area">
              <p>
                {user.username} : {user.age}{" "}
                <div className="button-area">
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                </div>
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
