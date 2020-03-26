import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"

function Aboutpage () {
  return <><Helmet>
    <title>Sarah German | about this site</title>
  </Helmet>

  <div>
    <div id="container" className="dark-wrap">
      <Header headerText="Sarah German"></Header>
      <h2><i className="e1a-floppy_disk"></i> about this site</h2>
      <p>
      I built this static site using <a href="https://www.gatsbyjs.org/">GatsbyJS</a>. 
      It's hosted on <a href="https://pages.github.com/">GitHub Pages</a>, 
      and I use <a href="https://www.cloudflare.com/">Cloudflare</a> for DNS/HTTPS/CDN.</p>
      <p><a href="https://github.com/sarahg/sarahg.github.io">Browse source on GitHub</a></p>
    </div>
    <Footer></Footer>
  </div></>
}

export default Aboutpage
