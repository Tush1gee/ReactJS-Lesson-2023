import React from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(req: any) {
    const {user} = req.params; //request name params aara avj bga
    console.log(user)
  return {
    props: {
        user,
    }
  }
}


export default function Greeting(props: any): JSX.Element {
    const {query} = useRouter()
    console.log(query) 
  return (
    <div>
        <h1>Hello {props.user}</h1>
        <h3>He is {query.age} years old</h3>
    </div>
  )
}
