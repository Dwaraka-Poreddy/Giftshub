(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[60],{1018:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var r=t(23),n=t.n(r),c=t(31),l=t(89),i=t(2),s=t.n(i),o=t(273),b=t(39),d=t.n(b),v=t(30),m=t(158);function u({match:e}){var a=Object(i.useState)(""),t=Object(l.a)(a,2),r=t[0],b=t[1],u=Object(i.useState)(""),g=Object(l.a)(u,2),E=g[0],p=g[1],f=Object(i.useState)(""),h=Object(l.a)(f,2),k=h[0],x=h[1],j=Object(i.useState)(""),w=Object(l.a)(j,2),y=w[0],O=w[1],R=Object(i.useState)(""),S=Object(l.a)(R,2),I=S[0],z=S[1],P=Object(i.useState)(""),B=Object(l.a)(P,2),C=B[0],F=B[1],M=Object(i.useState)(!1),T=Object(l.a)(M,2),J=T[0],A=T[1];return Object(i.useEffect)(Object(c.a)(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return A(!0),a.next=3,v.b.database().ref("/Cubes/"+e.params.slug).once("value").then(e=>{var a=e.val().url1;b(a);var t=e.val().url2;p(t);var r=e.val().url3;x(r);var n=e.val().url4;O(n);var c=e.val().url5;z(c);var l=e.val().url6;F(l)});case 3:a.sent,A(!1);case 5:case"end":return a.stop()}}),a)}))),[]),s.a.createElement("div",{style:{backgroundColor:"#70cff3",height:"100vh"}},s.a.createElement(m.a,null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement("div",{style:{flex:"0.15"}}),s.a.createElement("div",null,J?s.a.createElement(d.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(o.a,{fbimg1:r,fbimg2:E,fbimg3:k,fbimg4:y,fbimg5:I,fbimg6:C}))),s.a.createElement("div",{style:{flex:"0.15"}}))))}},158:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(89),n=t(2),c=t.n(n);t(98),t(99);function l(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),l=a[0],i=a[1];Object(n.useEffect)(()=>{window.addEventListener("scroll",s)},[]);var s=()=>{window.scrollY>=100?i(!0):i(!1)};return c.a.createElement("div",null,c.a.createElement("nav",{class:l?"navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink":"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},c.a.createElement("div",{class:"container"},c.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"/"},c.a.createElement("img",{src:t(97),alt:""})),c.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",c.a.createElement("i",{class:"fas fa-bars ml-1"})),c.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},c.a.createElement("ul",{class:"navbar-nav text-uppercase ml-auto"},c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"/aboutus"},"ABOUT")))))))}},273:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(2),n=t.n(r);t(274);function c({fbimg1:e,fbimg2:a,fbimg3:t,fbimg4:r,fbimg5:c,fbimg6:l,t1:i,t2:s,t3:o,t4:b,t5:d,t6:v}){function m(e,a){return 90*(Math.floor(Math.random()*(e-a))+a)}return n.a.createElement("div",{id:"threeDcubemaindiv"},n.a.createElement("section",{class:"cubecontainer"},n.a.createElement("div",{onClick:()=>{document.getElementById("cube"),m(24,1),m(24,1)},id:"cube"},n.a.createElement("div",{class:"heart3d"},n.a.createElement("div",{class:"boom"},n.a.createElement("div",{style:{opacity:"0.85",backgroundImage:"url("+e+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",height:"175px",width:"175px",borderRadius:"10px"},class:"front bob"},i),n.a.createElement("div",{style:{opacity:"0.85",backgroundImage:"url("+a+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",height:"175px",width:"175px",borderRadius:"10px"},class:"back bob"},s),n.a.createElement("div",{style:{opacity:"0.85",backgroundImage:"url("+t+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",height:"175px",width:"175px",borderRadius:"10px"},class:"right bob"},o),n.a.createElement("div",{style:{opacity:"0.85",backgroundImage:"url("+r+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",height:"175px",width:"175px",borderRadius:"10px"},class:"left  bob"},b),n.a.createElement("div",{style:{opacity:"0.85",backgroundImage:"url("+l+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",height:"175px",width:"175px",borderRadius:"10px"},class:"top bob"},v),n.a.createElement("div",{style:{opacity:"0.85",backgroundImage:"url("+c+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",height:"175px",width:"175px",borderRadius:"10px"},class:"bottom bob"},d)),n.a.createElement("div",{class:"rib1"}),n.a.createElement("div",{class:"rib2"}),n.a.createElement("div",{class:"rib3"}),n.a.createElement("div",{class:"rib4"}),n.a.createElement("div",{class:"rib5"}),n.a.createElement("div",{class:"rib6"}),n.a.createElement("div",{class:"rib7"}),n.a.createElement("div",{class:"rib8"}),n.a.createElement("div",{class:"rib9"}),n.a.createElement("div",{class:"rib10"}),n.a.createElement("div",{class:"rib11"}),n.a.createElement("div",{class:"rib12"}),n.a.createElement("div",{class:"rib13"}),n.a.createElement("div",{class:"rib14"}),n.a.createElement("div",{class:"rib15"}),n.a.createElement("div",{class:"rib16"}),n.a.createElement("div",{class:"rib17"}),n.a.createElement("div",{class:"rib18"}),n.a.createElement("div",{class:"rib19"}),n.a.createElement("div",{class:"rib20"}),n.a.createElement("div",{class:"rib21"}),n.a.createElement("div",{class:"rib22"}),n.a.createElement("div",{class:"rib23"}),n.a.createElement("div",{class:"rib24"}),n.a.createElement("div",{class:"rib25"}),n.a.createElement("div",{class:"rib26"}),n.a.createElement("div",{class:"rib27"}),n.a.createElement("div",{class:"rib28"}),n.a.createElement("div",{class:"rib29"}),n.a.createElement("div",{class:"rib30"}),n.a.createElement("div",{class:"rib31"}),n.a.createElement("div",{class:"rib32"}),n.a.createElement("div",{class:"rib33"}),n.a.createElement("div",{class:"rib34"}),n.a.createElement("div",{class:"rib35"}),n.a.createElement("div",{class:"rib36"})))))}},274:function(e,a,t){},97:function(e,a,t){e.exports=t.p+"static/media/navbar-logo.2c061749.svg"},98:function(e,a,t){}}]);
//# sourceMappingURL=60.82d6192f.chunk.js.map