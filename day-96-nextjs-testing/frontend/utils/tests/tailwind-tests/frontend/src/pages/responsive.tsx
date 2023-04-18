import React from "react";

export default function responsive() {
  return (
    <div className="max-w-7xl h-80 m-auto bg-green-300 shadow-xl overflow-hidden">
        <div className="md:flex">
            <div className="p-12">
                <div className="">Company retreats</div>
                <a href="#" className="">Incredible accommodation for your team</a>
                <p className="">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
            </div>
            <div className="">
                <img className=" h-40 w-full object-cover" src="https://freepngimg.com/thumb/food/139178-food-plate-diet-free-transparent-image-hd.png"/>
            </div>
        </div>
    </div>
  )
}

