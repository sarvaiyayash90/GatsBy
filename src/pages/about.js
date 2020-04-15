import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const AboutPage =()=>{
    return(
        <div>              
                 <Head title="About"/>
               <Layout>
            <h2>Im from Vadodara</h2>
            <h2>I am a frontend developer</h2>
            <h2>You can view my projects <a href = "https://github.com/deepkokje" target="_bl"><span className={blogStyles.index}>here</span></a></h2>


            <p><Link to="/contact">Contact me</Link> </p>
            </Layout>
        </div>
    )
}

export default  AboutPage