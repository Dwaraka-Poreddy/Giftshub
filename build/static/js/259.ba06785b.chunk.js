"use strict";(self.webpackChunknov_12_7_37am_forked=self.webpackChunknov_12_7_37am_forked||[]).push([[259,2178],{2178:function(e,a,l){l.r(a),l.d(a,{default:function(){return n}});var t=l(72791);l(48614);function n(e){var a=e.fbimg1,l=e.fbimg2,n=e.title;return t.createElement("div",{className:"AnimatedApp"},t.createElement("center",{style:{marginTop:"13px"}},t.createElement("div",{style:{backgroundImage:"url("+l+")"},class:"w"},t.createElement("div",{class:"k"},t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"})," ",t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"})," ",t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"})," ",t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"}),t.createElement("span",{style:{backgroundImage:"url("+a+")"},class:"i"})),t.createElement("div",{class:"h"},t.createElement("h1",null,n)))))}},87446:function(e,a,l){l.r(a);var t=l(33032),n=l(23430),s=l(84322),r=l.n(s),c=l(72791),m=l(96343),u=l.n(m),i=l(16789),o=l(2178),g=l(72846),d=l(31733),E=l(41890);a.default=function(e){var a=e.match,l=(0,i.I0)(),s=g.ZP.firestore(),m=(0,c.useState)(""),p=(0,n.Z)(m,2),f=p[0],y=p[1],b=(0,c.useState)(""),k=(0,n.Z)(b,2),I=k[0],h=k[1],v=(0,c.useState)(""),w=(0,n.Z)(v,2),N=w[0],Z=w[1],_=(0,c.useState)(""),D=(0,n.Z)(_,2),S=D[0],x=D[1],T=(0,c.useState)(!1),B=(0,n.Z)(T,2),C=B[0],A=B[1],M=(0,c.useState)([]),G=(0,n.Z)(M,2),P=G[0],F=(G[1],(0,c.useState)()),H=(0,n.Z)(F,2),j=H[0],L=H[1];function O(){return(O=(0,t.Z)(r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.collection("Livelinks").doc(a.params.slug).get();case 2:t=e.sent,n=t.data(),x(n),n.array_data.map((function(e,a){"animatedframe"==e.id&&(L(a),l({type:"ACTIVE_STEP",payload:{day:a+1}})),P[a]=e.url}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,c.useEffect)((function(){!function(){O.apply(this,arguments)}(),console.log(S,"liveData"),console.log(a.params.slug,"slug",a.params.id,"id")}),[]),(0,c.useEffect)((function(){A(!0);g.ZP.database().ref("/AnimatedFrame/"+a.params.id).once("value").then((function(e){var a=e.val().url1;y(a);var l=e.val().url2;h(l);var t=e.val().title;Z(t),A(!1)}))}),[]);var V=function(){(new Date).getFullYear();var e=+new Date(S.Bday_date)-+new Date-198e5-864e5*(P.length-j);console.log(e,"difference");var a={};return e>0&&(a={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),a},Y=(0,c.useState)(V()),q=(0,n.Z)(Y,2),z=q[0],J=q[1];(0,c.useEffect)((function(){setTimeout((function(){J(V())}),1e3)}));var K=[];return Object.keys(z).forEach((function(e){z[e]&&K.push(c.createElement("span",null,z[e]," ",e," "))})),c.createElement("div",null,c.createElement(d.Z,{slug:a.params.slug}),c.createElement("div",{style:{backgroundColor:"#70cff3"},class:"container-fluid pt-2"},c.createElement("div",{class:"row"},c.createElement("div",{class:"col-sm-1 "}),c.createElement("div",{class:"col-sm-10 "},C?c.createElement(u(),{type:"BallTriangle",color:"#fdc674",height:100,width:100}):c.createElement("div",null,new Date(S.Bday_date)-+new Date-198e5-864e5*(P.length-j-1)>0?c.createElement("div",null,c.createElement("h5",{className:"example"}," This Gift opens in "),c.createElement(E.Z,{Bday:+new Date(S.Bday_date)-+new Date-198e5-864e5*(P.length-j-1)})):c.createElement("div",null,c.createElement("center",null," ",P.length-j-1==0?c.createElement("h1",{className:"example"},"The Big day is here !!!"):P.length-j-1==1?c.createElement("h1",{className:"example"},P.length-j-1," day to go !!!"):c.createElement("h1",{className:"example"},P.length-j-1," days to go !!!")),c.createElement(o.default,{fbimg1:f,fbimg2:I,title:N})))),c.createElement("div",{class:"col-sm-1 "}))),c.createElement("footer",null,c.createElement("div",{className:"container"},c.createElement("div",{className:"row"},c.createElement("div",{className:"col-lg-7 col-md-12 col-sm-12"},c.createElement("p",{className:"copyright"},"Copyright \xa9 2020 Gift's Hub Company . Design:"," ",c.createElement("a",{rel:"nofollow",href:"/"},"Gift's Hub"))),c.createElement("div",{className:"col-lg-5 col-md-12 col-sm-12"},c.createElement("ul",{className:"social"},c.createElement("li",null,c.createElement("a",{href:"#"},c.createElement("i",{className:"fa fa-facebook"}))),c.createElement("li",null,c.createElement("a",{href:"#"},c.createElement("i",{className:"fa fa-twitter"}))),c.createElement("li",null,c.createElement("a",{href:"#"},c.createElement("i",{className:"fa fa-linkedin"}))),c.createElement("li",null,c.createElement("a",{href:"#"},c.createElement("i",{className:"fa fa-rss"}))),c.createElement("li",null,c.createElement("a",{href:"#"},c.createElement("i",{className:"fa fa-dribbble"})))))))))}},48614:function(){}}]);
//# sourceMappingURL=259.ba06785b.chunk.js.map