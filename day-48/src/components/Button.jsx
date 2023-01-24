import { useEffect } from "react";
import { useState } from "react";

export default function Button () {
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(()=> {
        if(isPlaying) {
            console.log('Aslaa')
        } else {
            console.log('Untarlaa! ')
        }
    }, [isPlaying]);
    function handleClick(){
        console.log("You Clicked ME !");
        setIsPlaying(!isPlaying)
    }

    return <button onClick={handleClick}>Click me</button>
}