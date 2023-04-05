import React from "react";

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
  return (
    <div>
        <h1>Hello {props.user}</h1>
    </div>
  )
}
