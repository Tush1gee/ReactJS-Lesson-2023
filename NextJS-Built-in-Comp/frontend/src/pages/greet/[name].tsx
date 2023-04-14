import React from "react";
import { useRouter } from "next/router";

// page bolgond tuhain params bolon query-g haruulah function 
export async function getServerSideProps (req: any) {
    const {name} = req.params;
    return{
        props: {
            name,
        }
    }
}

export default function Greeting (props: any): JSX.Element {
    const {query} = useRouter()
    console.log(query)
    return (
        <div>
            <h1>Saina uu {props.name}</h1>
        </div>
    )
}
// http://localhost:3001/greet/tushig ee = Saina uu tushig ee

