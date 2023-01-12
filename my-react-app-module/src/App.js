// import './App.css';
// import ProductFunc from './Product';
// import products from './Seed';
// // import Product from './Product';

// function App() {  
//   const productList = products.map((product) => {
//     // function handleProductUpVote(productID) {                  ///////////////////
//     //   console.log('upvote', productID)                                          //
//     //   const foundProduct = product.filter(product => {                          //  
//     //     if (product.id == productID) {                                          //
//     //       return product                                                        //
//     //     }                                                                       ////
//     //   })                                                                     ZASWARLAH HEREGTEI AJILLAHGUI BGA App.js Line 21:57: 
//     //                                                                             ////
//     //   console.log(foundProduct[0].votes)                                        //
//     //   foundProduct[0].vote = foundProduct[0].vote + 1;                          //
//     //   console.log(foundProduct[0].votes)                                        //
//     //                                                                             //
//     //   // change votes in product array                                          //
//     //   const [stateProductList , setStateProductList ] = useState(products) ///////

//       function handleProductUpVote(productID){
//         console.log(stateProductList)
//       }
//       const newProducts = stateProductList.map(product => {
//         if (product.id === productID) {
//           return Object.assign({}, product, {
//             votes: products.vote + 1
//           })
//         } else {
//           return product;
//         }

//       })
//       setStateProductList(newProducts)
//       return ( <ProductFunc
//         title={product.title}
//         id={product.id}
//         description={product.description}
//         url={product.url}
//         votes={product.votes}
//         submitterAvatarUrl={product.submitterAvatarUrl}
//         productImageUrl={product.productImageUrl}
//         stars={product.stars}
//         onVote={handleProductUpVote}
//       /> )

      
//     }

  

//   // const productList2 = products.map((product)=> {
//   //   return <Product
//   //   title={product.title} 
//   //   id={product.id}
//   //   description={product.description}
//   //   url={product.url}
//   //   votes={product.votes}
//   //   submitterAvatarUrl={product.submitterAvatarUrl}
//   //   productImageUrl={product.productImageUrl} 
//   // />
//   // })


//   return (
//     <div className='App'>
//       <header className="app-header">
//         <h1>Popular Products</h1>
//         <hr />
//         {productList}
//         {/* {productList2} */}
//       </header>
//     </div>
//   )
// }
// export default App;

