(function(e){function n(n){for(var o,r,u=n[0],l=n[1],i=n[2],s=0,d=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);h&&h(n);while(d.length)d.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,r=1;r<t.length;r++){var u=t[r];0!==a[u]&&(o=!1)}o&&(c.splice(n--,1),e=l(l.s=t[0]))}return e}var o={},r={app:0},a={app:0},c=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-9fa95230":"5e929d48","chunk-516d8860":"95f71753","chunk-5c513100":"2177a9bb","chunk-5c1e5ce6":"34713049","chunk-45479dbd":"ef2c2e72","chunk-69b1fd2b":"fae9ddcb","chunk-63609ef2":"2a21ce42","chunk-01b2d3d6":"36c3da32","chunk-51f7c598":"70460628","chunk-2107a91a":"439090be","chunk-30134283":"5c113ed7","chunk-61a66842":"36b8e96d","chunk-474b8cf1":"c2f6e5ff","chunk-952cef58":"542ae35f","chunk-ee998c14":"e87e25e2"}[e]+".js"}function l(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"chunk-9fa95230":1,"chunk-516d8860":1,"chunk-5c513100":1,"chunk-5c1e5ce6":1,"chunk-45479dbd":1,"chunk-69b1fd2b":1,"chunk-63609ef2":1,"chunk-01b2d3d6":1,"chunk-51f7c598":1,"chunk-2107a91a":1,"chunk-30134283":1,"chunk-61a66842":1,"chunk-474b8cf1":1,"chunk-952cef58":1,"chunk-ee998c14":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-9fa95230":"91bcf7a3","chunk-516d8860":"70cff62e","chunk-5c513100":"bbf294e8","chunk-5c1e5ce6":"84be2b16","chunk-45479dbd":"af8bc129","chunk-69b1fd2b":"c399ce31","chunk-63609ef2":"b942faaa","chunk-01b2d3d6":"16a2d7af","chunk-51f7c598":"93e85f74","chunk-2107a91a":"66f8147b","chunk-30134283":"2c7bc922","chunk-61a66842":"ce9e4fb0","chunk-474b8cf1":"8c685a5a","chunk-952cef58":"37a841f5","chunk-ee998c14":"17990f08"}[e]+".css",a=l.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===o||s===a))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],s=i.getAttribute("data-href");if(s===o||s===a)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var o=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],h.parentNode.removeChild(h),t(c)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var c=new Promise((function(n,t){o=a[e]=[n,t]}));n.push(o[2]=c);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var d=new Error;i=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,t[1](d)}a[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},l.m=e,l.c=o,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(t,o,function(n){return e[n]}.bind(null,o));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var h=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("2b0e"),r=t("bc3a"),a=t.n(r);let c={baseURL:"http://ogdenivar.pythonanywhere.com/api/",timeout:6e4,withCredentials:!1};const u=a.a.create(c);u.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,n){e.axios=u,window.axios=u,Object.defineProperties(e.prototype,{axios:{get(){return u}},$axios:{get(){return u}}})},o["a"].use(Plugin);Plugin;var l=t("f309");o["a"].use(l["a"]);var i=new l["a"]({icons:{iconfont:"fa"},theme:{themes:{light:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}}),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("router-view")],1)},d=[],h={data(){return{}},methods:{login(e,n,t,o){return localStorage.setItem("email",e),sessionStorage.setItem("token",t),sessionStorage.setItem("ref",n),localStorage.setItem("remember",o),!0},logout(){sessionStorage.removeItem("token"),sessionStorage.removeItem("ref"),localStorage.removeItem("remember"),localStorage.removeItem("email")},loginRemember(){var e=localStorage.getItem("email");return!!(localStorage.getItem("remember")&&e.length>1)&&e},routeVerify(){}}},f=h,m=t("2877"),p=t("6544"),k=t.n(p),g=t("7496"),b=Object(m["a"])(f,s,d,!1,null,null,null),y=b.exports;k()(b,{VApp:g["a"]});var v=t("8c4f"),w=t("2f62");const P={getUserData(){let e=sessionStorage.getItem("token"),n=JSON.parse(localStorage.getItem("data"));return{token:e,...n}},login(e){let{token:n,...t}=e;sessionStorage.setItem("token",n),localStorage.setItem("data",JSON.stringify({data:{...t}}))},logOut(){sessionStorage.removeItem("token"),localStorage.removeItem("data")},getReturnUser(){var e=!!localStorage.getItem("remember")&&localStorage.getItem("email");return e||!1},setProfile(e){delete e.token,e.hasProfile=!0,localStorage.setItem("data",JSON.stringify(e))}};o["a"].use(w["a"]);const S=o["a"].axios,O=function(e){let n=e?`Bearer ${e}`:"";S.defaults.headers.common["Authorization"]=n},_={data:{type:0,username:"",email:""},profile:{},token:!1,downline:[],hasProfile:!1};var I=new w["a"].Store({state:{hasProfile:!1,loaders:{profile:!1,downline:!1},profile:{data:{},control:{loader:!1,error:!1,loaded:!1}},user:{token:"",type:"",email:"",username:""},direct_downlines:{data:[],control:{loader:!1,error:!1,loaded:!1}}},getters:{user:e=>{return e.user.data},level:e=>{return e.user.data.type},auth:e=>{return e.user.token&&!0},downline:e=>{return e.direct_downlines.data},downlineLoader:e=>{return e.direct_downlines.control.loader},downlineIsLoaded:e=>{return e.direct_downlines.control.loaded},profile:e=>{return e.user.profile},profileLoader:e=>{return e.profile.control.loader}},mutations:{updateAccess(e){e.user=P.getUserData(),O(e.user.token)},updateAccount(e,n){P.login({token:e.user.token,...n})},updateProfile(e,n){e.user.type>=2?e.user.profile={}:e.user.profile=n,P.setProfile(e.user)},login(e,n){P.login(n)},logOut(e){e.user=_,O(e.user.token)},routeNotify(e){return e.user.username&&e.user.token},directDownlines(e,n){e.direct_downlines.data=n.children},downlineToggleLoader(e){e.direct_downlines.control.loader=!e.direct_downlines.control.loader},downlineControl(e,n){e.direct_downlines.control={...e.direct_downlines.control,...n}}},actions:{async updateAccount(e){let n={};try{n=await o["a"].axios.get("user/profile"),e.commit("updateAccount",n.data)}catch(t){console.log(t)}e.commit("updateAccess")},async profileUpdate(e){let n={};try{n=await o["a"].axios.get("system/profile")}catch(t){console.log(t)}e.commit("updateProfile",n.data)},async downlineUpdate(e){e.commit("downlineToggleLoader");let n={error:!0},t=await o["a"].axios.get("system/matrix");"200"==t.status&&(e.commit("directDownlines",t.data),n.error=!1),n.loaded=!0,e.commit("downlineControl",n),e.commit("downlineToggleLoader")},logOut(e){P.logOut(),e.commit("logOut")},login(e,n){e.commit("logOut"),P.login(n),e.commit("updateAccess")}}});o["a"].use(v["a"]);var x=new v["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",redirect:"/account"},{path:"/login",name:"login",component:()=>Promise.all([t.e("chunk-9fa95230"),t.e("chunk-63609ef2"),t.e("chunk-516d8860"),t.e("chunk-61a66842")]).then(t.bind(null,"013f"))},{path:"/join",component:()=>Promise.all([t.e("chunk-9fa95230"),t.e("chunk-63609ef2"),t.e("chunk-516d8860"),t.e("chunk-51f7c598")]).then(t.bind(null,"e422"))},{path:"/join/:sponsor",name:"join",props:!0,component:()=>Promise.all([t.e("chunk-9fa95230"),t.e("chunk-63609ef2"),t.e("chunk-516d8860"),t.e("chunk-51f7c598")]).then(t.bind(null,"e422"))},{path:"/account",name:"account",beforeEnter:(e,n,t)=>{I.commit("updateAccess");let o=I.getters.auth;if(o){if("lock"==e.name||"payment"==e.name)return void t();let n=I.getters.level;n>0?I.dispatch("profileUpdate").then(()=>{t()}):t({name:"lock"})}else t({name:"login",query:{next:"account"},params:{message:"login to continue"}})},component:()=>Promise.all([t.e("chunk-9fa95230"),t.e("chunk-516d8860"),t.e("chunk-5c513100"),t.e("chunk-5c1e5ce6"),t.e("chunk-45479dbd")]).then(t.bind(null,"8c2d")),children:[{path:"",name:"account_home",component:()=>Promise.all([t.e("chunk-9fa95230"),t.e("chunk-63609ef2"),t.e("chunk-5c513100"),t.e("chunk-474b8cf1")]).then(t.bind(null,"3772"))},{path:"matrix",name:"my_feeds",component:()=>Promise.all([t.e("chunk-9fa95230"),t.e("chunk-63609ef2"),t.e("chunk-5c513100"),t.e("chunk-5c1e5ce6"),t.e("chunk-952cef58")]).then(t.bind(null,"5046"))},{path:"profile",name:"profile",component:()=>Promise.all([t.e("chunk-9fa95230"),t.e("chunk-63609ef2"),t.e("chunk-516d8860"),t.e("chunk-5c513100"),t.e("chunk-2107a91a")]).then(t.bind(null,"488c"))},{path:"wallet",name:"wallet",component:()=>Promise.all([t.e("chunk-9fa95230"),t.e("chunk-63609ef2"),t.e("chunk-516d8860"),t.e("chunk-5c513100"),t.e("chunk-30134283")]).then(t.bind(null,"de02"))},{path:"lock",name:"lock",component:()=>Promise.all([t.e("chunk-9fa95230"),t.e("chunk-ee998c14")]).then(t.bind(null,"7d40"))},{path:"payment",name:"payment",component:()=>Promise.all([t.e("chunk-9fa95230"),t.e("chunk-516d8860"),t.e("chunk-69b1fd2b")]).then(t.bind(null,"bb4f"))},{path:"about",name:"about",component:()=>Promise.all([t.e("chunk-9fa95230"),t.e("chunk-63609ef2"),t.e("chunk-01b2d3d6")]).then(t.bind(null,"b27b"))}]}]});t("d5e8"),t("15f5");o["a"].config.productionTip=!1,new o["a"]({router:x,store:I,vuetify:i,render:e=>e(y)}).$mount("#app"),o["a"].axios.interceptors.response.use(e=>e,e=>{return"401"==e.response.status&&x.replace({path:"/login",params:{message:"it seems you were logged out automatically, please login to continue"}}),Promise.reject(e)})}});
//# sourceMappingURL=app.04916035.js.map