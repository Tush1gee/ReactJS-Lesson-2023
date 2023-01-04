import './App.css';
import products from './Seed';

function Profile(props){
  console.log('Props' , props)
  // destructuring
  const{img, name, age, profession} = props; // <----- ilvv amar biciglel
  return (
    <div className="profile">
      <img src={img} alt="people" />
      <p>Teamname: {name}</p>
      <p>Members: {age}</p>
      <p>profession: {profession}</p>
    </div>
  )
}

function App() {
  const user = {
    img: "img/picture1.jpg",
    name: "Blackpanther",
    age: '22',
    profession: 'Developers',
    hobby: 'basketball',
  }
  return (
    <div className="App">
      <Profile // utga damjuulah heseg
        {...user} // spread syntax
      />  

       <Profile // utga damjuulah heseg
        img="img/picture2.webp"
        name="Ultrans"
        age={20}
        profession="Junior Developer"
      />  

    </div>
  );
}

export default App;
