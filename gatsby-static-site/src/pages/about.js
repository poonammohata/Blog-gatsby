import React from "react"
import {Link} from "gatsby"
import Footer from "../components/footer.js"
import Header from "../components/header.js"

const AboutPage=()=>{
    return(
        <div>
            <Header/>
            <h1>About Page</h1>
            <p>computer science student,working on the,path to become full stack developer</p>
            <p>What to contact me, <Link to="/contact">then click here</Link></p>
            <Footer/>
        </div>
    )
}
export default AboutPage