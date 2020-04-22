import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout.js"

const IndexPage=()=>{
    return(
        <Layout>
            <h1>Poonam Mohata</h1>
            <p>Hello guys,I am Poonam working and learning on the path to become full stack developer.Stay tuned here for updates of my journey</p>
            <p>Need a developer <a href="/contact">Click here</a></p>
            <p>Need a developer ..(in this link is used)<Link to ="/contact">Click here</Link></p>
        </Layout>
        
    )
}
export default IndexPage