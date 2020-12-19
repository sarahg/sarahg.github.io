import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Jobs from "../components/resumeJobs"
import Proficiencies from "../components/resumeProficiencies"

function Resume() {
  require("../styles/resume.css")

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "page-resume",
        }}
      >
        <title>Sarah German | Resume</title>
      </Helmet>

      <div id="resume-wrapper">
        <div id="resume">
          <header>
            <div id="mynameis">
              <Header headerText="Sarah German"></Header>
            </div>
          </header>
          <section className="jobs">
            <article>
              <h2>Summary</h2>
              <p className="summary">
                I am a software engineer and technical leader with 13 years of
                professional experience across the stack. In 2021, I'm focusing
                on DevOps, utilizing big data, and customer success.
              </p>
              <h2>Experience</h2>
              <Jobs></Jobs>
            </article>
            <aside>
              <h2>Proficiencies</h2>
              <Proficiencies></Proficiencies>
              <section id="edu">
                <h2>Education</h2>
                <p>
                  University of Denver
                  <br />
                  BA, Digital Media Studies
                </p>
              </section>
            </aside>
          </section>
        </div>
      </div>
    </>
  )
}

export default Resume
