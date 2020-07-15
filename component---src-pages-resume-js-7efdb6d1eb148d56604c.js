(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{150:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),i=a(157),o=a(154),l=a(166),s=a(151);var c=function(){return r.a.createElement(s.b,{query:"4113164175",render:function(e){return function(e){var n=[];return e.allResumeJobsJson.edges.forEach(function(e){n.push(r.a.createElement("div",{className:"company",key:e.node.company},r.a.createElement("span",{className:"job-daterange"},e.node.daterange),r.a.createElement("h3",null,r.a.createElement("a",{href:e.node.url},e.node.company)),function(e){var n=[];return e.node.roles.forEach(function(e){n.push(r.a.createElement("div",{className:"jorb",key:e.title},r.a.createElement("h4",null,e.title),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.description}})))}),n}(e)))}),n}(e)},data:l})},u=a(167);var d=function(){return r.a.createElement(s.b,{query:"2307060274",render:function(e){return function(e){var n=[];return e.allResumeProficienciesJson.edges.forEach(function(e){if(e.node.languages){var a=[];a.push(r.a.createElement("dt",{key:"section-1"},"Languages")),e.node.languages.forEach(function(e){a.push(r.a.createElement("dd",{key:e},e))}),n.push(r.a.createElement("dl",{key:"lang-wrap"},a))}if(e.node.skills){var t=[];t.push(r.a.createElement("dt",{key:"section-2"},"Skills")),e.node.skills.forEach(function(e){t.push(r.a.createElement("dd",{key:e},e))}),n.push(r.a.createElement("dl",{key:"skill-wrap"},t))}if(e.node.tools){var i=[];i.push(r.a.createElement("dt",{key:"section-3"},"Tools")),e.node.tools.forEach(function(e){i.push(r.a.createElement("dd",{key:e},e))}),n.push(r.a.createElement("dl",{key:"tool-wrap"},i))}}),n}(e)},data:u})};function m(){window.print()}n.default=function(){return a(148),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Helmet,null,r.a.createElement("title",null,"Sarah German | Resume")),r.a.createElement("div",{id:"resume-wrapper"},r.a.createElement("div",{id:"resume"},r.a.createElement("header",null,r.a.createElement("div",{id:"mynameis"},r.a.createElement(o.a,{headerText:"Sarah German"}))),r.a.createElement("section",{className:"jobs"},r.a.createElement("article",null,r.a.createElement("h2",null,"Experience"),r.a.createElement(c,null)),r.a.createElement("aside",null,r.a.createElement("h2",null,"Proficiencies"),r.a.createElement(d,null),r.a.createElement("section",{id:"edu"},r.a.createElement("h2",null,"Education"),r.a.createElement("p",null,"University of Denver",r.a.createElement("br",null),"BA, Digital Media Studies",r.a.createElement("br",null),"2003 - 2007"))))),r.a.createElement("div",{id:"print",onClick:m},"Print this Page")))}},151:function(e,n,a){"use strict";a.d(n,"b",function(){return u});var t=a(0),r=a.n(t),i=a(4),o=a.n(i),l=a(33),s=a.n(l);a.d(n,"a",function(){return s.a});a(152);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,n,a){var t;e.exports=(t=a(153))&&t.default||t},153:function(e,n,a){"use strict";a.r(n);a(34);var t=a(0),r=a.n(t),i=a(4),o=a.n(i),l=a(55),s=a(2),c=function(e){var n=e.location,a=s.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(l.a,Object.assign({location:n,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=c},154:function(e,n,a){"use strict";var t=a(0),r=a.n(t),i=a(151);n.a=function(e){return r.a.createElement("h1",null,r.a.createElement(i.a,{to:"/"},e.headerText))}},166:function(e){e.exports={data:{allResumeJobsJson:{edges:[{node:{company:"Pantheon",daterange:"September 2017 - Present",url:"https://pantheon.io",roles:[{title:"Support Manager",description:"Manage a team of support engineers and handle technical escalations. Work with Product and Engineering teams to support new features and triage bugs."},{title:"Senior Customer Success Engineer",description:"Provided technical guidance to customers. Included reviewing log files, New Relic data, codebase structure/contents and identifying potential points of failure, as well as areas of improvement."}]}},{node:{company:"Advomatic",daterange:"July 2014 - September 2017",url:"https://advomatic.com",roles:[{title:"Senior Developer",description:"Agile website development for progressive advocacy organizations. Spec writing, custom module development and advanced site building using modern build tools."}]}},{node:{company:"American Public Media | Minnesota Public Radio",daterange:"November 2013 - July 2014",url:"https://publicradio.org",roles:[{title:"Web Developer",description:"Architected CMS-driven solutions for multimedia content creation and syndication. Continuously improved Drupal website performance."}]}},{node:{company:"Science Museum of Minnesota",daterange:"September 2009 - November 2013",url:"https://smm.org",roles:[{title:"Multimedia Designer",description:"Designed and developed hands-on exhibits, data visualizations, and web experiences using Drupal and related web technologies."}]}},{node:{company:"August Ash",daterange:"June 2008 - September 2009",url:"https://augustash.com",roles:[{title:"Client Services Manager/Developer",description:"Managed ongoing website needs of 250+ clients, working with a variety of PHP frameworks and eCommerce platforms."}]}}]}}}},167:function(e){e.exports={data:{allResumeProficienciesJson:{edges:[{node:{languages:["PHP/MySQL","JavaScript","Python"],tools:null,skills:null}},{node:{languages:null,tools:["Drupal 6/7/8","Gatsby/GraphQL","WordPress","Git","Varnish/VCL","Redis","Apache Solr","New Relic","Docker"],skills:null}},{node:{languages:null,tools:null,skills:["Accessible design","Agile methodology","Bash scripting","Data migration","Data visualization","Performance auditing","Technical documentation","UNIX command line","User experience","Web accessibility","Wireframing"]}}]}}}}}]);
//# sourceMappingURL=component---src-pages-resume-js-7efdb6d1eb148d56604c.js.map