(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29b10b56"],{"1dde":function(e,r,t){var n=t("d039"),o=t("b622"),a=t("2d00"),c=o("species");e.exports=function(e){return a>=51||!n((function(){var r=[],t=r.constructor={};return t[c]=function(){return{foo:1}},1!==r[e](Boolean).foo}))}},"65f0":function(e,r,t){var n=t("861d"),o=t("e8b5"),a=t("b622"),c=a("species");e.exports=function(e,r){var t;return o(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)?n(t)&&(t=t[c],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===r?0:r)}},8418:function(e,r,t){"use strict";var n=t("c04e"),o=t("9bf2"),a=t("5c6c");e.exports=function(e,r,t){var c=n(r);c in e?o.f(e,c,a(0,t)):e[c]=t}},"99af":function(e,r,t){"use strict";var n=t("23e7"),o=t("d039"),a=t("e8b5"),c=t("861d"),s=t("7b0b"),i=t("50c4"),u=t("8418"),d=t("65f0"),f=t("1dde"),l=t("b622"),p=t("2d00"),b=l("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",g=p>=51||!o((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),h=f("concat"),w=function(e){if(!c(e))return!1;var r=e[b];return void 0!==r?!!r:a(e)},j=!g||!h;n({target:"Array",proto:!0,forced:j},{concat:function(e){var r,t,n,o,a,c=s(this),f=d(c,0),l=0;for(r=-1,n=arguments.length;r<n;r++)if(a=-1===r?c:arguments[r],w(a)){if(o=i(a.length),l+o>m)throw TypeError(v);for(t=0;t<o;t++,l++)t in a&&u(f,l,a[t])}else{if(l>=m)throw TypeError(v);u(f,l++,a)}return f.length=l,f}})},a55b:function(e,r,t){"use strict";t.r(r);var n=t("7a23"),o={class:"container my-3"},a={class:"row justify-content-center"},c=Object(n["g"])("h1",{class:"h3 mb-3 font-weight-normal"}," 登入頁面 ",-1),s={class:"col-8"},i={class:"form-floating mb-3"},u=Object(n["g"])("label",{for:"username"},"Email address",-1),d={class:"form-floating"},f=Object(n["g"])("label",{for:"password"},"Password",-1),l=Object(n["g"])("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function p(e,r,t,p,b,m){return Object(n["s"])(),Object(n["d"])("div",o,[Object(n["g"])("div",a,[c,Object(n["g"])("div",s,[Object(n["g"])("form",{id:"form",class:"form-signin container",onSubmit:r[3]||(r[3]=Object(n["I"])((function(){return m.login&&m.login.apply(m,arguments)}),["prevent"]))},[Object(n["g"])("div",i,[Object(n["H"])(Object(n["g"])("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":r[1]||(r[1]=function(e){return b.user.username=e})},null,512),[[n["D"],b.user.username]]),u]),Object(n["g"])("div",d,[Object(n["H"])(Object(n["g"])("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":r[2]||(r[2]=function(e){return b.user.password=e})},null,512),[[n["D"],b.user.password]]),f]),l],32)])])])}t("99af");var b={data:function(){return{user:{username:"",password:""}}},methods:{login:function(){var e=this,r="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.$http.post(r,this.user).then((function(r){if(r.data.success){var t=r.data,n=t.token,o=t.expired;document.cookie="hexToken=".concat(n,";expires=").concat(new Date(o),";"),e.$router.push("/admin/products")}else alert(r.data.message)}))}}};b.render=p;r["default"]=b},e8b5:function(e,r,t){var n=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-29b10b56.425132eb.js.map