(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[64],{1014:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var r=t(24),n=t.n(r),l=t(32),c=t(93),s=t(1),o=t.n(s),i=t(751),u=t(42),v=t.n(u),b=t(31),m=t(161);function d({match:e}){var a=Object(s.useState)(""),t=Object(c.a)(a,2),r=t[0],u=t[1],d=Object(s.useState)([]),f=Object(c.a)(d,2),g=f[0],p=f[1],E=Object(s.useState)([]),h=Object(c.a)(E,2),j=h[0],O=h[1],w=Object(s.useState)(!0),k=Object(c.a)(w,2),y=k[0],x=k[1];return Object(s.useEffect)(Object(l.a)(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return x(!0),a.next=3,b.b.database().ref("/AboutQuiz/"+e.params.slug).once("value").then(e=>{var a=e.val().url;u(a);var t=e.val().quesArray;p(t);var r=e.val().answersArray;O(r)});case 3:a.sent,x(!1);case 5:case"end":return a.stop()}}),a)}))),[]),o.a.createElement("div",{style:{backgroundColor:"#70cff3",height:"100vh"}},o.a.createElement(m.a,null),o.a.createElement("br",null)," ",o.a.createElement("br",null)," ",o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement("div",{style:{backgroundColor:"#70cff3"}},o.a.createElement("div",null,y?o.a.createElement(v.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):o.a.createElement(o.a.Fragment,null," ",console.log(g,"quesarray"),console.log(j,"answerArray"),o.a.createElement(i.a,{quesArray:g,answersArray:j,fbimg:r})))))}},103:function(e,a,t){e.exports=t.p+"static/media/navbar-logo.2c061749.svg"},104:function(e,a,t){},161:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(93),n=t(1),l=t.n(n);t(104),t(105);function c(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),c=a[0],s=a[1];Object(n.useEffect)(()=>{window.addEventListener("scroll",o)},[]);var o=()=>{window.scrollY>=100?s(!0):s(!1)};return l.a.createElement("div",null,l.a.createElement("nav",{class:c?"navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink":"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},l.a.createElement("div",{class:"container"},l.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"/"},l.a.createElement("img",{src:t(103),alt:""})),l.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",l.a.createElement("i",{class:"fas fa-bars ml-1"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{class:"navbar-nav text-uppercase ml-auto"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"/aboutus"},"ABOUT")))))))}}}]);
//# sourceMappingURL=64.82355d4c.chunk.js.map