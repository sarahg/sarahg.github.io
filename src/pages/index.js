import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

function Homepage () {
  return <div>
    <div id="container" className="dark-wrap">
      <Header headerText="Sarah German"></Header>
      <h2>
        <span className="fade-in one"><i className="e1a-floppy_disk"></i>Internet Fixer</span>
        <span className="fade-in two"><i className="e1a-beer"></i>Beer Maker</span>
        <span className="fade-in three"><i className="e1a-snowflake"></i>Minneapolitan</span>
      </h2>
      <p>I manage a team of technical support engineers at <a href="https://www.pantheon.io">Pantheon</a>, where we help people build and deploy websites on our super-fast cloud infrastructure.</p>
      <p>Outside of work, I make <a href="https://www.catpartybrewing.party">beer</a>, play some instruments, XC ski, and hang out with my cats.</p>
      <ul className="links">
        <li><i className="e1a-metal_tone2 e1a-2x"></i><Link to="/resume/">Check out my resume</Link></li>
        <li><i className="e1a-hammer_pick e1a-2x"></i><Link to="/about-this-site/">About this site</Link></li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
}

export default Homepage