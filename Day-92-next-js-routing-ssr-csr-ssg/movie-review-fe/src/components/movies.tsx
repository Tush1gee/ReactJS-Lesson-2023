import React, { useEffect, useState } from "react";
import styles from "@/styles/Movies.module.css"
import Link from "next/link";

interface IMovies {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  writers: string[];
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: string[];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    lastUpdated: Date;
  };
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


    const [topMovies, setTopMovies] = useState<IMovies[]>([])
    async function getTopMovies(): Promise<void> {
        const response = await fetch("http://localhost:8384/movies/toplist");
        const topMovies = await response.json()
        setTopMovies(topMovies)
    }

    useEffect(()=> {
        getTopMovies();
    },[])

  return (
    <div className={styles.font}>
      <div>
       {
        topMovies.map((topmovie, index)=>
          <img className={styles.topposter} src={!topmovie.poster? "/cvr.png": topmovie.poster} alt="poster-picture" />
        )
       }
      </div>

       <div className={styles.titleName}>
        <h3 className={styles.font}> NEW & UPCOMING MOVIES</h3>
        <Link href="https://www.rottentomatoes.com/browse/movies_in_theaters/sort:newest">VIEW ALL</Link>
       </div>

      <div className={styles.etseg} >
          {
            movies.map((movie, index)=>
              <div className={styles.movieCont} key={index}>
                <Link href={"http://localhost:8384/movies/list" + movie._id}><img className={styles.poster} src={!movie.poster? "/cvr.png": movie.poster} alt="poster-picture" /></Link>
                <div>
                  <p>{movie.tomatoes.viewer.meter}%</p>
                </div>
                <p>{movie.title}</p>
              </div>
            )
          }
          </div>
          <br/>

          <div className={styles.titleName}>
            <h3 className={styles.font}> WARNER BROS: 100 YEARS, 100 ESSENTIAL MOVIES</h3>
            <Link href="https://www.rottentomatoes.com/browse/movies_in_theaters/sort:newest">VIEW ALL</Link>
          </div>

          <div className={styles.etseg} >
          {
              movies.map((movie, index)=>

              <div className={styles.movieCont} key={index}>
                <Link href={"http://localhost:8384/movies/list" + movie._id}><img className={styles.poster} src={!movie.poster? "/cvr.png": movie.poster} alt="poster-picture" /></Link>
                <div>
                  <p>{movie.tomatoes.viewer.meter}%</p>
                </div>
                <p>{movie.title}</p>
              </div>

              )
          }
          </div>
    </div>
  )
}
