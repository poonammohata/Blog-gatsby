import React from "react"
import {Link} from "gatsby"

const IndexPage=()=>{
    return(
        <div>
            <h1>Poonam Mohata</h1>
            <p>Hello guys!!i am Poonam working and learning on the path to become full stack developer.Stay tuned here for updates of my journey</p>
            <p>Need a developer<a href="/contact">Click here</a></p>
            <p>Need a developer ..(in this link is used)<Link to ="/contact">Click here</Link></p>
        </div>
    )
}
export default IndexPage