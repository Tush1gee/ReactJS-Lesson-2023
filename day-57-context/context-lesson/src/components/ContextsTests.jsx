import { useContext } from "react"
import { ContextTestJS } from "../context/ContextTestJS";
import ContextTest from "./ContextTest"

export default function ContextsTests () {
    const list = useContext(ContextTestJS); // Consume Context 3-r alham
    return (
        <div>
            {list.map((Бүтээгдэхүүн, index)=> {
                return <ContextTest key={index} Бүтээгдэхүүн={Бүтээгдэхүүн}/>
            })}
        </div>
    )
}