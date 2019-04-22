import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
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
      and I use <a href="https://www.cloudflare.com/">Cloudflare</a> for DNS, HTTPS and as a CDN.</p>
      <p>The <Link to="/resume/">resume page</Link> pulls from a JSON file using GraphQL.</p>
      <p>I use a Git hook to purge Cloudflare cache on deployment.</p>
      <p><em>(I know this is super-overkill for a three page site,
           but I had fun learning how to make it work. Thanks to the GatsbyJS team
           for sharing this very cool framework.)</em></p>
    </div>
    <Footer></Footer>
  </div></>
}

export default Aboutpage