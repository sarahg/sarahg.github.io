import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

import DrupalLogo from "../assets/drupalassoc.png"

function Homepage () {
  return <div>
  <div id="container" className="dark-wrap">
    <Header headerText="Sarah German"></Header>
    <h2>
      <span>Internet Fixer<i className="fade-in one e1a-floppy_disk"></i></span>
      <span>Beer Maker <i className="fade-in two e1a-beer"></i></span>
      <span>Minneapolitan <i className="fade-in three e1a-snowflake"></i></span>
    </h2>
    <p>I manage a team of technical support engineers at <a href="https://www.pantheon.io">Pantheon</a>, where we help people build and deploy websites on our super-fast cloud infrastructure.</p>
    <p>Outside of work, I make <a href="https://www.catpartybrewing.party">beer</a>, play some instruments, XC ski, and hang out with my cats.</p>
    
    <div className="links">
      <i className="e1a-metal_tone2 e1a-2x"></i>
      <Link to="/resume/">Check out my resume</Link>
    </div>
  </div>
  <div id="stripe"></div>
      <div id="footer">
        <img src={DrupalLogo} alt="Drupal Association logo" title="Drupal Association member" />
        <ul id="social">
          <li><a href="https://www.drupal.org/user/562544">Drupal</a></li>
          <li><a href="https://github.com/sarahg">GitHub</a></li>
          <li><a href="http://instagram.com/heygermano">Instagram</a></li>
          <li><a href="http://www.last.fm/user/hey_germano">Last.fm</a></li>
          <li><a href="http://www.linkedin.com/in/sarahgerman">LinkedIn</a></li>
          <li><a href="http://twitter.com/hey_germano">Twitter</a></li>
        </ul>
  </div>
  </div>
}

export default Homepage