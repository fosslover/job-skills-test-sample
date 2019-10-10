import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/utils/image"
import SEO from "../components/utils/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome To Digication Store</h1>
    <p>Here you can enroll to courses.</p>
    <p>and To faculties.</p>
    <Link to="/user">Add A User Here</Link> <br/>
    <Link to="/course">Enroll To Course Here</Link> <br/>
    <Link to="/faculty">Be Labeled In Faculty Here</Link> 
  </Layout>
)

export default IndexPage
