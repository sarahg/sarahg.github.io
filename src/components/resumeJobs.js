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
  data.allResumeJobsJson.edges.forEach(item => {
    jobsArray.push(
      <div key={item.node.company}>
        <span className="job-daterange">{item.node.daterange}</span>
        <h3><a href={item.node.url}>{item.node.company}</a></h3>
        {getRoleList(item)}
      </div>
    )
  }); 
  return jobsArray;
}

function getRoleList(item) {
  let roleList = [];
  item.node.roles.forEach(role => {
    roleList.push(<div key={role.title}><h4>{role.title}</h4><p>{role.description}</p></div>);
  });
  return roleList;
}

export default ResumeJobs