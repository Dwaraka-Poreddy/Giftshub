(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[72],{1013:function(e,a,t){"use strict";t.r(a);var n=t(23),r=t.n(n),l=t(31),c=t(89),s=t(2),i=t.n(s),o=t(296),u=t(297),b=t(30),m=t(33),v=(t(874),t(39)),d=t.n(v),f=t(158);a.default=function({match:e}){var a=Object(s.useState)(""),t=Object(c.a)(a,2),n=t[0],v=t[1],p=Object(s.useState)(!0),E=Object(c.a)(p,2),g=E[0],j=E[1],h=Object(s.useState)(),O=Object(c.a)(h,2),x=O[0],y=O[1],k=Object(s.useState)(0),w=Object(c.a)(k,2),S=(w[0],w[1]);return Object(s.useEffect)(Object(l.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return j(!0),a.next=3,b.b.database().ref("/SlidePuzzle/"+e.params.slug).once("value").then(e=>{var a=e.val().url;v(a);var t=e.val().best_score;y(t)});case 3:a.sent,j(!1);case 5:case"end":return a.stop()}}),a)}))),[]),i.a.createElement("div",{style:{backgroundColor:"#ffffff"}},i.a.createElement(f.a,null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{class:"container-fluid pt-3"},g?i.a.createElement(d.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):i.a.createElement("center",null,1e5!=x&&i.a.createElement("center",null,i.a.createElement("h2",null,"Best Score: ",x)),i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-lg-6 mb-xs-0 mb-sm-5 mt-5"}," ",i.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"auto"}},i.a.createElement(o.a,{handlepuzzlescore:a=>{if(S(a),a<x){var t=b.b.database().ref("SlidePuzzle").child(e.params.slug),r={url:n,best_score:a};t.update(r);y(a),m.b.success("You bet your previous best score, Keep playing!")}},fbimg:n}))),i.a.createElement("div",{class:"col-lg-6 mb-5 mb-xl-3 mt-0 mt-sm-3 mt-md-0",style:{display:"flex",alignItems:"center",justifyContent:"center"}}," ",i.a.createElement("div",null,i.a.createElement(u.a,{fbimg:n})))))))}},158:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(89),r=t(2),l=t.n(r);t(98),t(99);function c(){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),c=a[0],s=a[1];Object(r.useEffect)(()=>{window.addEventListener("scroll",i)},[]);var i=()=>{window.scrollY>=100?s(!0):s(!1)};return l.a.createElement("div",null,l.a.createElement("nav",{class:c?"navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink":"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},l.a.createElement("div",{class:"container"},l.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"/"},l.a.createElement("img",{src:t(97),alt:""})),l.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",l.a.createElement("i",{class:"fas fa-bars ml-1"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{class:"navbar-nav text-uppercase ml-auto"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"/aboutus"},"ABOUT")))))))}},874:function(e,a,t){}}]);
//# sourceMappingURL=72.fbb3316a.chunk.js.map