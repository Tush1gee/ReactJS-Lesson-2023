import React, { useEffect, useState } from "react";

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
    id: number;
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
  

export default function MoviesDetail() {
    const [moviesDetail, setMoviesDetail] = useState<IImdb[]>([])
    async function getMoviesDetail(): Promise<void> {
        const response = await fetch("http://localhost:8384/movies/detail")
        const movies = await response.json()
        setMoviesDetail(moviesDetail)
    }

    useEffect(() => {
        getMoviesDetail()
    }, [])


  return (
    <div>
        <h1>Movie Detail Page</h1>
    </div>
  )
}
