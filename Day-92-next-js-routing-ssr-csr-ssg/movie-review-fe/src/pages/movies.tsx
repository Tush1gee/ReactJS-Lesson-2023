import React, { useEffect, useState } from "react";
import styles from "@/styles/Movies.module.css"

interface IMovies {
    plot: string;
    Genres: IGenres;
    runtime: number;
    cast: {
      type: [string];
    };
    num_mflix_comments: number;
    poster: string;
    title: string;
    fullplot: string;
    languages: {
      type: [string];
    };
    released: number;
    directors: IDirectors;
    writers: IWriters;
    awards: IAwards;
    lastUpdated: string;
    year: number;
    imdb: IImdb;
    countries: {
      type: [string];
    };
    type: string;
    tomatoes: ITomatoes;
  }
  
  interface IDirectors {
    directors: {
      type: [string];
    };
  }
  
  interface IGenres {
    genres: {
      type: [string];
    };
  }
  interface IWriters {
    genres: {
      type: [string];
    };
  }
  
  interface IAwards {
    wins: number;
    nominations: number;
    text: string;
  }
  
  interface IImdb {
    rating: number;
    votes: number;
    id: null;
  }
  
  interface ITomatoes {
    viewer: IViewer;
    lastUpdated: number;
  }
  interface IViewer {
    rating: number;
    numReviews: number;
    meter: number;
  }


export default function Movies():JSX.Element {
    const [movies, setMovies] = useState<IMovies[]>([])
    async function getMovies(): Promise<void> {
        const response = await fetch("http://localhost:8384/movies/list");
        const movies = await response.json()
        setMovies(movies)
    }

    useEffect(()=> {
        getMovies();
    },[])

  return (
    <div>
      <h3 > NEW & UPCOMING MOVIES</h3>
    <div className={styles.etseg} >
        {
            movies.map((movie, index)=>

            <div className={styles.movieCont} key={index}>
               <img className={styles.poster} src={movie.poster} alt="" />
               <p>{movie.title}</p>
            </div>

            )
        }
        </div>
    </div>
  )
}
