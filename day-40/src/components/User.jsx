import { useState } from "react";
import userList from "../data/data.js";

export default function User() {
    // let index = 0
    const[index, setIndex] = useState(0) // 0 toon index variable iin ehnii utga
    // '' state zarlah
    const [memo , setMemo] = useState('')

    let user = userList[index];
    return (
    <div>
        <button onClick={()=>{
            // index += 1
            setMemo(userList[index + 1].name)
            setIndex(index + 1)
            }}>Next</button>
        <p>{user.name}</p>
        <input value={memo}/>
    </div>
    );
}