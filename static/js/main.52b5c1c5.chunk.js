(this.webpackJsonpwitcherform=this.webpackJsonpwitcherform||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.f35e9c84.png"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),c=(a(14),a(1)),l=a(2),i=a(4),m=a(3),u=(a(15),a(5)),d=(a(16),a(8)),p=a.n(d),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",correct:!1,errors:{username:!1,password:!1}},e.messages={username:"at least 3 characters",password:"at least 3 characters"},e.inputHandleChange=function(t){"checkbox"===t.target.type?e.setState(Object(u.a)({},t.target.name,t.target.chceked)):"text"!==t.target.type&&"password"!==t.target.type||e.setState(Object(u.a)({},t.target.name,t.target.value))},e.formValidation=function(){var t=!1,a=!1,n=!1;return e.state.username.length>=3&&(t=!0),e.state.password.length>=3&&(a=!0),t&&a&&(n=!0),{username:t,password:a,correct:n}},e.handleSubmit=function(t){console.log(e.formValidation()),t.preventDefault(),e.formValidation().correct?e.setState({username:"",password:"",errors:{username:!1,password:!1}}):e.setState({errors:{username:!e.formValidation().username,password:!e.formValidation().password}})},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"logoBox"},r.a.createElement("img",{alt:"logo",src:p.a})),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"inputBox"},r.a.createElement("input",{required:"off",type:"text",name:"username",id:"username",onChange:this.inputHandleChange}),r.a.createElement("label",{htmlFor:"username"},"Username:")),r.a.createElement("div",{className:"inputBox"},r.a.createElement("input",{required:"off",type:"password",name:"password",id:"password",onChange:this.inputHandleChange}),r.a.createElement("label",{htmlFor:"password"},"Password:")),r.a.createElement("div",{className:"btnBox"},r.a.createElement("button",null,"Login"))))}}]),a}(n.Component),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.52b5c1c5.chunk.js.map