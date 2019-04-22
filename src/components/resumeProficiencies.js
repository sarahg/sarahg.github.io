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
  // this is weird and bad
  const proficienciesArray = [];
  data.allResumeProficienciesJson.edges.forEach(item => {
    if (item.node.languages) {
      let langWrap = [];
      langWrap.push(<dt key="section-1">Languages</dt>);
      item.node.languages.forEach(lang => {
        langWrap.push(<dd key={lang}>{lang}</dd>);
      });
      proficienciesArray.push(<dl key="lang-wrap">{langWrap}</dl>);
    }
    if (item.node.skills) {
      let skillWrap = [];
      skillWrap.push(<dt key="section-2">Skills</dt>);
      item.node.skills.forEach(skill => {
        skillWrap.push(<dd key={skill}>{skill}</dd>);
      });
      proficienciesArray.push(<dl key="skill-wrap">{skillWrap}</dl>);
    }
    if (item.node.tools) {
      let toolWrap = [];
      toolWrap.push(<dt key="section-3">Tools</dt>);
      item.node.tools.forEach(tool => {
        toolWrap.push(<dd key={tool}>{tool}</dd>);
      });
      proficienciesArray.push(<dl key="tool-wrap">{toolWrap}</dl>);
    }
  });
  return proficienciesArray;
}

/*
@todo refactor the above into something like this
function buildProfList(data, section) {
  const profList = [];
  if (item.node.$section) {
    let wrap = [];
    wrap.push(<dt key="section-{section}">{section}</dt>);
    item.node.section.forEach(x => {
      wrap.push(<dd key={x}>{x}</dd>);
    });
    proficienciesArray.push(<dl key="{section}-wrap">{wrap}</dl>);
  }
  return profList;
}*/

export default ResumeProficiencies