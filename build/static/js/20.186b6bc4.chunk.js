(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[20],{476:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(101),i=function(e){return n.a.createElement(o.a,Object.assign({width:22,height:22,viewBox:"0 0 1800 1800"},e),n.a.createElement("path",{d:"M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"}))};a.d(t,"a",(function(){return i}))},804:function(e,t,a){"use strict";a.r(t);var r=a(302),n=a(46),o=a(304),i=a(305),l=a(306),s=a(553),c=a(627),p=a.n(c),d=a(69),m=a.n(d),u=a(0),f=a.n(u),h=a(95),b=a(476),y=a(630),g=a(25),v=a(267),C=a(539),k=a(763),w=a(81),E=(new Date).getFullYear(),x="/user_registrations_per_day/".concat(E,"/").concat((new Date).toISOString().slice(5,7)),j="/user_registrations_per_month/".concat(E),q=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.watchPath;e(x),e(j),e("/provider_count"),e("users_count")}},{key:"render",value:function(){var e=this.props,t=e.theme,a=e.intl,r=e.days,n=e.months,o=e.providers,i=e.usersCount,l=[],c=[];r&&Object.keys(r).sort().map((function(e){return l.push(e),c.push(r[e]),e}));var d={labels:l,datasets:[{label:a.formatDate(Date.now(),{month:"long"}),fill:!1,lineTension:.1,backgroundColor:t.palette.primary.main,borderColor:t.palette.primary.main,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:t.palette.secondary.main,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:t.palette.primary.main,pointHoverBorderColor:t.palette.secondary.main,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:c}]},u=[],g=[];n&&Object.keys(n).sort().map((function(e){var t=new Date("".concat(E,"-").concat(e,"-1"));return u.push(a.formatDate(t,{month:"long"})),g.push(n[e]),e}));var v={labels:u,datasets:[{label:a.formatMessage({id:"user_registrationg_graph_label"}),fill:!1,maintainAspectRatio:!0,lineTension:.1,backgroundColor:t.palette.primary.main,borderColor:t.palette.primary.main,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:t.palette.secondary.main,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:t.palette.primary.main,pointHoverBorderColor:t.palette.secondary.main,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:g}]},C=[],k=[],x=[];o&&Object.keys(o).sort().map((function(e){return k.push(a.formatMessage({id:e})),x.push(a.formatMessage({id:"".concat(e,"_color")})),C.push(o[e]),e}));var j={labels:k,datasets:[{data:C,backgroundColor:x,hoverBackgroundColor:x}]};return f.a.createElement(h.a,{iconElementRight:f.a.createElement(s.a,{style:{marginTop:4},href:"https://github.com/TarikHuber/react-most-wanted",target:"_blank",rel:"noopener",secondary:!0,icon:f.a.createElement(b.a,null)}),title:a.formatMessage({id:"dashboard"})},f.a.createElement(w.a,null,f.a.createElement("div",{style:{margin:5,display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",width:"100%",marginTop:50}},f.a.createElement("div",{style:{flexGrow:1,flexShrink:1,maxWidth:600}},f.a.createElement(y.c,{options:{maintainAspectRatio:!0},data:v})),f.a.createElement("div",{style:{flexGrow:1,flexShrink:1,maxWidth:600}},f.a.createElement(y.a,{options:{maintainAspectRatio:!0},data:d}))),f.a.createElement("br",null),f.a.createElement("div",{style:{margin:5,display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",width:"100%",marginTop:50}},f.a.createElement("div",{style:{flexGrow:1,flexShrink:1,maxWidth:600,justifyContent:"center"}},f.a.createElement(y.b,{data:j})),f.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",margin:30}},f.a.createElement(p.a,{style:{fontSize:100,color:t.palette.primary.main,fontFamily:t.fontFamily},start:0,end:i}),f.a.createElement("div",null,f.a.createElement(m.a,{color:"secondary",className:"material-icons",style:{fontSize:70,marginLeft:16}}))))))}}]),t}(u.Component),O=Object(g.b)((function(e){var t=e.paths;return{days:t[x],months:t[j],providers:t["/provider_count"],usersCount:t.users_count?t.users_count:0}}))(Object(v.b)(Object(k.a)(Object(C.a)(q))));a.d(t,"default",(function(){return O}))}}]);