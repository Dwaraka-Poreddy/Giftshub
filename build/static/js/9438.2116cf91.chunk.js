"use strict";(self.webpackChunknov_12_7_37am_forked=self.webpackChunknov_12_7_37am_forked||[]).push([[9438],{11367:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(33032),r=a(23430),l=a(84322),c=a.n(l),s=a(72791),u=a(83335),o=a(16789),i=a(96343),m=a.n(i),d=a(72846),f=a(41890),h=a(31733);function p(e){var t=e.match,a=d.ZP.firestore(),l=(0,o.I0)(),i=(0,s.useState)(),p=(0,r.Z)(i,2),g=p[0],v=p[1],E=(0,s.useState)(""),y=(0,r.Z)(E,2),w=y[0],Z=y[1],_=(0,s.useState)(""),b=(0,r.Z)(_,2),k=(b[0],b[1]),S=(0,s.useState)(""),x=(0,r.Z)(S,2),B=x[0],D=x[1],N=(0,s.useState)(!1),T=(0,r.Z)(N,2),F=T[0],C=T[1],M=(0,s.useState)([]),P=(0,r.Z)(M,2),j=P[0],I=(P[1],(0,s.useState)("")),A=(0,r.Z)(I,2),G=(A[0],A[1]);function L(){return O.apply(this,arguments)}function O(){return(O=(0,n.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,a.collection("Livelinks").doc(t.params.slug).get();case 3:n=e.sent,r=n.data(),D(r),r.array_data.map((function(e,t){"calendar"==e.id&&(v(t),l({type:"ACTIVE_STEP",payload:{day:t+1}})),j[t]=e.url}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,s.useEffect)((0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:C(!1);case 3:case"end":return e.stop()}}),e)}))),[]),(0,s.useEffect)((function(){C(!0);d.ZP.database().ref("/Calendar/"+t.params.id).once("value").then((function(e){var t=e.val().url;Z(t);var a=e.val().name;k(a);var n=e.val().handscol;G(n),C(!1)}))}),[]);var V=function(){(new Date).getFullYear();var e=+new Date(B.Bday_date)-+new Date-198e5-864e5*(j.length-g);console.log(e,"difference");var t={};return e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},Y=(0,s.useState)(V()),q=(0,r.Z)(Y,2),z=q[0],H=q[1];(0,s.useEffect)((function(){setTimeout((function(){H(V())}),1e3)}));var J=[];return Object.keys(z).forEach((function(e){z[e]&&J.push(s.createElement("span",null,z[e]," ",e," "))})),s.createElement("div",{style:{background:"url(https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fegg_shell.jpg?alt=media&token=c32757c0-9119-4740-beb5-ea90c327aec9)"}},s.createElement(h.Z,{slug:t.params.slug}),s.createElement("br",null),s.createElement("br",null),s.createElement("br",null),s.createElement("div",null,F?s.createElement(m(),{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):s.createElement("div",null,new Date(B.Bday_date)-+new Date-198e5-864e5*(j.length-g-1)>0?s.createElement("div",null,s.createElement("h5",{className:"example"}," This Gift opens in "),s.createElement(f.Z,{Bday:+new Date(B.Bday_date)-+new Date-198e5-864e5*(j.length-g-1)})):s.createElement("div",null,s.createElement("center",null," ",j.length-g-1==0?s.createElement("h1",{className:"example"},"The Big day is here !!!"):j.length-g-1==1?s.createElement("h1",{className:"example"},j.length-g-1," day to go !!!"):s.createElement("h1",{className:"example"},j.length-g-1," days to go !!!")),s.createElement("div",{className:"row"},s.createElement("div",{className:"col-12"},s.createElement(u.Z,{fbimg:w})))))))}}}]);
//# sourceMappingURL=9438.2116cf91.chunk.js.map