import { Outlet, Link } from "react-router-dom";

export default function About(){
    return( 
        <div className="about-page">
            <p>It is about page</p>
            <Link to={"/about/Tushig"}>Tushig</Link>
            <Link to={"/about/Munkherdene"}>Munkherdene</Link>
            <Outlet/>
        </div>
    )
}