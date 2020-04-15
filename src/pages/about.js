import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage =()=>{
    return(
        <div>              
                 <Head title="About"/>
               <Layout>
            <h2>My name is Deep im from vadodara</h2>
            <h2>I am a frontend developer</h2>

            <p><Link to="/contact">Contact me</Link> </p>
            </Layout>
        </div>
    )
}

export default  AboutPage