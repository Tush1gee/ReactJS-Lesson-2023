import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <header className="app-header">
        <h1>Popular Products</h1>
        <hr></hr> 
        <div className="select-first">
          <img className="pictureyellow" src="image-yellow.png"></img>
          <div className="all-text">
            <h6> ⏏️55 </h6>
            <a href="#">Haught or Naught</a>
            <p>High-minded or absent-minded? You decide.</p>
            <div className="submitted">
              <p>Submitted by:</p>
              <img src="famale.png"></img>
            </div>
          </div>
        </div>

        <div className="select-first">
          <img className="pictureyellow" src="image-aqua.png"></img>
          <div className="all-text">
            <h6> ⏏ 44</h6>
            <a href="#">Yellow Pail</a>
            <p>On-demand sand castle construction expertise.</p>
            <div className="submitted">
              <p>Submitted by:</p>
              <img src="profile.png"></img>
            </div>
          </div>
        </div>

        <div className="select-first">
          <img className="pictureyellow" src="image-steel.png"></img>
          <div className="all-text">
            <h6> ⏏️ 42</h6>
            <a href="#">Tinfoild: Tailored tinfoil hats</a>
            <p>We already have your measurements and shipping adress.</p>
            <div className="submitted">
              <p>Submitted by:</p>
              <img src="famale.png"></img>
            </div>
          </div>
        </div>

        <div className="select-first">
          <img className="pictureyellow" src="image-rose.png"></img>
          <div className="all-text">
            <h6> ⏏️ 23</h6>
            <a href="#">Supermajority: The Fantasy Congress League</a>
            <p>earn point when you favorite politicians pass legislation.</p>
            <div className="submitted">
              <p>Submitted by:</p>
              <img src="profile.png"></img>
            </div>
          </div>
        </div>
      </header>
    </body>
  );
}

export default App;
