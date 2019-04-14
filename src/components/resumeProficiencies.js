import React from "react"
import { StaticQuery, graphql } from "gatsby"

function ResumeProficiencies () {
  return <StaticQuery
  query={graphql`
    query ResumeProficienciesQuery {
      allResumeProficienciesJson {
        edges {
          node {
            languages
            tools
            skills
          }
        }
      }
    }
  `}
  render={data => (listProficiencies(data))}
/>
}

function listProficiencies(data) {
  const proficienciesArray = [];
  data.allResumeProficienciesJson.edges.forEach(item => {
    if (item.node.languages) {
      proficienciesArray.push(<dt key="section-1">Languages</dt>);
      item.node.languages.forEach(lang => {
        proficienciesArray.push(<dd key={lang}>{lang}</dd>);
      });
    }
    if (item.node.skills) {
      proficienciesArray.push(<dt key="section-2">Skills</dt>);
      item.node.skills.forEach(skill => {
        proficienciesArray.push(<dd key={skill}>{skill}</dd>);
      });
    }
    if (item.node.tools) {
      proficienciesArray.push(<dt key="section-3">Tools</dt>);
      item.node.tools.forEach(tool => {
        proficienciesArray.push(<dd key={tool}>{tool}</dd>);
      });
    }
  });
  return proficienciesArray;
}

export default ResumeProficiencies