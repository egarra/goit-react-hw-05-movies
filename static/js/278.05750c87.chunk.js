"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{345:function(n,e,t){t.d(e,{e:function(){return d}});var r,a,u,c=t(689),s=t(168),i=t(87),o=t(444),p=o.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 10px;\n  padding: 20px;\n  width: 300px;\n"]))),f=o.ZP.h2(a||(a=(0,s.Z)(["\n  font-size: 30px;\n  margin-bottom: 20px;\n"]))),l=(0,o.ZP)(i.rU)(u||(u=(0,s.Z)(["\n  font-size: 10px;\n  max-width: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  :hover,\n  :focus {\n    background: rgb(27 180 139);\n    color: white;\n  }\n"]))),v=t(184),d=function(n){var e=n.movies,t=n.link,r=(0,c.TH)();return(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{children:"Trending today"}),e.map((function(n){var e=n.name,a=n.title,u=n.id;return(0,v.jsx)(l,{to:"".concat(t+u),state:{from:r},children:(0,v.jsx)("h2",{children:e||a})},u)}))]})}},25:function(n,e,t){t.d(e,{JN:function(){return s},M1:function(){return p},Pg:function(){return o},Ph:function(){return i},jP:function(){return f}});var r=t(861),a=t(757),u=t.n(a),c=t(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"158499514fbb39b03ca6770e80a554af"};var s=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/all/day",{params:{page:1}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie",{params:{query:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},278:function(n,e,t){t.r(e);var r=t(433),a=t(861),u=t(439),c=t(757),s=t.n(c),i=t(791),o=t(87),p=t(25),f=t(793),l=t(345),v=t(184);e.default=function(){var n,e=(0,o.lr)(),t=(0,u.Z)(e,2),c=t[0],d=t[1],h=null!==(n=c.get("name"))&&void 0!==n?n:"",m=(0,i.useState)([]),x=(0,u.Z)(m,2),g=x[0],Z=x[1],w=(0,i.useState)(!1),b=(0,u.Z)(w,2),k=b[0],y=b[1];(0,i.useEffect)((function(){if(""!==h){var n=function(){var n=(0,a.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y(!0),n.prev=1,n.next=4,(0,p.Ph)(h);case 4:e=n.sent,Z((0,r.Z)(e)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,y(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[h]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{onSubmit:function(n){var e;n.preventDefault(),e=n.target.elements.query.value,d(""!==e?{name:e}:{})},children:[(0,v.jsx)("input",{onChange:function(n){return e=n.target.value,void d(""!==e?{name:e}:{});var e},value:h,type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search"}),(0,v.jsx)("button",{children:"Search"})]}),k&&(0,v.jsx)(f.a,{}),g.length>0&&(0,v.jsx)(l.e,{movies:g,link:""})]})}}}]);
//# sourceMappingURL=278.05750c87.chunk.js.map