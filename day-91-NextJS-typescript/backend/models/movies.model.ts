import mongoose, {Schema} from "mongoose";

interface IMovies {
    plot: string,
    genres: [string],
    runtime: number,
    cast: [string],
    num_mflix_comments: number,
    poster: string,
    title: string,
    fullplot: string,
    languages:[string],
    released: number,
    directors: [string],
    writers:[string],
    awards: {
        wins: number,
        nomination: number,
        text: string
    },
    lastupdated: Date,
    year: number,
    imdb: {
        rating: number,
        votes: number,
        id: number
    },
    countries:[string],
    type:string,
    tomatoes: {
        viewer: {
            rating: number,
            numReviews: number
        },
        production: string,
        lastUpdate: Date
    }
}

const MoviessSchema: Schema = new Schema ({});

const MoviesModel = mongoose.model<IMovies>("Movies", MoviessSchema)
export default MoviesModel