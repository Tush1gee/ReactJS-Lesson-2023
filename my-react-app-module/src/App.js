import './App.css';
import Product from './Product';
import Product2 from './Product2';
import Product3 from './Product3';
import Product4 from './Product4';

function App() {
  return (

    <div>
      <header className="app-header">
        <h1>Popular Products</h1>
        <hr></hr>
        <Product/>
        <Product2/>
        <Product3/>
        <Product4/>
        {/* <ProductFunc/> */}
      </header>
    </div>
  )

}



export default App;

