(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{184:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(18),r=t.n(l),o=(t(79),t(43)),m=t(5),s=t(4),i=t(7),u=t.n(i),d=t(186),E=t(44),b=t.n(E),p=t(45),f=t.n(p),g=t(46);var N=function(e){var a=e.setGlobalUser,t=Object(n.useState)(!1),l=Object(s.a)(t,2),r=l[0],o=l[1],i=Object(n.useState)(!1),E=Object(s.a)(i,2),p=E[0],N=E[1],h=Object(n.useState)(null),v=Object(s.a)(h,2),k=v[0],y=v[1],j=Object(n.useRef)(null),O=Object(n.useRef)(null),w=Object(m.e)(),x=function(e){j.current&&!j.current.contains(e.target)&&O.current&&!O.current.contains(e.target)&&o(!1)};return Object(n.useEffect)((function(){return u.a.get("/user/login").then((function(e){"No User"!==e.data&&(y(e.data),a(e.data))})).catch((function(e){console.log(e)})),document.addEventListener("click",x),function(){document.removeEventListener("click",x)}}),[a]),c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand flex-column flex-md-row navbar-dark bg-primary"},c.a.createElement("div",{className:"navbar-brand logo",onClick:function(){w.push("/")}},c.a.createElement("h4",{style:{fontFamily:"Bitter"}},c.a.createElement("img",{src:b.a,alt:"Logo",className:"img-fluid mr-2",width:"35"}),"GitHub Job Basket")),c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("button",{className:"btn",onClick:function(){k?w.push("/basket"):N(!p)}},c.a.createElement("img",{src:b.a,alt:"Logo",className:"img-fluid m-1 rounded-circle",width:"32",height:"32"}))),c.a.createElement("li",{className:"nav-item",ref:j},k?c.a.createElement("button",{className:"btn",onClick:function(){return o(!r)}},c.a.createElement("img",{src:k.image,alt:k.familyName,className:"img-fluid m-1 rounded-circle",width:"32",height:"32"})):c.a.createElement("button",{className:"btn",onClick:function(){return o(!r)}},c.a.createElement("img",{src:f.a,alt:"guest",className:"img-fluid m-1 rounded-circle",width:"32",height:"32"}))))),r&&c.a.createElement("div",{className:"jumbotron login login-panel",ref:O},c.a.createElement("div",{className:"lead text-center mb-3"},k?c.a.createElement("img",{src:k.image,alt:k.familyName,className:"img-fluid rounded-circle",width:"90"}):c.a.createElement("img",{src:f.a,alt:"guest",className:"img-fluid rounded-circle",width:"90"})),c.a.createElement("div",{className:"lead text-center"},k?c.a.createElement("h6",null,k.displayName):c.a.createElement("h6",null,"Guest")),c.a.createElement("hr",{className:"my-4"}),c.a.createElement("div",{className:"lead text-center"},k?c.a.createElement("button",{className:"btn btn-primary btn-block text-center",onClick:function(){window.location.href="".concat(g.server,"/auth/logout")}},"Logout"):c.a.createElement("button",{className:"btn btn-primary btn-block text-center",onClick:function(){window.location.href="".concat(g.server,"/auth/google")}},c.a.createElement("i",{className:"fa fa-google mr-1","aria-hidden":"true"})," Login"))),c.a.createElement("div",null,c.a.createElement(d.a,{show:p,onHide:function(){return N(!p)},animation:!1,centered:!0},c.a.createElement(d.a.Body,{className:"text-center"},c.a.createElement("h4",null,"Please login first!")))))},h=t(32),v=t(12),k="initialize",y="get-data",j="error",O="update-has-next-page";function w(e,a){switch(a.type){case k:return{loading:!0,hasNextPage:!1,jobs:[]};case y:return Object(v.a)(Object(v.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case j:return Object(v.a)(Object(v.a)({},e),{},{loading:!1,error:a.payload.error,jobs:[]});case O:return Object(v.a)(Object(v.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}}var x=function(e,a){var t=Object(n.useReducer)(w,{loading:!0,hasNextPage:!1,jobs:[]}),c=Object(s.a)(t,2),l=c[0],r=c[1],o="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";return Object(n.useEffect)((function(){var t=u.a.CancelToken.source(),n=u.a.CancelToken.source();return r({type:k}),u.a.get(o,{cancelToken:t.token,params:Object(v.a)({markdown:!0,page:a},e)}).then((function(e){r({type:y,payload:{jobs:e.data}})})).catch((function(e){u.a.isCancel(e)||r({type:j,payload:{error:e}})})),u.a.get(o,{cancelToken:n.token,params:Object(v.a)({markdown:!0,page:a+1},e)}).then((function(e){r({type:O,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){u.a.isCancel(e)||r({type:j,payload:{error:e}})})),function(){t.cancel(),n.cancel()}}),[e,a]),l},C=t(33),_=t.n(C),H=t(22),T=t.n(H),S=t(71),B=t.n(S);var P=function(e){var a=e.job,t=Object(n.useState)(!1),l=Object(s.a)(t,2),r=l[0],o=l[1],m=Object(n.useState)(!1),i=Object(s.a)(m,2),E=i[0],b=i[1],p=Object(n.useState)(!1),f=Object(s.a)(p,2),g=f[0],N=f[1],h=Object(n.useState)(!1),v=Object(s.a)(h,2),k=v[0],y=v[1],j=Object(n.useState)(!1),O=Object(s.a)(j,2),w=O[0],x=O[1],C=u.a.CancelToken.source();return Object(n.useEffect)((function(){return u.a.get("/user/basket/github/".concat(a.id),{cancelToken:C.token}).then((function(e){!0===e.data&&y(!0)})).catch((function(e){u.a.isCancel(e)})),function(){C.cancel()}})),c.a.createElement("div",null,c.a.createElement("div",{className:"card my-3"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:""},c.a.createElement("div",{className:"card-title"},c.a.createElement("button",{className:"btn btn-link",onClick:function(){return o(!r)}},c.a.createElement("h5",null,a.title)))),c.a.createElement("div",{className:"col text-right"},c.a.createElement("img",{className:"img-fluid",src:a.company_logo,alt:"company-logo",width:"100"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("span",{className:"badge badge-secondary"},a.type)),c.a.createElement("div",{className:"col"},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-clock-o","aria-hidden":"true"})," ",_()(a.created_at).fromNow()))),c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col"},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-briefcase","aria-hidden":"true"})," ",a.company)),c.a.createElement("div",{className:"col"},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"})," ",a.location))),c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col"},c.a.createElement("button",{className:"btn btn-secondary btn-block",onClick:function(){return b(!E)}},c.a.createElement("i",{className:"fa fa-question-circle","aria-hidden":"true"})," How to Apply")),c.a.createElement("div",{className:"col"},c.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(){x(!0);var e={id:a.id,type:a.type,created_at:a.created_at,company:a.company,location:a.location,title:a.title,description:a.description,how_to_apply:a.how_to_apply,company_logo:a.company_logo};u.a.post("/user/basket/github/save/".concat(a.id),e).then((function(e){"No User"===e.data&&(N(!0),x(!1)),"Saved"!==e.data&&"Updated"!==e.data||x(!0)})).catch((function(e){console.log(e),x(!1)}))},disabled:k||w},c.a.createElement("img",{src:B.a,alt:"basket",width:"20"})," Basket it! "))))),c.a.createElement("div",null,c.a.createElement(d.a,{show:r,onHide:function(){return o(!r)},size:"lg",animation:!1,centered:!0},c.a.createElement(d.a.Header,{closeButton:!0},c.a.createElement(d.a.Title,null,"Job Description")),c.a.createElement(d.a.Body,null,c.a.createElement(T.a,{source:a.description,escapeHtml:!1})),c.a.createElement(d.a.Footer,null,c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return o(!r)}},"Close")))),c.a.createElement("div",null,c.a.createElement(d.a,{show:E,onHide:function(){return b(!E)},animation:!1,centered:!0},c.a.createElement(d.a.Header,{closeButton:!0},c.a.createElement(d.a.Title,null,"How to Apply")),c.a.createElement(d.a.Body,{className:"text-center",style:{wordBreak:"break-all"}},c.a.createElement(T.a,{source:a.how_to_apply,escapeHtml:!1,linkTarget:"_blank"})))),c.a.createElement("div",null,c.a.createElement(d.a,{show:g,onHide:function(){return N(!g)},animation:!1,centered:!0},c.a.createElement(d.a.Body,{className:"text-center"},c.a.createElement("h3",null,"Please login first")))))};var F=function(e){var a=e.params,t=e.onParamChange;return c.a.createElement("form",null,c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"form-group col-md-5"},c.a.createElement("label",{htmlFor:"description"},"Description"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("div",{className:"input-group-text"},c.a.createElement("i",{className:"fa fa-file","aria-hidden":"true"}))),c.a.createElement("input",{className:"form-control",value:a.description,onChange:t,type:"text",name:"description"}))),c.a.createElement("div",{className:"form-group col-md-5"},c.a.createElement("label",{htmlFor:"location"},"Location"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("div",{className:"input-group-text"},c.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"}))),c.a.createElement("input",{className:"form-control",value:a.location,onChange:t,type:"text",name:"location"}))),c.a.createElement("div",{className:"form-group col-md-2"},c.a.createElement("label",{htmlFor:"full_time"},"Job Type"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("div",{className:"input-group-text form-control"},c.a.createElement("input",{type:"checkbox",value:a.full_time,onChange:t,name:"full_time",id:"full_time"}))),c.a.createElement("span",{className:"border col",style:{background:"white"}},c.a.createElement("label",{htmlFor:"full_time",className:"mt-1"},"Full Time"))))))},L=t(187);var I=function(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function l(e){t((function(a){return a+e}))}return c.a.createElement(L.a,null,1!==a&&c.a.createElement(L.a.Prev,{onClick:function(){return l(-1)}}),1!==a&&c.a.createElement(L.a.Item,{onClick:function(){return t(1)}},"1"),a>2&&c.a.createElement(L.a.Item,{onClick:function(){return l(-1)}},a-1),c.a.createElement(L.a.Item,{active:!0},a),n&&c.a.createElement(L.a.Item,{onClick:function(){return l(1)}},a+1),n&&c.a.createElement(L.a.Next,{onClick:function(){return l(1)}}))};var J=function(){var e=Object(n.useState)(1),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)({}),o=Object(s.a)(r,2),m=o[0],i=o[1],u=x(m,t),d=u.jobs,E=u.loading,b=u.error,p=u.hasNextPage;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"mt-3"},c.a.createElement(F,{params:m,onParamChange:function(e){var a=e.target.name,t=e.target.value;l(1),i((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(h.a)({},a,t))}))}})),c.a.createElement("div",{className:"mt-1"},c.a.createElement(I,{page:t,setPage:l,hasNextPage:p})),E?c.a.createElement("h4",null,"Loading..."):null,b?c.a.createElement("h4",null,"Error! Try Refreshing."):null,d.map((function(e,a){return c.a.createElement(P,{key:a,job:e})})),c.a.createElement("div",{className:"mt-3"},c.a.createElement(I,{page:t,setPage:l,hasNextPage:p})))};var U=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],l=a[1];return c.a.createElement("div",{style:{background:"#dae4f5"}},c.a.createElement(N,{setGlobalUser:l}),t?c.a.createElement("h4",{className:"container mt-2"},"Hi, ",t.firstName,"!"):null,c.a.createElement(J,null))},A=t(73);var G=function(e){var a=e.job,t=e.index,l=e.setTrashIndex,r=Object(n.useState)(!1),o=Object(s.a)(r,2),m=o[0],i=o[1],u=Object(n.useState)(!1),E=Object(s.a)(u,2),b=E[0],p=E[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"card my-3"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:""},c.a.createElement("div",{className:"card-title"},c.a.createElement("button",{className:"btn btn-link",onClick:function(){return i(!m)}},c.a.createElement("h5",null,a.title)))),c.a.createElement("div",{className:"col text-right"},c.a.createElement("img",{className:"img-fluid",src:a.company_logo,alt:"company-logo",width:"100"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("span",{className:"badge badge-secondary"},a.type)),c.a.createElement("div",{className:"col"},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-clock-o","aria-hidden":"true"})," ",_()(a.created_at).fromNow()))),c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col"},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-briefcase","aria-hidden":"true"})," ",a.company)),c.a.createElement("div",{className:"col"},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"})," ",a.location))),c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col"},c.a.createElement("button",{className:"btn btn-secondary btn-block",onClick:function(){return p(!b)}},c.a.createElement("i",{className:"fa fa-question-circle","aria-hidden":"true"})," How to Apply")),c.a.createElement("div",{className:"col"},c.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(){l(t)}},c.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true"})," Trash it!"))))),c.a.createElement("div",null,c.a.createElement(d.a,{show:m,onHide:function(){return i(!m)},size:"lg",animation:!1,centered:!0},c.a.createElement(d.a.Header,{closeButton:!0},c.a.createElement(d.a.Title,null,"Job Description")),c.a.createElement(d.a.Body,null,c.a.createElement(T.a,{source:a.description,escapeHtml:!1})),c.a.createElement(d.a.Footer,null,c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return i(!m)}},"Close")))),c.a.createElement("div",null,c.a.createElement(d.a,{show:b,onHide:function(){return p(!b)},animation:!1,centered:!0},c.a.createElement(d.a.Header,{closeButton:!0},c.a.createElement(d.a.Title,null,"How to Apply")),c.a.createElement(d.a.Body,{className:"text-center",style:{wordBreak:"break-all"}},c.a.createElement(T.a,{source:a.how_to_apply,escapeHtml:!1,linkTarget:"_blank"})))))},R=t(72),z=t.n(R);var D=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(null),o=Object(s.a)(r,2),m=o[0],i=o[1];return Object(n.useEffect)((function(){var e=u.a.CancelToken.source();return u.a.get("/user/basket/github",{cancelToken:e.token}).then((function(e){l(e.data)})).catch((function(e){console.log(e)})),function(){e.cancel()}}),[]),Object(n.useEffect)((function(){if(null!==m){var e=Object(A.a)(t);e.splice(m,1),l(e),i(null),u.a.post("user/basket/github/update",e).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}}),[m,t]),c.a.createElement("div",{className:"container"},t&&t.map((function(e,a){return c.a.createElement(G,{key:a,job:e,index:a,setTrashIndex:i})})),t&&0===t.length?c.a.createElement("div",{className:"text-center mt-5"},c.a.createElement("img",{src:z.a,alt:"basket",width:"100"}),c.a.createElement("h4",{className:"mt-2"},"Empty Basket")):null)};var q=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],l=a[1];return c.a.createElement("div",{style:{background:"#dae4f5"}},c.a.createElement(N,{setGlobalUser:l}),t?c.a.createElement("h4",{className:"container mt-2"},t.firstName,"'s Basket"):null,c.a.createElement(D,null))};var M=function(){return c.a.createElement(o.a,null,c.a.createElement(m.a,{path:"/",exact:!0,component:U}),c.a.createElement(m.a,{path:"/basket",exact:!0,component:q}))};t(182),t(183);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root"))},44:function(e,a,t){e.exports=t.p+"static/media/basket.6afa5543.svg"},45:function(e,a,t){e.exports=t.p+"static/media/user_pic.ee1a7263.png"},46:function(e){e.exports=JSON.parse('{"server":"","comment":"Add \'http://localhost:5000\' for development"}')},71:function(e,a,t){e.exports=t.p+"static/media/basket.177cc2d0.png"},72:function(e,a,t){e.exports=t.p+"static/media/basket.177cc2d0.png"},74:function(e,a,t){e.exports=t(184)},79:function(e,a,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.171acb15.chunk.js.map