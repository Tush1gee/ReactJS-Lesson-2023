import { useState } from "react"
import movieData from "../movies";
import {Link} from 'react-router-dom'

export default function MoviesFunc () {
    const [movies, setMovies] = useState(movieData)
    console.log(movies);


    return (
        <div className="movies-area">
            <h1>Movies</h1>
            <div className="movie-body-area">
            {
                movieData.map((data, index)=> {
                    return (
                        <Link key={index} to={`/moviefunc/${data.id}`} state={data}>
                            <div>{data.name}</div>
                        </Link>
                    )
                })
            }
            </div>
             <Link to={'/'}>Back</Link>
        </div>
    );
}