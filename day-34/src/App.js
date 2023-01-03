import './App.css';
import HelloWorld from "./HelloWorld"

function App() {
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  function formatName(user) {
    return user.firstName + ' ' + user.lastName
  }

  // const element = (
  //   <h1>
  //     Hello, {formatName(user)}!
  //   </h1>
  // );
   
  const customStyle = {
    color: "#000000",
    fontSize: "25px",
    backgroundColor: "orange",
    padding: "20px"
  };

  const element = (<h1 style={customStyle}> Hellp, Teacher</h1>)
  const secondElement = (<p className="text">Lorem Text</p>)

  return (
    <div>
      {element}
      {secondElement}
      <HelloWorld/>
    </div>
  );
}
export default App;
