(this.webpackJsonpideas=this.webpackJsonpideas||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),c=n(7),l=n(3),o=(n(32),n(1)),u=n(2);function d(){var e=Object(o.a)(["\n.App-header {\n    background: #fff;\n    min-height: 10vh;\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    width: -webkit-fill-available;\n    z-index: 2;\n    box-shadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.1);\n    .logo {\n        width: 120px;\n    }\n}\n"]);return d=function(){return e},e}var f=u.a.div(d()),m=function(){return a.a.createElement(f,null,a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{className:"logo",src:"https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1435909643/liv6vlkrvucn35ubnhjp.png",alt:"Clearscore",title:"Clearscore"})))},s=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")).ideas.length:0;console.log("nextIdeaId");var p=function(e,t,n,r){return{type:"EDIT_IDEA",id:r,title:e,text:t,date:n}},b="SHOW_COMPLETED",g="SHOW_ACTIVE",E=function(e){var t=e.active,n=e.children,r=e.onClick;return a.a.createElement("button",{onClick:r,disabled:t},n)},v=Object(l.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(E);function h(){var e=Object(o.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\n  button {\n    margin: 1% 4%;\n    width: 91%;\n  }\n"]);return h=function(){return e},e}var O=u.a.div(h()),y=function(){return a.a.createElement(O,null,a.a.createElement(v,{filter:g},"Good Ideas"),a.a.createElement(v,{filter:b},"What was I thinking?"))};function x(){var e=Object(o.a)(["\nmargin: 22vh 0 -3vh 0;\npadding: 0 0 10% 0;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\n  button {\n    margin: 1% 4%;\n    width: 91%;\n    border: 1px solid #fff;\n  }\n}\n"]);return x=function(){return e},e}var j=u.a.div(x()),w=Object(l.b)()((function(e){var t,n,r=e.dispatch;return a.a.createElement(j,null,a.a.createElement("div",null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.value.trim()&&n.value.trim()&&(r(function(e,t,n){return{type:"ADD_IDEA",id:s++,title:e,text:t,date:n}}(t.value,n.value,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-",t=new Date,n=t.getDate(),r=t.getMonth()+1,a=t.getFullYear();return"".concat(n).concat(e).concat(r<10?"0".concat(r):"".concat(r)).concat(e).concat(a)}())),t.value="",n.value="")}},a.a.createElement("input",{ref:function(e){return t=e},placeholder:"Add title...",required:!0}),a.a.createElement("input",{ref:function(e){return n=e},placeholder:"Add description...",required:!0}),a.a.createElement("button",{type:"submit"},"Add Idea"))))})),I=n(19),S=Object(l.b)()((function(e){var t=e.dispatch,n=e.onClick,i=e.completed,c=e.title,l=e.text,o=e.date,u=e.id,d=Object(r.useState)(!1),f=Object(I.a)(d,2),m=f[0],s=f[1],b=function(){s(!m)},g=i?"Add":"Remove";return a.a.createElement("div",{className:"idea",style:{opacity:i?"0.5":"1"}},m?a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"text",value:c,onChange:function(e){c=e.target.value,t(p(c,l,o,u))},placeholder:c,className:"focus"}),a.a.createElement("input",{type:"text",value:l,onChange:function(e){l=e.target.value,t(p(c,l,o,u))},placeholder:l}),a.a.createElement("div",{className:"options"},a.a.createElement("small",{onClick:b},"Save"))):a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,c),a.a.createElement("p",null,l),a.a.createElement("p",null,o),a.a.createElement("div",{className:"options"},a.a.createElement("small",{onClick:b},"Edit"),a.a.createElement("small",{onClick:n},g))))}));function _(){var e=Object(o.a)(["\ndisplay: flex;\njustify-content: space-evenly;\nflex-direction: row;\nflex-wrap: wrap;\nflex: 1 1 auto,\nmargin: .875rem auto;\npadding: 1% 9% 0 8%;\n  .idea {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: .875rem auto;\n    border-radius: .1875rem;\n    box-shadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.1);\n    padding: 0 2rem;\n    background: #233143;\n    margin: 1rem;\n    h3, p {\n      margin-bottom: 0;\n    }\n    input {\n      width: 100%;\n      color: #fff;\n      border: none;\n      background: #233143;\n      font-size: 18px;\n    }\n    input.focus {\n      border-bottom: 1px solid #0f81a3;\n    }\n    .options {\n      display: flex;\n      flex-direction: row;\n      small {\n        margin: 1rem 1rem 1rem 0;\n        color: #0f81a3;\n        cursor: pointer;\n      }\n    }\n  }\n"]);return _=function(){return e},e}var D=u.a.div(_()),k=function(e){var t=e.ideas,n=e.toggleIdea;return a.a.createElement(D,null,t.map((function(e){return a.a.createElement(S,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))})))},T=function(e,t){switch(t){case b:return e.filter((function(e){return e.completed}));case g:return e.filter((function(e){return!e.completed}));default:throw new Error("Unknown filter: "+t)}},A=Object(l.b)((function(e){return{ideas:T(e.ideas,e.visibilityFilter)}}),(function(e){return{toggleIdea:function(t){return e(function(e){return{type:"TOGGLE_IDEA",id:e}}(t))}}}))(k);function C(){var e=Object(o.a)(["\n  text-align: center;\n  max-width: 320px;\n  margin: 0 auto;\n"]);return C=function(){return e},e}var N=u.a.div(C()),F=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null),a.a.createElement(N,null,a.a.createElement(w,null),a.a.createElement(y,null)),a.a.createElement(A,null))},L=n(17),P=n(18);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){Object(L.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_IDEA":return[].concat(Object(P.a)(e),[{id:t.id,title:t.title,text:t.text,date:t.date,completed:!1}]);case"EDIT_IDEA":return console.log(e),e.map((function(e){return e.id===t.id?J({},e,{id:t.id,title:t.title,text:t.text,date:t.date,completed:!1}):e}));case"TOGGLE_IDEA":return e.map((function(e){return e.id===t.id?J({},e,{completed:!e.completed}):e}));default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},X=Object(c.b)({ideas:R,visibilityFilter:V}),q=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},B=Object(c.c)(X,q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(i.render)(a.a.createElement(l.a,{store:B},a.a.createElement(F,null)),document.getElementById("root")),B.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(B.getState()))}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b357894b.chunk.js.map