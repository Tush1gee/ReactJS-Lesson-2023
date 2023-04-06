import React from "react";
import styles from "@/styles/Home.module.css"
import Link from "next/link";
import NavigationBar from "@/components/navigation.bar";
  import Movies from "./movies";


export async function getServerSideProps() {
  //backend heseg
  const MovieRequest = await fetch("http://localhost:8384/movies/list");
  const MovieData = await MovieRequest.json();
  console.log(MovieData);
  return {
    props: {
      //avchirsan datag props d damjuulj bga
      movies: MovieData,
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
      <Movies/>
    </div>
  );
}
