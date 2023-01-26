export default function InputForm({ isLoaded, setIsLoaded, setData }) {
  const POST_DATA_URL = "http://localhost:8080/data";

  async function postData(data) {
    const options = {
      // option gedeg object
      method: "POST",
      headers: { "Content-Type": "application/json" }, // ene data ymr data we gedgiig headers gdg zuileer zaaj ugdug
      body: JSON.stringify(data), // object ees string bolgoj uurchluj bga.
    };

    const FETCHED_DATA = await fetch(POST_DATA_URL, options);
    console.log(FETCHED_DATA);
    setData(FETCHED_DATA);
    if (FETCHED_DATA) {
      setIsLoaded(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target.name.value); //inputiin name iin value iig avj bga
    console.log(e.target.age.value); //inputiin age gsn value iig avna

    const data = {
      // data object dotor input iin value name
      name: e.target.name.value,
      age: e.target.age.value,
    };
    setIsLoaded(true);
    postData(data);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          NAME:
          <input placeholder="Name" name="name" />
        </label>
        <br />
        <label>
          AGE:
          <input placeholder="Age" name="age" />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
