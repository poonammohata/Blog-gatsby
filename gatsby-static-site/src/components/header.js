import React from "react"
import {Link} from "gatsby"

const Header=()=>{
    return(
        <div>
            <h1>Poonam Blog </h1>
            <nav>
                <li>
                    <ul><Link to="/">Home</Link></ul>
                    <ul><Link to="/about">About</Link></ul>
                    <ul><Link to="/blog">Blog</Link></ul>
                    <ul><Link to="/contact">Contact</Link></ul>
                </li>
            </nav>
        </div>
    )
}
export default Header