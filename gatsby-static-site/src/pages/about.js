import React from "react"
import {Link} from "gatsby"

const AboutPage=()=>{
    return(
        <div>
            <h1>About Page</h1>
            <p>computer science student,working on the,path to become full stack developer</p>
            <p>What to contact me, <Link to="/contact">then click here</Link></p>
        </div>
    )
}
export default AboutPage