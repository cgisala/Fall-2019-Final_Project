(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],d=0,v=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},i=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"080b":function(t,e,r){},"0a11":function(t,e,r){"use strict";var a=r("080b"),n=r.n(a);n.a},"32b1":function(t,e,r){},5208:function(t,e,r){"use strict";var a=r("32b1"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("RouterView"),r("Footer")],1)},i=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"jumbotron"},[r("h1",{staticClass:"display-4",attrs:{id:"title"}},[t._v("Personal Activity Tracker")])])])}],l={name:"Header"},c=l,u=(r("5208"),r("2877")),d=Object(u["a"])(c,s,o,!1,null,"583b9142",null),v=d.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",attrs:{id:"add-hours"}},[r("h2",{staticClass:"card-header"},[t._v("Add Activity")]),r("div",{staticClass:"card-body"},[r("form",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.errors&&t.errors.length>0,expression:"errors && errors.length > 0"}],staticClass:"alert alert-danger"},t._l(t.errors,(function(e){return r("li",[t._v(t._s(e))])})),0),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"when"}},[t._v("Date")]),r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.date,expression:"date",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{id:"when",type:"date"},domProps:{value:t.date},on:{change:function(e){t.date=e.target.value}}})]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"duration"}},[t._v("Duration")]),r("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.duration,expression:"duration",modifiers:{number:!0,lazy:!0}}],staticClass:"form-control",attrs:{id:"duration"},domProps:{value:t.duration},on:{change:function(e){t.duration=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"type"}},[t._v("Activity")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?r:r[0]}}},t._l(t.types,(function(e){return r("option",{domProps:{value:e}},[t._v(t._s(e))])})),0)]),r("div",[r("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"button"},on:{click:t.submit}},[t._v("Add record")])])])])])},p=[],m={name:"ActivityForm",data:function(){return{date:"",duration:"",types:["sketching","cleaning","walking","programming","studying"],type:"programming",activityRecords:"",errors:[]}},methods:{submit:function(){if(this.errors=[],("number"!=typeof this.duration||this.duration<=0)&&this.errors.push("The number of hours must be a number greater than zero."),0==this.errors.length){var t={date:this.date,duration:this.duration,activity:this.type};this.$activityService.addActivity(t).then((function(t){console.log("It works")}))}}}},h=m,b=Object(u["a"])(h,f,p,!1,null,"41f8f0e6",null),_=b.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("div",{attrs:{id:"activity-table"}},[r("table",{staticClass:"table"},[t._m(1),t._l(t.activities,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.date))]),r("td",[t._v(t._s(e.duration))]),r("td",[t._v(t._s(e.activity))])])}))],2)])])},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card activity-list m-2 p-2"},[r("h4",{staticClass:"card-header"},[t._v("Activity Table")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Date")]),r("th",[t._v("Duration")]),r("th",[t._v("Activity")])])}],C={name:"ActivityTable",data:function(){return{activities:[]}},mounted:function(){this.getAll()},methods:{getAll:function(){var t=this;this.$activityService.getAll().then((function(e){t.activities=e}))}}},w=C,A=(r("0a11"),Object(u["a"])(w,y,g,!1,null,"c4bea7c0",null)),x=A.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("div",{staticClass:"m-2"},[r("span",{staticClass:"p-3"},[r("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),r("span",{staticClass:"p-3"},[r("router-link",{attrs:{to:"/table"}},[t._v("Table")])],1),r("span",{staticClass:"p-3"},[r("router-link",{attrs:{to:"/about"}},[t._v("About this site")])],1)]),t._m(0)])},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-right p-2"},[t._v("Header image by "),r("a",{attrs:{href:"https://unsplash.com/photos/tCICLJ5ktBE"}},[t._v("@Vadim Sherbakov via Unsplash. ")])])}],$={name:"Footer"},k=$,E=Object(u["a"])(k,O,j,!1,null,"34759c78",null),P=E.exports,S={name:"app",components:{Header:v,ActivityForm:_,ActivityTable:x,Footer:P}},T=S,z=(r("034f"),Object(u["a"])(T,n,i,!1,null,null,null)),F=z.exports,H=r("8c4f"),D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h2",[t._v("What is this site for?")]),r("p",[t._v("This site is for tracking and analyzing personal activities")])])}],N={name:"About"},J=N,I=Object(u["a"])(J,D,M,!1,null,"1e912442",null),R=I.exports,U=new H["a"]({routes:[{path:"/",component:_},{path:"/table",component:x},{path:"/about",component:R}]}),V=r("5f5b"),B=r("bc3a"),L=r.n(B),W="/api/activity",q={getAll:function(){return L.a.get("/api/activity").then((function(t){return t.data}))},addActivity:function(t){return L.a.post(W,t).then((function(t){return t.data}))}};r("f9e3"),r("2dd8");a["default"].use(H["a"]),a["default"].use(V["a"]),a["default"].prototype.$activityService=q,new a["default"]({render:function(t){return t(F)},router:U}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.ad480219.js.map