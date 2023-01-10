import products from "./Seed"
import { useState } from "react"
import { Rating } from 'react-simple-star-rating'

export default function ProductFunc(props){
  const [votes, setVotes] = useState(props.votes)
  const [stars, setStars] = useState(props.stars)

  function handleUpVote(props){
    setVotes(votes + 1)
    setStars(stars + 1)
    function handDownVote(){
      setStars(stars + 1)
    }
    function handleUpVote(props){
      setVotes(votes + 1)
    
      if (stars < 5) {
        setStars(0)
      } else {
        setStars(stars - 1)
      }
      console.log(stars)
    }
    
    // console.log(props.id)
    
    // let newProducts = []

    // const foundProduct = products.map(product => {
    //   if(product.id == props.id) {
    //    product.votes = product.votes + 1
      
    //   }
    //   return product
    // })
  
    // console.log(foundProduct)
  }

  return (
      <div className="select-first">
        <img src={props.productImageUrl}></img>
        <div className="all-text">
            <a onClick={() => {handleUpVote(props)}}>
              <h6>
              <i class="fa-solid fa-caret-up">{votes}</i>
              </h6>
          <Rating 
            initialValue={stars}
          />
            </a>
          <a>{props.title}</a>
          <p>{props.description}</p>
          <div className="submitted"><p>Submitted by:</p><img src={props.submitterAvatarUrl}></img></div>
        </div>
      </div>
    )
  }



// class Product extends React.Component {
//     render() {
//     return (
//       <div className="select-first">
//         <img src={this.props.productImageUrl}></img>
//         <div className="all-text">
//           <h6><i class="fa-solid fa-caret-up">{this.props.id}</i></h6>
//           <a>{this.props.title}</a>
//           <p>{this.props.description}</p>
//           <div className="submitted"><p>Submitted by:</p><img src={this.props.submitterAvatarUrl}></img></div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Product;