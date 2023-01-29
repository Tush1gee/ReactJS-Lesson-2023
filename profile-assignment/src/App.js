import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="main">
      <div className='title'>
        <h1>Welcome to component and props corner</h1>
        <h3>React</h3>
        <h5>JavaScript Library</h5>
        <p>John Sedrick</p>
        <br/>
        <h6>Jan 4, 2023</h6>
      </div>
      <div className='tech-stack'>
        <h3>Tech stack:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
      <div className='user-card'>
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png'></img>
        <h1>John Sedrick</h1>
      </div>
      <div className='button-area'>
        <Button/>
      </div>
    <footer>Copyright 2023</footer>
    </div>  
  );
}

export default App;
