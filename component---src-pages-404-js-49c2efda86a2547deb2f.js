(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(142),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(144),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},144:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Amin Shah Gilani",description:"Amin Shah Gilani’s personal corner of the internet",image:"https://www.gravatar.com/avatar/e97345f1125996ea6e1a8394fd45da28?s=500",baseUrl:"https://amin.gilani.me"}}}}},146:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(48),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},147:function(e,t,a){},149:function(e,t,a){"use strict";var n=a(145),r=a(0),i=a.n(r),s=a(4),c=a.n(s),o=a(150),l=a.n(o),u=a(143),d=function(e){var t=e.noHeader;e.siteTitle;return t?"":i.a.createElement("nav",{class:"has-background-light navbar",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{class:"navbar-brand"},i.a.createElement("a",{role:"button",class:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{id:"navbarBasicExample",class:"navbar-menu"},i.a.createElement("div",{class:"navbar-end"},i.a.createElement(u.Link,{to:"/",className:"navbar-item"},"Home"),i.a.createElement("a",{class:"navbar-item",target:"_blank",rel:"noopener noreferrer",href:"https://www.toptal.com/resume/amin-shah-gilani#contract-just-respected-software-architects"},"Resume"))))},m=function(){return i.a.createElement("footer",{class:"footer has-background-light"},i.a.createElement("div",{class:"content has-text-centered"},i.a.createElement("p",null,i.a.createElement("span",{class:"icon"},i.a.createElement("i",{class:"fas fa-code"}))," with ",i.a.createElement("span",{class:"icon"},i.a.createElement("i",{class:"fas fa-coffee"}))," by Amin Shah Gilani"),i.a.createElement("p",null,"The content on this website is released under ",i.a.createElement("a",{href:"https://creativecommons.org/share-your-work/public-domain/cc0"},"CC0"),".")))},p=(a(147),a(151),a(152),function(e){var t=e.location,a=e.noHeader,r=e.children;return i.a.createElement(u.StaticQuery,{query:"1254848303",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"author",content:e.site.siteMetadata.author},{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords},{name:"image",content:e.site.siteMetadata.image},{property:"og:title",content:e.site.siteMetadata.title},{property:"og:description",content:e.site.siteMetadata.description},{property:"og:image",content:e.site.siteMetadata.image},{property:"og:type",content:"website"},{property:"og:url",content:""+e.site.siteMetadata.baseUrl+t}],link:[{rel:"canonical",href:e.site.siteMetadata.baseUrl}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{noHeader:a,siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,r),i.a.createElement(m,null))},data:n})});p.propTypes={children:c.a.node.isRequired,location:c.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-49c2efda86a2547deb2f.js.map