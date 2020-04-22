import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout.js"

const AboutPage=()=>{
    return(
        <Layout>
            <h1>About Page</h1>
            <p>computer science student,working on the,path to become full stack developer</p>
            <p>What to contact me, <Link to="/contact">then click here</Link></p>
        </Layout>
       
    )
}
export default AboutPage