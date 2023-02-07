import React from "react";
import Books from "./components/Books";
import { BookContextProvider } from "./context/BookContext";
import { DATA } from "./data/data";

export default function BooksList() {
  return (
    <div>
      <BookContextProvider>
        <Books />
      </BookContextProvider>
    </div>
  );
}
