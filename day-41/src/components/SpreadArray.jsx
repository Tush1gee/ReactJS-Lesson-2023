import { useState } from "react"

export default function List() {
    let nextId = 0
    const [name, setName] = useState("");
    const [books, setBooks] = useState([]);
    return (
        <div>
            <h1>Book list</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button
                onClick={() => {
                    setName("")
                    // const obj = {id: nextId++, name: name}
                    // const newBooks = books.push(obj)
                    // books.push(obj)
                    // console.log(newBooks)
                    // setBooks(newBooks)
                    setBooks([...books, { id: nextId++, name: name }])
                }}
            >
                Add
            </button>
            <ul>
                {books.map((book) => {
                    <li key={book.id}>{book.name}</li>
                })}
            </ul>
        </div>
    );
}