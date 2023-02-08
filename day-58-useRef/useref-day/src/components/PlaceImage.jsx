import React, { useContext } from "react";
import { ImageContext } from "../Context/ImageContext";
import { getImageUrl } from "../data/utilst";

export default function PlaceImage({place}) {
    const [isLarge, setIsLarge, ImageSize] = useContext(ImageContext);
    
  return (
        <div>
           <img 
            src={getImageUrl(place)}
            alt={place.name}
            width={ImageSize}
            height={ImageSize}
            />
        </div>
    )
}
