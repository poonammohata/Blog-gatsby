import React from "react"
import {graphql,useStaticQuery} from "gatsby"

const Footer=()=>{
    const data=useStaticQuery(graphql`
    query{
        site{
            siteMetaData{
                author
            }
        }
    }`)
    return(
        <div>
            <p>created by {data.site.siteMetaData.author} ,@poonam mohata</p>
        </div>
    )
}

export default Footer