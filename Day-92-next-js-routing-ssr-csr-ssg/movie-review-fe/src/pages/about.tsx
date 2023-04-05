import React from "react";

export async function getStaticProps() {
  return {
    props: {
      theater: "test",
    },
    revalidate: 600, //time in seconds (10 minutes)
  }
}


export default function about(props: any): JSX.Element {
  return (
    <div>
    <div>
        <h1>Im an about page</h1>
    </div>
    <p>Theater Name: {props.theaters}</p>
    </div>
  )
}
