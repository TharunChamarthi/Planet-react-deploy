(this.webpackJsonpplanets=this.webpackJsonpplanets||[]).push([[0],{28:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(18),s=n.n(i),o=n(21),u=n(8),l=n.n(u),j=n(19),d=n(9),b=(n(28),n(20)),f=n.n(b).a.create({baseURL:"https://assignment-machstatz.herokuapp.com"}),p=n(3);n(49);var h=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(0),s=Object(d.a)(i,2),u=s[0],b=s[1],h=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("planet");case 3:t=e.sent,r(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),O=function(e){var t=Object(o.a)(n),c=t.find((function(t){return t.id===e}));c.isFavourite=!c.isFavourite,r(t)};return Object(a.useEffect)((function(){h()}),[]),Object(c.jsxs)(p.d,{selectedIndex:u,onSelect:function(e){return b(e)},children:[Object(c.jsxs)(p.b,{children:[Object(c.jsx)(p.a,{children:"Planets"}),Object(c.jsx)(p.a,{children:"Favorite planets"})]}),Object(c.jsx)(p.c,{children:Object(c.jsx)("ul",{children:n.map((function(e){return Object(c.jsxs)("li",{children:[Object(c.jsx)("p",{children:e.name})," ",Object(c.jsx)("span",{onClick:function(){return O(e.id)},className:"material-icons ".concat(e.isFavourite?"fav":"not-fav"),children:"favorite"})]},e.id)}))})}),Object(c.jsx)(p.c,{children:Object(c.jsx)("ul",{children:n.filter((function(e){return e.isFavourite})).map((function(e){return Object(c.jsxs)("li",{children:[Object(c.jsx)("p",{children:e.name})," ",Object(c.jsx)("span",{onClick:function(){return O(e.id)},className:"material-icons ".concat(e.isFavourite?"fav":"not-fav"),children:"favorite"})]},e.id)}))})})]})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.390f9f11.chunk.js.map