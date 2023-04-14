import React from "react";
import Link from "next/link";

export default function navigationPage(): JSX.Element {

  return (
    <div>
       <h1>Navigation Bar</h1>
       <Link href="indexpage/">index</Link>
    </div>
  )
}
