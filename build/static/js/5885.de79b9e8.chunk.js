"use strict";(self.webpackChunknov_12_7_37am_forked=self.webpackChunknov_12_7_37am_forked||[]).push([[5885],{8762:function(e,t,a){a.d(t,{Z:function(){return n}});var c=a(23430),l=a(72791),r=a(70629);function n(e){var t=e.fbimg,a=e.message,n=e.occassion,s=e.totext,i=e.fromtext,m=(e.location,(0,l.useState)("gc_carrd ")),d=(0,c.Z)(m,2),o=d[0],g=d[1],E=function e(){setTimeout((function(){g("gc_carrd open"),setTimeout((function(){g("gc_carrd"),e()}),15e3)}),3e3)};return(0,l.useEffect)((function(){E()})),l.createElement("div",{className:"opengreetingcardmaindiv"},l.createElement("div",{className:"gc_mainCard"},l.createElement("section",{class:"gc_containerr"},l.createElement("div",{className:o,id:"theCard"},l.createElement("div",{class:"gc_page gc_back"},l.createElement("div",{class:"side gc_back"},"Jobbies"),l.createElement("div",{class:"side gc_front"},l.createElement("div",{class:"gc_hearts"},l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"})),l.createElement("div",{style:{overflow:"hidden"}},l.createElement("p",null,a),l.createElement("p",null," ",n)))),l.createElement("div",{class:"gc_page gc_front"},l.createElement("div",{style:{backgroundImage:"url("+t+")",opacity:"0.9",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",boxShadow:"0px 0px 0px 15px #dfccaf inset"},class:"side gc_back red"},l.createElement("div",{class:"gc_hearts"}," ",l.createElement(r.I3,null,l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"})," "),l.createElement(r.Du,null,l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"}),l.createElement("div",{class:"gc_heart"})," "))," "),l.createElement("div",{style:{overflow:"hidden"},class:"side gc_front"},l.createElement("div",null,l.createElement("p",null,"To ",l.createElement("br",null)," ",l.createElement("span",{class:"red"}," ",s)),l.createElement("p",null,"From ",l.createElement("br",null)," ",l.createElement("span",{class:"blue"},i)))))))))}},54461:function(e,t,a){a.r(t);var c=a(33032),l=a(23430),r=a(84322),n=a.n(r),s=a(72791),i=a(16789),m=a(8762),d=a(72846),o=a(96343),g=a.n(o),E=a(41890),v=a(31733);t.default=function(e){var t=e.match,a=(0,i.I0)(),r=(0,s.useState)(""),o=(0,l.Z)(r,2),u=o[0],h=o[1],_=(0,s.useState)(""),f=(0,l.Z)(_,2),p=f[0],y=f[1],b=(0,s.useState)(""),x=(0,l.Z)(b,2),Z=x[0],w=x[1],k=(0,s.useState)(""),S=(0,l.Z)(k,2),D=S[0],T=S[1],B=(0,s.useState)(""),N=(0,l.Z)(B,2),C=N[0],F=N[1],I=d.ZP.firestore(),M=(0,s.useState)(""),P=(0,l.Z)(M,2),G=P[0],O=P[1],j=(0,s.useState)(!1),z=(0,l.Z)(j,2),A=z[0],J=z[1],L=(0,s.useState)([]),R=(0,l.Z)(L,2),V=R[0],Y=(R[1],(0,s.useState)()),q=(0,l.Z)(Y,2),H=q[0],K=q[1];function Q(){return(Q=(0,c.Z)(n().mark((function e(){var c,l;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.collection("Livelinks").doc(t.params.slug).get();case 2:c=e.sent,l=c.data(),O(l),l.array_data.map((function(e,t){"greetingcard"==e.id&&(K(t),a({type:"ACTIVE_STEP",payload:{day:t+1}})),V[t]=e.url}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,s.useEffect)((function(){!function(){Q.apply(this,arguments)}(),console.log(G,"liveData"),console.log(t.params.slug,"slug",t.params.id,"id")}),[]),(0,s.useEffect)((function(){J(!0);d.ZP.database().ref("/OpenGreetingCard/"+t.params.id).once("value").then((function(e){var t=e.val().url;h(t);var a=e.val().message;y(a);var c=e.val().occassion;w(c);var l=e.val().totext;T(l);var r=e.val().fromtext;F(r)}));J(!1)}),[]);var U=function(){(new Date).getFullYear();var e=+new Date(G.Bday_date)-+new Date-198e5-864e5*(V.length-H);console.log(e,"difference");var t={};return e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},W=(0,s.useState)(U()),X=(0,l.Z)(W,2),$=X[0],ee=X[1];(0,s.useEffect)((function(){setTimeout((function(){ee(U())}),1e3)}));var te=[];return Object.keys($).forEach((function(e){$[e]&&te.push(s.createElement("span",null,$[e]," ",e," "))})),s.createElement("div",null,s.createElement(v.Z,{slug:t.params.slug}),s.createElement("br",null),s.createElement("br",null),s.createElement("br",null),s.createElement("div",{style:{display:"flex"}},s.createElement("div",{style:{flex:"1"}},A?s.createElement(g(),{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):s.createElement("div",null,new Date(G.Bday_date)-+new Date-198e5-864e5*(V.length-H-1)>0?s.createElement("div",null,s.createElement("h5",{className:"example"}," This Gift opens in "),s.createElement(E.Z,{Bday:+new Date(G.Bday_date)-+new Date-198e5-864e5*(V.length-H-1)})):s.createElement("div",null,s.createElement("center",null," ",V.length-H-1==0?s.createElement("h1",{className:"example"},"The Big day is here !!!"):V.length-H-1==1?s.createElement("h1",{className:"example"},V.length-H-1," day to go !!!"):s.createElement("h1",{className:"example"},V.length-H-1," days to go !!!")),s.createElement(m.Z,{fbimg:u,message:p,occassion:Z,totext:D,fromtext:C}))))))}}}]);
//# sourceMappingURL=5885.de79b9e8.chunk.js.map