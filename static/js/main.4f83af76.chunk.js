(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(6),r=t.n(o),c=(t(16),t(3));t(18);function i(e){return n.a.createElement("div",{className:"container my-3 rounded",style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"light"===e.mode?"black":"white"}},n.a.createElement("h1",null,"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne",style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"light"===e.mode?"black":"white"}},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"light"===e.mode?"black":"white"}},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"light"===e.mode?"black":"white"}},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"light"===e.mode?"black":"white"}},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"light"===e.mode?"black":"white"}},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"light"===e.mode?"black":"white"}},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))))}var s=t(4);function d(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," sticky-top")},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/text"},"Text")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/about"},e.about))),n.a.createElement("div",{className:"form-check form-switch m-3 ms-0 text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleBtn}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark/Light")),n.a.createElement("form",{className:"d-flex",role:"search"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")))))}function m(e){var a=Object(l.useState)(""),t=Object(c.a)(a,2),o=t[0],r=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("h1",null,e.heading),n.a.createElement("textarea",{className:"form-control mt-3",value:o,placeholder:"Type here ...",onChange:function(e){var a=document.getElementById("textBox");r(a.value)},id:"textBox",rows:"3",style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"light"===e.mode?"black":"white"}}),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary my-3",onClick:function(){var e=o.split(/\s+/);r(e.join(" ").trim())}},"Remove Extra Spaces"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary m-3",onClick:function(){var e=o.split(/\s+/),a="";e.forEach(function(e){a+=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()+" "}),a=a.trimEnd(),r(a)}},"First Letter Capital"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary my-3",onClick:function(){var e=document.getElementById("textBox");r(e.value.toUpperCase())}},"Convert to Uppercase"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary m-3",onClick:function(){var a=document.getElementById("textBox");a.value.length>=1?(a.select(),navigator.clipboard.writeText(a.value),e.showAlert("your text is copied.","success")):e.showAlert("Nothing to copy, please type first...","danger")}},"Copy Text"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary my-3",onClick:function(){r("")}},"Clear Text"),n.a.createElement("h2",null,"Your text summary"),n.a.createElement("p",{id:"counting"},o.trim().split(/\s+/).filter(function(e){return 0!==e.length}).length," words, ",o.length," characters and ",o.trim().split(/\n+/).filter(function(e){return 0!==e.length}).length," paragraphs"),n.a.createElement("h3",null,"Preview Text:"),n.a.createElement("p",null,o.trim().length>0?o:"Nothing to preview")))}function h(e){var a=function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()};return n.a.createElement("div",{style:{height:"50px",padding:"5px"}},e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,a("alert")),": ",a(e.alert.msg)))}d.defaultProps={title:"Set title here",about:"Set about text here"};var u=t(0);var b=function(){var e=Object(l.useState)("light"),a=Object(c.a)(e,2),t=a[0],o=a[1],r=Object(l.useState)(null),b=Object(c.a)(r,2),g=b[0],p=b[1],E=function(e,a){p({msg:e,type:a}),setTimeout(function(){p(null)},2e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null,n.a.createElement(d,{title:"FirstApp",about:"About",mode:t,toggleBtn:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="gray",E("dark mode is enabled.","light")):(o("light"),document.body.style.backgroundColor="white",E("light mode is enabled.","dark"))}}),n.a.createElement(h,{alert:g}),n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/text",element:n.a.createElement(n.a.Fragment,null,n.a.createElement(m,{heading:"Convert your text to UPPERCASE",mode:t,showAlert:E}))})),n.a.createElement(u.c,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{path:"/about",element:n.a.createElement(i,{mode:t})})))))},g=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,21)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),l(e),n(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null))),g()},7:function(e,a,t){e.exports=t(20)}},[[7,3,2]]]);
//# sourceMappingURL=main.4f83af76.chunk.js.map