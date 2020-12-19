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
              <i className="e1a-floppy_disk"></i>Internet Fixer
            </span>
            <span className="fade-in two">
              <i className="e1a-beer"></i>Beer Maker
            </span>
            <span className="fade-in three">
              <i className="e1a-snowflake"></i>Minneapolitan
            </span>
          </h2>
          <p>
            I work on platform reliability at{" "}
            <a href="https://www.pantheon.io">Pantheon</a>, where we help people
            develop and scale high-performance websites on cloud infrastructure.
          </p>
          <p>
            Offline, I make{" "}
            <a href="https://www.catpartybrewing.party">beer</a>, play a few
            instruments, enjoy the outdoors (even in the winter), and hang out
            with my cats. 
          </p>
          <ul className="links">
            <li>
              <i className="e1a-metal_tone2 e1a-2x"></i>
              <Link to="/resume/">Check out my resume</Link>
            </li>
          </ul>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Homepage
