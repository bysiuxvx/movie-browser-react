(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(6),a=n.n(r),s=(n(11),n(2)),o=n.n(s),l=n(3),u=n(4),d=n(0),j={height:50,width:"35vw",outline:"none",margin:"50px 0",fontSize:23,textAlign:"center"},h=function(e){var t=e.input,n=e.newSearch;return Object(d.jsx)("div",{children:Object(d.jsx)("input",{style:j,type:"text",value:t,onChange:function(e){return n(e.target.value)}})})},b={container:{height:350,width:"auto",margin:"20px 20px 0 20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"2px solid black"},img:{height:"auto",maxWidth:180}},p=function(e){var t=e.movie,n=e.getModalDetails,c=function(){var e=Object(l.a)(o.a.mark((function e(){var c,i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="https://www.omdbapi.com/?i=".concat(t.imdbID,"&apikey=b46dc190"),e.next=4,fetch(c);case 4:return i=e.sent,e.next=7,i.json();case 7:r=e.sent,console.log(r),r&&n(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{style:b.container,className:"movie-element",onClick:function(){return c(t.imdbID)},children:[Object(d.jsx)("img",{style:b.img,src:t.Poster}),Object(d.jsx)("h5",{children:t.Title})]},t.Title)},x={modalInactive:{height:"80vh",width:"75vw",display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center",aligntItems:"center"},modalActive:{display:"none"}},m=function(e){var t=e.movies,n=(e.modalDetails,e.getModalDetails);return Object(d.jsx)("div",{className:"list-container",style:x.modalInactive,children:t&&t.map((function(e){return Object(d.jsx)(p,{movie:e,getModalDetails:n})}))})},f=function(e){var t=e.modalDetails;return Object(d.jsx)(d.Fragment,{children:t&&Object(d.jsxs)("div",{div:!0,style:{width:500,height:800,backgroundColor:"aqua",zIndex:20,position:"absolute"},children:[Object(d.jsx)("img",{src:t.Poster,alt:""}),Object(d.jsx)("h4",{children:t.Title}),Object(d.jsx)("p",{children:t.Plot}),t.Ratings.map((function(e){return Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:e.Source})," ",e.Value]})}))]})})},v={body:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},g=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),a=Object(u.a)(r,2),s=a[0],j=a[1],b=Object(c.useState)(""),p=Object(u.a)(b,2),x=p[0],g=p[1],O=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://www.omdbapi.com/?s=".concat(t,"&apikey=b46dc190"),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,console.log(r),r.Search&&i(r.Search),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){O(s),""===s&&i([])}),[s]),Object(d.jsxs)("div",{className:"App",style:v.body,onClick:function(){g("")},children:[Object(d.jsx)(h,{input:s,newSearch:j}),Object(d.jsx)(m,{movies:n,modalDetails:x,getModalDetails:g}),Object(d.jsx)(f,{modalDetails:x})]})};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.eeac8396.chunk.js.map