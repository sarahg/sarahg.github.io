import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

function Homepage() {
  return (
    <>
      <Helmet>
        <title>Sarah German | internet fixer</title>
      </Helmet>

      <div>
        <div id="container" className="dark-wrap">
          <Header headerText="Sarah German"></Header>
          <p>Hey there. I'm Sarah's old website. Welcome back to 2016, when I thought it'd be fun to make a GatsbyJS site and over-engineer the heck out of my <a href="/resume">resume page</a> by <a href="https://github.com/sarahg/sarahg.github.io/blob/gatsby-dev/src/components/resumeJobs.js">populating it with GraphQL</a>.</p>
          <p>Anyways, you can find my current site over here: <Link to="https://sarahgerman.com">https://sarahgerman.com</Link></p>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Homepage
