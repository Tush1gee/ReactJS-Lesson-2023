import React from "react";
import styles from "@/styles/Home.module.css"
import Link from "next/link";
import NavigationBar from "@/components/navigation.bar";


export async function getServerSideProps() {
  //backend heseg
  const theaterRequest = await fetch("http://localhost:8384/theaters/list");
  const theaterData = await theaterRequest.json();
  console.log(theaterData);
  return {
    props: {
      //avchirsan datag props d damjuulj bga
      theater: theaterData,
    },
  };
}

export default function Home(props: any): JSX.Element {
  // frontend heseg
  console.log(props);

  const side = typeof window ? "client" : "server";

  return (
    <div className={styles.main}>
      <NavigationBar/>
    </div>
  );
}
