(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{F2CN:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("TJpk"),o=a("LbRr"),i=a("Nj4Y"),s=a("Wbzz");var c=function(){return r.a.createElement(s.StaticQuery,{query:"4113164175",render:function(e){return function(e){var t=[];return e.allResumeJobsJson.edges.forEach((function(e){t.push(r.a.createElement("div",{className:"company",key:e.node.company},r.a.createElement("span",{className:"job-daterange"},e.node.daterange),r.a.createElement("h3",null,r.a.createElement("a",{href:e.node.url},e.node.company)),function(e){var t=[];return e.node.roles.forEach((function(e){t.push(r.a.createElement("div",{className:"jorb",key:e.title},r.a.createElement("h4",null,e.title),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.description}})))})),t}(e)))})),t}(e)},data:i})},d=a("R1Pu");var u=function(){return r.a.createElement(s.StaticQuery,{query:"2307060274",render:function(e){return function(e){var t=[];return e.allResumeProficienciesJson.edges.forEach((function(e){if(e.node.languages){var a=[];a.push(r.a.createElement("dt",{key:"section-1"},"Languages")),e.node.languages.forEach((function(e){a.push(r.a.createElement("dd",{key:e},e))})),t.push(r.a.createElement("dl",{key:"lang-wrap"},a))}if(e.node.skills){var n=[];n.push(r.a.createElement("dt",{key:"section-2"},"Skills")),e.node.skills.forEach((function(e){n.push(r.a.createElement("dd",{key:e},e))})),t.push(r.a.createElement("dl",{key:"skill-wrap"},n))}if(e.node.tools){var l=[];l.push(r.a.createElement("dt",{key:"section-3"},"Tools")),e.node.tools.forEach((function(e){l.push(r.a.createElement("dd",{key:e},e))})),t.push(r.a.createElement("dl",{key:"tool-wrap"},l))}})),t}(e)},data:d})};t.default=function(){return a("XG0U"),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Helmet,{bodyAttributes:{class:"page-resume"}},r.a.createElement("title",null,"Sarah German | Resume")),r.a.createElement("div",{id:"resume-wrapper"},r.a.createElement("div",{id:"resume"},r.a.createElement("header",null,r.a.createElement("div",{id:"mynameis"},r.a.createElement(o.a,{headerText:"Sarah German"}))),r.a.createElement("section",{className:"jobs"},r.a.createElement("article",null,r.a.createElement("h2",null,"Experience"),r.a.createElement(c,null)),r.a.createElement("aside",null,r.a.createElement("h2",null,"Proficiencies"),r.a.createElement(u,null),r.a.createElement("section",{id:"edu"},r.a.createElement("h2",null,"Education"),r.a.createElement("p",null,"University of Denver",r.a.createElement("br",null),"BA, Digital Media Studies")))))))}},Nj4Y:function(e){e.exports=JSON.parse('{"data":{"allResumeJobsJson":{"edges":[{"node":{"company":"Pantheon","daterange":"September 2017 - Present","url":"https://pantheon.io","roles":[{"title":"Platform Reliability Manager","description":"Detect and address patterns of platform behavior that impact stability and uptime. Analyze and report platform health data. Manage on-call rotations and incident response."},{"title":"Support Manager","description":"Mentored a remote team of support engineers. Resolved escalations, developed internal tools, and analyzed data to continuously improve customer experience."},{"title":"Senior Customer Success Engineer","description":"Provided technical guidance to developers working on the Pantheon platform."}]}},{"node":{"company":"Advomatic","daterange":"July 2014 - September 2017","url":"https://advomatic.com","roles":[{"title":"Senior Developer/Tech Lead","description":"Agile website development for non-profits, unions, and universities."}]}},{"node":{"company":"American Public Media | Minnesota Public Radio","daterange":"November 2013 - July 2014","url":"https://publicradio.org","roles":[{"title":"Web Developer","description":"Developed CMS-driven solutions for multimedia content creation and syndication for public radio programs."}]}},{"node":{"company":"Science Museum of Minnesota","daterange":"September 2009 - November 2013","url":"https://smm.org","roles":[{"title":"Multimedia Designer","description":"Designed and developed hands-on exhibits, data visualizations, and interactive digital experiences."}]}}]}}}')},R1Pu:function(e){e.exports=JSON.parse('{"data":{"allResumeProficienciesJson":{"edges":[{"node":{"languages":["Python","JavaScript","SQL","PHP"],"tools":null,"skills":null}},{"node":{"languages":null,"tools":["BigQuery","Docker","Drupal","Git","Google Cloud Platform","GraphQL","Kubernetes","New Relic","Node.js","PostgreSQL","Redis"],"skills":null}},{"node":{"languages":null,"tools":null,"skills":["Agile methodology","Bash scripting","Continuous integration","Data analysis","Data visualization","DevOps","Incident response","Performance auditing","Statistics","Technical documentation"]}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-resume-js-f8ec693c43b0c97789cb.js.map