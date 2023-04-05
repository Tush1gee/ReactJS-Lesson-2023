import React from "react";
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
    <div>
      <NavigationBar/>
      <div>Welcome!</div>
      <div>You're currently on the {side}-side.</div>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact Page</Link>
      <Link href="/greeting/John?age=25">Greeting Page</Link>
      {/* <Link href="/posts/2023-04-05/first-post">Post Page</Link> */}
      <Link
        href={{
          pathname: "/posts/[date]/[slug]",
          query: { date: "2023-04-05", slug: "first-post" },
        }}
      >
        Post Page
      </Link>
    </div>
  );
}
