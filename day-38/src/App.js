import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import AlertButton from './components/alerbutton';
import Toolbar from './components/Toolbar';
import ToolbarNext from './components/ToolbarNext';
import ParentToolbar from './components/ParentToolbar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <h1>Day 38 React Event</h1>
     {/* <Button/>
     <AlertButton/> */}
     <Toolbar/>
     <ToolbarNext/>
     <p>etseg lvvge onclicke damjulad bga. Button dere e.stopPopagation ashiglaval tghe bolino</p>
     <ParentToolbar/>
     <p>Form bicheed send darhad page refresh hiigdehig boliulahin tuld : - e.preventDefault</p>
     <SignUp/>
    </div>
  );
}

export default App;
