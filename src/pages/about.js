import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutMe = () => {
    return(
      
            <Layout>
            <h1>About Me</h1>
            <p>I'm available for freelance work anytime!</p>
            <p>Want to work with me? Reach out. <Link to="/contact"> Contact me</Link></p>
            </Layout>
        
    )
}

export default AboutMe