import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

function Homepage () {
  return <><Helmet>
    <title>Sarah German | 404</title>
  </Helmet>
  
  <div>
    <div id="container" className="dark-wrap">
      <Header headerText="page not found"></Header>
      <h2>¯\_(ツ)_/¯</h2>
      <ul className="links">
        <li><i className="e1a-beer e1a-2x"></i><Link to="/">Go to the homepage</Link></li>
      </ul>
    </div>
    <Footer></Footer>
  </div></>
}

export default Homepage