import React from "react"
import Header from "../components/header"
import Jobs from "../components/resumeJobs"
import Proficiencies from "../components/resumeProficiencies"

function Resume () {
  require('../styles/resume.css')

  // @todo javascript:window.print();

  return <div id="resume-wrapper">
    <div id="resume">
      <header>
        <div id="mynameis">
          <Header headerText="Sarah German"></Header>
          <h2>Engineering Manager + Internet Fixer</h2>
        </div>
      </header>
      <section className="jobs">
        <article>
          <h2>Experience</h2>
          <Jobs></Jobs>
        </article>
        <aside>
          <h2>Proficiencies</h2>
          <Proficiencies></Proficiencies>
        </aside>
      </section>
    </div>
    <div className="btn print"><a href="#print">Print this Page</a></div>
  </div>
}

export default Resume