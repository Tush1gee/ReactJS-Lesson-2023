import React from "react";

export default function Book({item}) {
  return (
    <div>
        {item.title} - {item.price}
    </div>
  )
}
