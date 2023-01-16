import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Login from './component/Login';
import Register from './component/Register';
import { Route, Routes, Link } from 'react-router-dom';
import FeedBackFunc from './component/FeedBack';
import Home from './component/Home';
import Test from './component/Test';
import Tushig from './component/About/Tushig';
import Munkherdene from './component/About/Munkherdene';
import NotFound from './component/NotFound';

function App() {
  return (
    <div>
      <h1>DAY 43</h1>

      <div id="navbar">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/about/test'}>About Test</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
        <Link to={'/feedback'}>Feedback</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about/*" element={<About />}>
          <Route exact path="tushig" element={<Tushig />} />
          <Route exact path="munkherdene" element={<Munkherdene />} />
          <Route path="about" element={<Test />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<FeedBackFunc />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App;
