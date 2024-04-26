import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export default function Navbar(){
    return(
        <>
            <div className="navbar para-md">
                <Link to="/">@Ayush Barnwal</Link>
                <ul className="nav-links ">
                    <li><HashLink to="/#about">About</HashLink> </li>
                    <li><HashLink to="/#project">Work</HashLink> </li>
                    <li><HashLink to="/Contact">Contact</HashLink> </li>
                </ul>
            </div>
        </>
    )
}