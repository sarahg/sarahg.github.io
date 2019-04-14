import React from "react"
import { StaticQuery, graphql } from "gatsby"

function ResumeJobs () {
    return <StaticQuery
    query={graphql`
      query ResumeJobsQuery {
        allResumeJobsJson {
          edges {
            node {
                company
                daterange
                url
                roles {
                  title
                  description
                }
            }
          }
        }
      }
    `}
    render={data => (listJobs(data))}
  />
}

function listJobs(data) {
  const jobsArray = [];
  data.allResumeJobsJson.edges.forEach(item => 
    jobsArray.push(
      <>
      <span className="job-daterange">{item.node.daterange}</span>
      <h3><a href="{item.node.url}">{item.node.company}</a></h3>
      </>
    )
  );
  return jobsArray;
}

export default ResumeJobs