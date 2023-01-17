import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import AccordionFunc from './component/Accordion';
import Index from './component/Index';
import AboutPage from './component/AboutPage'
import HomePage from './component/HomePage';

function App() {
  return (
    <div className='App'>
      <Routes>  
        <Route path={'/'} element={<Index/>}/>
        <Route path={'accordion'} element={<AccordionFunc/>}/>
        <Route path={'home'} element={<HomePage/>}/>
        <Route path={'about'} element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
