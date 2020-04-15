import React from 'react'
import { Link }  from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'


const notFound =() => {
   return(
        <div>
                <Head title = "404"/>
         <Layout>
                <h1> 404 Page not found!!</h1>
                     <p> <Link to ="/">GO Home</Link></p>
        </Layout>
        </div>
   ) 
}

export default notFound