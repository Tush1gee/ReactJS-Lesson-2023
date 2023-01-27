import "./App.css";
import { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import UpdateForm from "./components/UpdateForm";

const GET_DATA_URL = "http://localhost:8080/data";
const DELETE_DATA_URL = "http://localhost:8080/data";

function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [currentData, setCurrentData] = useState({});


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const FETCHED_DATA = await fetch(GET_DATA_URL);
    const data = await FETCHED_DATA.json();
    console.log(data);
    setData(data); // avsan dataga dotor n hiij bga
  }

  async function deleteData(data) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DELETE_DATA = await fetch(DELETE_DATA_URL, options);
    const FETCHED_DATA = await FETCHED_DELETE_DATA.json();
    setData(FETCHED_DATA);
  }

  function handleDelete(id) {
    const data = {
      id: id,
    };
    deleteData(data);
  }

  function handleEdit(data) {
    setCurrentData(data);
    setIsOpenForm(true);
  }

  return (
    <div>
      <h1>DAY - 51 React/Express FullStack APP - without Database</h1>
      {/* door input form maani propsor avj bga */}
      <InputForm
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
        setData={setData}
      />
      {isOpenForm ? (
        <UpdateForm
         setCurrentData={setCurrentData}
         currentData={currentData}
         setData={setData}
        />
      ) : (
        <div></div>
      )}
      {isLoaded
        ? "...Уншиж байна"
        : data &&
          data.map((d, index) => {
            return (
              <div key={index}>
                <p>
                  {d.name} -- {d.age}
                </p>
                <button onClick={() => handleDelete(d.id)}>Delete</button>
                <button onClick={() => handleEdit(d)}>Edit</button>
              </div>
            );
          })}
    </div>
  );
}

export default App;
