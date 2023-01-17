import { Link } from 'react-router-dom'
import { useParams, useLocation } from 'react-router-dom'
import movieData from '../movies'

export default function MovieFunc() {

    const { id } = useParams()
    const location = useLocation()
    console.log(location.state)
    const movie = movieData.filter(data => data.id == id)



    return (
        <div className="movie-area">
            <h1>Movie Detail Page {id} </h1>
            {
                movie &&
                movie.map((m, idx) => {
                    return (
                        <div key={idx}>
                            <p>{m.name}</p>
                            <p>{m.id}</p>
                            <p>{m.ISBN}</p>
                            <p>{m.genre}</p>
                            <Link to={'/moviesfunc'}>Back</Link>
                        </div>
                    );
                })}
        </div>
    );
}
