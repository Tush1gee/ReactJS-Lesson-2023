import {Link, useLocation} from 'react-router-dom'
export default function HomePage () {

    const location = useLocation()
    const state = location.state;
    console.log(state)


    return (
        <div className='home-area'>
            <h3>{state.message}</h3>
            <p>{state.timestamp}</p>
            <Link to={'/'}>Back</Link>
        </div>
    )
}