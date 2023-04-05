import React, { useEffect, useState } from "react";

interface IComments {
    _id: number,
    name: string,
    email: string,
    movie_id: number,
    text: string,
    date: Date

}

export default function comments() {
    const [comments, setComments] = useState<IComments[]>([])
    async function getComment(): Promise<void> {
        const response = await fetch("http://localhost:8384/comments/list");
        const comments = await response.json()
        setComments(comments)
    }

    useEffect(()=> {
        getComment();
    },[])


  return (
    <div>
        <h1>Comments</h1>
       {comments.map((comments, index) => 
            <div key={index}> {comments.name}</div>
        )}
    </div>
  );
}
