(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(157),i=a(151),o=a(154),m=a(155);t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.Helmet,null,n.a.createElement("title",null,"Sarah German | about this site")),n.a.createElement("div",null,n.a.createElement("div",{id:"container",className:"dark-wrap"},n.a.createElement(o.a,{headerText:"Sarah German"}),n.a.createElement("h2",null,n.a.createElement("i",{className:"e1a-floppy_disk"})," about this site"),n.a.createElement("p",null,"I built this static site using ",n.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"GatsbyJS"),". It's hosted on ",n.a.createElement("a",{href:"https://pages.github.com/"},"GitHub Pages"),", and I use ",n.a.createElement("a",{href:"https://www.cloudflare.com/"},"Cloudflare")," for DNS, HTTPS and as a CDN."),n.a.createElement("p",null,"The ",n.a.createElement(i.a,{to:"/resume/"},"resume page")," pulls from a few JSON files using GraphQL."),n.a.createElement("p",null,n.a.createElement("a",{href:"https://github.com/sarahg/sarahg.github.io"},"Browse source on GitHub")),n.a.createElement("p",null,n.a.createElement("em",null,"(I know this is super-overkill for a three page site, but I had fun learning how to make it work. Thanks to the GatsbyJS team for sharing this very cool framework.)"))),n.a.createElement(m.a,null)))}},151:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),n=a.n(r),l=a(4),i=a.n(l),o=a(33),m=a.n(o);a.d(t,"a",function(){return m.a});a(152);var s=n.a.createContext({}),u=function(e){return n.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){var r;e.exports=(r=a(153))&&r.default||r},153:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),l=a(4),i=a.n(l),o=a(55),m=a(2),s=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(151);t.a=function(e){return n.a.createElement("h1",null,n.a.createElement(l.a,{to:"/"},e.headerText))}},155:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(156),i=a.n(l);t.a=function(){return n.a.createElement("div",null,n.a.createElement("div",{id:"stripe"}),n.a.createElement("div",{id:"footer"},n.a.createElement("img",{src:i.a,alt:"Drupal Association logo",title:"Drupal Association member"}),n.a.createElement("ul",{id:"social"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.drupal.org/user/562544"},"Drupal")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/sarahg"},"GitHub")),n.a.createElement("li",null,n.a.createElement("a",{href:"http://instagram.com/heygermano"},"Instagram")),n.a.createElement("li",null,n.a.createElement("a",{href:"http://www.last.fm/user/hey_germano"},"Last.fm")),n.a.createElement("li",null,n.a.createElement("a",{href:"http://www.linkedin.com/in/sarahgerman"},"LinkedIn")),n.a.createElement("li",null,n.a.createElement("a",{href:"http://twitter.com/hey_germano"},"Twitter")))))}},156:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-about-this-site-js-171840409bbe2768e556.js.map