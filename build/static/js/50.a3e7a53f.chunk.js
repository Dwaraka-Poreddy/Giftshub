(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[50],{105:function(e,a,t){},135:function(e,a,t){e.exports=t.p+"static/media/navbar-logo.2c061749.svg"},163:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(98),n=t(1),l=t.n(n);t(105),t(106);function c(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),c=a[0],s=a[1];Object(n.useEffect)(()=>{window.addEventListener("scroll",i)},[]);var i=()=>{window.scrollY>=100?s(!0):s(!1)};return l.a.createElement("div",null,l.a.createElement("nav",{class:c?"navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink":"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},l.a.createElement("div",{class:"container"},l.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"/"},l.a.createElement("img",{src:t(135),alt:""})),l.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",l.a.createElement("i",{class:"fas fa-bars ml-1"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{class:"navbar-nav text-uppercase ml-auto"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"/aboutus"},"ABOUT")))))))}},259:function(e,a,t){"use strict";var r=t(1),n=t.n(r);t(260);a.a=function({fbimg:e,head1:a,para:t,head2:r}){return n.a.createElement("div",{style:{flex:"0.8",alignItems:"center"}},n.a.createElement("div",{class:"container"},n.a.createElement("center",null,n.a.createElement("h1",{className:"specialcardHoverText"},"Hover the card below !!!")),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col p-0"},n.a.createElement("div",{style:{backgroundImage:"url("+e+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",margin:"auto",overflow:"hidden"},class:"specialcard"},n.a.createElement("div",{class:"img"}," ",n.a.createElement("span",{style:{backgroundImage:"url("+e+")"}}),n.a.createElement("span",{style:{backgroundImage:"url("+e+")"}}),n.a.createElement("span",{style:{backgroundImage:"url("+e+")"}}),n.a.createElement("span",{style:{backgroundImage:"url("+e+")"}}),n.a.createElement("span",{style:{backgroundImage:"url("+e+")"}}),n.a.createElement("span",{style:{backgroundImage:"url("+e+")"}})),n.a.createElement("div",{class:"specialcontent"},n.a.createElement("h2",{className:"specialcardHead1"},a),n.a.createElement("h2",{className:"specialcardHead2"},r),n.a.createElement("h4",{className:"specialcardPara"},t)))))))}},260:function(e,a,t){},923:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var r=t(24),n=t.n(r),l=t(32),c=t(98),s=t(1),i=t.n(s),o=t(259),d=t(163),u=t(31),m=t(45),v=t.n(m);function b({match:e}){var a=Object(s.useState)(""),t=Object(c.a)(a,2),r=t[0],m=t[1],b=Object(s.useState)(""),g=Object(c.a)(b,2),p=g[0],E=g[1],f=Object(s.useState)(""),h=Object(c.a)(f,2),k=h[0],j=h[1],y=Object(s.useState)(""),O=Object(c.a)(y,2),x=O[0],w=O[1],I=Object(s.useState)(!1),S=Object(c.a)(I,2),N=S[0],H=S[1];return Object(s.useEffect)(Object(l.a)(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return H(!0),a.next=3,u.b.database().ref("/SpecialCard/"+e.params.slug).once("value").then(e=>{var a=e.val().url;m(a);var t=e.val().head1;E(t);var r=e.val().head2;j(r);var n=e.val().para;w(n)});case 3:a.sent,H(!1);case 5:case"end":return a.stop()}}),a)}))),[]),i.a.createElement("div",{style:{backgroundColor:"#70cff3",height:"100vh"}},i.a.createElement(d.a,null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{style:{backgroundColor:"#70cff3"}},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{flex:"0.15"}}),i.a.createElement("div",{className:"mb-3",style:{flex:"0.7"}},N?i.a.createElement(v.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):i.a.createElement(o.a,{fbimg:r,head2:k,head1:p,para:x})),i.a.createElement("div",{style:{flex:"0.15"}}))))}}}]);
//# sourceMappingURL=50.a3e7a53f.chunk.js.map