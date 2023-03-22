import "./App.css";
import axios from "axios";
function App() {
  const Backend_URL = `http://localhost:8086/user`;

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      age: e.target.age.value,
    };

    console.log(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await axios.post(Backend_URL, JSON.stringify(data)); // axios n request post uuru uusgedeg tul options bicih hereggui bolj bga
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  }

  return (
    <div className="App">
      <h1>
        User Crud With FS Module
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input name="username" />
          </label>
          <br />
          <label>
            age:
            <input name="age" />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </h1>
    </div>
  );
}

export default App;
