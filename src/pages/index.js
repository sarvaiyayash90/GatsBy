import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from '../pages/blog.module.scss'
import Head from '../components/head'

const IndexPage =()=>{

  
    return(
        <div>
                <Head title="Home"/>
                 <Layout>
            <h1>Hello.</h1>
            <h1>I'm Deep, a Full stack Web/Mobile developer</h1>
            <p>Need a developer? <Link to='/contact' className = {blogStyles.index} > <br></br>Contact me</Link></p>
            </Layout>
        </div>
    )
}

export default IndexPage