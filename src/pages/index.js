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
          <h2>
            <span className="fade-in one">
              <i className="e1a-floppy_disk"></i> Software Engineer
            </span>
            <span className="fade-in two">
              <i className="e1a-beer"></i> Beer Maker
            </span>
            <span className="fade-in three">
              <i className="e1a-snowflake"></i> Minneapolitan
            </span>
          </h2>
          <p>Hey there. I'm Sarah's website. There is not a lot going on here right now, but thanks for stopping by.</p>
          <ul className="links">
            <li>
              <i className="e1a-metal_tone2 e1a-2x"></i>
              <Link to="/resume/">Sarah's resume</Link>
            </li>
          </ul>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Homepage
