import { useEffect, useState } from "react";

export default function Anime() {
    const [count , setCount] = useState(0);

    useEffect(()=> {
        console.log('My anime Component')
        setCount(count + 1);
    }, [])

    function handleClick(e) {
        console.log('You clicked me')
    }

    return (
        <div>
            <h1>Day 48 UseEffect with Anime</h1>
            <button onClick={(e)=> {handleClick(e); setCount(count + 1);}}>Anime Clicked</button>
        </div>
    );
}