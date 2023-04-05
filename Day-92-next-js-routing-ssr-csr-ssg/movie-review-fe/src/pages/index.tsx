import React from "react";
export async function getServerSideProps() { //backend heseg
  const theaterRequest = await fetch("http://localhost:8384/theaters/list")
  const theaterData = await theaterRequest.json()
  console.log(theaterData)
  return {
    props: { //avchirsan datag props d damjuulj bga
      theater: theaterData
    }
  };
}


export default function Home(props: any): JSX.Element { // frontend heseg
  console.log(props)

  const side = typeof window ? "client" : "server";

  return (
    <div>
      <div>Welcome!</div>
      <div>You're currently on the {side}-side.</div> 
    </div>
  )
}
