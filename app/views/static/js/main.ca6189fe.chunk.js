(this["webpackJsonpreact-redux-hooks-jwt-auth"]=this["webpackJsonpreact-redux-hooks-jwt-auth"]||[]).push([[0],{167:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),s=t(5),o=t(15),m=t(55),i=t(56),u=t(13),d=JSON.parse(localStorage.getItem("user")),E=d?{isLoggedIn:!0,user:d}:{isLoggedIn:!1,user:null},f={},p=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"REGISTER_SUCCESS":case"REGISTER_FAIL":return Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:!1});case"LOGIN_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:!0,user:n.user});case"LOGIN_FAIL":case"LOGOUT":return Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"SET_MESSAGE":return{message:n};case"CLEAR_MESSAGE":return{message:""};default:return e}}}),b=[i.a],g=Object(o.createStore)(p,Object(m.composeWithDevTools)(o.applyMiddleware.apply(void 0,b))),v=(t(67),t(3)),h=(t(68),t(69),t(4)),O=t(23),N=t.n(O),j=t(17),S=t.n(j),y=t(24),k=t.n(y),w=t(16),I=t.n(w),T="http://localhost:8080/api/auth/",L=function(e,a,t){return I.a.post(T+"signup",{username:e,email:a,password:t})},A=function(e,a){return I.a.post(T+"signin",{username:e,password:a}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},R=function(){localStorage.removeItem("user")},_=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},C=function(e){var a=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useState)(""),l=Object(h.a)(c,2),o=l[0],m=l[1],i=Object(n.useState)(""),u=Object(h.a)(i,2),d=u[0],E=u[1],f=Object(n.useState)(!1),p=Object(h.a)(f,2),b=p[0],g=p[1],O=Object(s.c)((function(e){return e.auth})).isLoggedIn,j=Object(s.c)((function(e){return e.message})).message,y=Object(s.b)();return O?r.a.createElement(v.a,{to:"/profile"}):r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(N.a,{onSubmit:function(n){n.preventDefault(),g(!0),a.current.validateAll(),0===t.current.context._errors.length?y(function(e,a){return function(t){return A(e,a).then((function(e){return t({type:"LOGIN_SUCCESS",payload:{user:e}}),Promise.resolve()}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return t({type:"LOGIN_FAIL"}),t({type:"SET_MESSAGE",payload:a}),Promise.reject()}))}}(o,d)).then((function(){e.history.push("/profile"),window.location.reload()})).catch((function(){g(!1)})):g(!1)},ref:a},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(S.a,{type:"text",className:"form-control",name:"username",value:o,onChange:function(e){var a=e.target.value;m(a)},validations:[_]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(S.a,{type:"password",className:"form-control",name:"password",value:d,onChange:function(e){var a=e.target.value;E(a)},validations:[_]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block",disabled:b},b&&r.a.createElement("span",{className:"spinner-border spinner-border-sm"}),r.a.createElement("span",null,"Login"))),j&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},j)),r.a.createElement(k.a,{style:{display:"none"},ref:t}))))},G=t(57),x=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},M=function(e){if(!Object(G.isEmail)(e))return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This is not a valid email.")},U=function(e){if(e.length<3||e.length>20)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The username must be between 3 and 20 characters.")},F=function(e){if(e.length<6||e.length>40)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The password must be between 6 and 40 characters.")},P=function(){var e=Object(n.useRef)(),a=Object(n.useRef)(),t=Object(n.useState)(""),c=Object(h.a)(t,2),l=c[0],o=c[1],m=Object(n.useState)(""),i=Object(h.a)(m,2),u=i[0],d=i[1],E=Object(n.useState)(""),f=Object(h.a)(E,2),p=f[0],b=f[1],g=Object(n.useState)(!1),v=Object(h.a)(g,2),O=v[0],j=v[1],y=Object(s.c)((function(e){return e.message})).message,w=Object(s.b)();return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(N.a,{onSubmit:function(t){t.preventDefault(),j(!1),e.current.validateAll(),0===a.current.context._errors.length&&w(function(e,a,t){return function(n){return L(e,a,t).then((function(e){return n({type:"REGISTER_SUCCESS"}),n({type:"SET_MESSAGE",payload:e.data.message}),Promise.resolve()}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return n({type:"REGISTER_FAIL"}),n({type:"SET_MESSAGE",payload:a}),Promise.reject()}))}}(l,u,p)).then((function(){j(!0)})).catch((function(){j(!1)}))},ref:e},!O&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(S.a,{type:"text",className:"form-control",name:"username",value:l,onChange:function(e){var a=e.target.value;o(a)},validations:[x,U]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(S.a,{type:"text",className:"form-control",name:"email",value:u,onChange:function(e){var a=e.target.value;d(a)},validations:[x,M]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(S.a,{type:"password",className:"form-control",name:"password",value:p,onChange:function(e){var a=e.target.value;b(a)},validations:[x,F]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block"},"Sign Up"))),y&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:O?"alert alert-success":"alert alert-danger",role:"alert"},y)),r.a.createElement(k.a,{style:{display:"none"},ref:a}))))};function D(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var J=function(){return I.a.get("http://localhost:8080/api/test/all")},B=function(){return I.a.get("http://localhost:8080/api/test/user",{headers:D()})},W=function(){return I.a.get("http://localhost:8080/api/test/mod",{headers:D()})},q=function(){return I.a.get("http://localhost:8080/api/test/admin",{headers:D()})},H=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){J().then((function(e){c(e.data)}),(function(e){var a=e.response&&e.response.data||e.message||e.toString();c(a)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,t)))},$=function(){var e=Object(s.c)((function(e){return e.auth})).user;return e?r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,r.a.createElement("strong",null,e.username)," Profile")),r.a.createElement("p",null,r.a.createElement("strong",null,"Token:")," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)),r.a.createElement("p",null,r.a.createElement("strong",null,"Id:")," ",e.id),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:")," ",e.email),r.a.createElement("strong",null,"Authorities:"),r.a.createElement("ul",null,e.roles&&e.roles.map((function(e,a){return r.a.createElement("li",{key:a},e)})))):r.a.createElement(v.a,{to:"/login"})},z=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){B().then((function(e){c(e.data)}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();c(a)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,t)))},K=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){W().then((function(e){c(e.data)}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();c(a)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,t)))},Q=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){q().then((function(e){c(e.data)}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();c(a)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,t)))},V=t(7),X=function(){var e=Object(n.useState)(!1),a=Object(h.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(h.a)(l,2),m=o[0],i=o[1],u=Object(s.c)((function(e){return e.auth})).user;Object(n.useEffect)((function(){u&&(c(u.roles.includes("ROLE_MODERATOR")),i(u.roles.includes("ROLE_ADMIN")))}),[u]);var d=Object(s.b)();return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement(V.b,{to:"/",className:"navbar-brand"},"Employee Management App"),r.a.createElement("div",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(V.b,{to:"/home",className:"nav-link"},"Home")),t&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(V.b,{to:"/mod",className:"nav-link"},"Moderator Board")),m&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(V.b,{to:"/admin",className:"nav-link"},"Admin Board")),u&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(V.b,{to:"/user",className:"nav-link"},"User"))),u?r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(V.b,{to:"/profile",className:"nav-link"},u.username)),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/login",className:"nav-link",onClick:function(){d((function(e){R(),e({type:"LOGOUT"})}))}},"LogOut"))):r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(V.b,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(V.b,{to:"/register",className:"nav-link"},"Sign Up"))))},Y=t(8),Z=Object(Y.a)(),ee=function(){var e=Object(s.b)();return Object(n.useEffect)((function(){Z.listen((function(a){e({type:"CLEAR_MESSAGE"})}))}),[e]),r.a.createElement(v.c,{history:Z},r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement("div",{className:"container mt-3"},r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:["/","/home"],component:H}),r.a.createElement(v.b,{exact:!0,path:"/login",component:C}),r.a.createElement(v.b,{exact:!0,path:"/register",component:P}),r.a.createElement(v.b,{exact:!0,path:"/profile",component:$}),r.a.createElement(v.b,{path:"/user",component:z}),r.a.createElement(v.b,{path:"/mod",component:K}),r.a.createElement(v.b,{path:"/admin",component:Q})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,{store:g},r.a.createElement(V.a,null,r.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,a,t){e.exports=t(167)},67:function(e,a,t){},69:function(e,a,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.ca6189fe.chunk.js.map