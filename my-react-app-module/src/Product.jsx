// import React from "react"
function handleUpVote(props){
  console.log('upvoted')
  console.log(props.id)
}


function ProductFunc(props){
    return (
      <div className="select-first">
        <img src={props.productImageUrl}></img>
        <div className="all-text">
            <a onClick={() => {handleUpVote(props)}}>
              <h6>
                <i class="fa-solid fa-caret-up">{props.id}</i>
              </h6>
            </a>
          <a>{props.title}</a>
          <p>{props.description}</p>
          <div className="submitted"><p>Submitted by:</p><img src={props.submitterAvatarUrl}></img></div>
        </div>
      </div>
    )
  }

export default ProductFunc;

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