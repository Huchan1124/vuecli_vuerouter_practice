(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06ed50ac"],{"1dde":function(e,t,a){var c=a("d039"),n=a("b622"),r=a("2d00"),l=n("species");e.exports=function(e){return r>=51||!c((function(){var t=[],a=t.constructor={};return a[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,a){var c=a("861d"),n=a("e8b5"),r=a("b622"),l=r("species");e.exports=function(e,t){var a;return n(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?c(a)&&(a=a[l],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},8418:function(e,t,a){"use strict";var c=a("c04e"),n=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var l=c(t);l in e?n.f(e,l,r(0,a)):e[l]=a}},"99af":function(e,t,a){"use strict";var c=a("23e7"),n=a("d039"),r=a("e8b5"),l=a("861d"),o=a("7b0b"),s=a("50c4"),i=a("8418"),u=a("65f0"),d=a("1dde"),b=a("b622"),f=a("2d00"),m=b("isConcatSpreadable"),g=9007199254740991,O="Maximum allowed index exceeded",j=f>=51||!n((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),p=d("concat"),h=function(e){if(!l(e))return!1;var t=e[m];return void 0!==t?!!t:r(e)},v=!j||!p;c({target:"Array",proto:!0,forced:v},{concat:function(e){var t,a,c,n,r,l=o(this),d=u(l,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(r=-1===t?l:arguments[t],h(r)){if(n=s(r.length),b+n>g)throw TypeError(O);for(a=0;a<n;a++,b++)a in r&&i(d,b,r[a])}else{if(b>=g)throw TypeError(O);i(d,b++,r)}return d.length=b,d}})},b0c0:function(e,t,a){var c=a("83ab"),n=a("9bf2").f,r=Function.prototype,l=r.toString,o=/^\s*function ([^ (]*)/,s="name";c&&!(s in r)&&n(r,s,{configurable:!0,get:function(){try{return l.call(this).match(o)[1]}catch(e){return""}}})},b789:function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),n={class:"container text-end"},r={class:"container table align-middle"},l=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th"),Object(c["g"])("th",null,"品名"),Object(c["g"])("th",{style:{width:"150px"}},"數量/單位"),Object(c["g"])("th",null,"單價")])],-1),o=Object(c["g"])("i",{class:"fas fa-spinner fa-pulse"},null,-1),s=Object(c["f"])(" x "),i=Object(c["g"])("div",{class:"text-success"}," 已套用優惠券 ",-1),u={class:"input-group input-group-sm"},d={class:"input-group mb-3"},b={class:"input-group-text",id:"basic-addon2"},f={class:"text-end"},m=Object(c["g"])("small",{class:"text-success"},"折扣價：",-1),g=Object(c["g"])("td",{colspan:"3",class:"text-end"},"總計",-1),O={class:"text-end"},j=Object(c["g"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),p={class:"text-end text-success"},h={class:"my-5 row justify-content-center"},v={class:"mb-3"},x=Object(c["g"])("label",{for:"email",class:"form-label"},"Email",-1),y={class:"mb-3"},V=Object(c["g"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),w={class:"mb-3"},C=Object(c["g"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),A={class:"mb-3"},k=Object(c["g"])("label",{for:"address",class:"form-label"},"收件人地址",-1),U={class:"mb-3"},q=Object(c["g"])("label",{for:"message",class:"form-label"},"留言",-1),E=Object(c["g"])("div",{class:"text-end"},[Object(c["g"])("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function F(e,t,a,F,S,$){var B=Object(c["x"])("Field"),_=Object(c["x"])("ErrorMessage"),D=Object(c["x"])("Form");return Object(c["s"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",n,[Object(c["g"])("button",{class:"btn btn-outline-danger my-3",type:"button",onClick:t[1]||(t[1]=function(){return e.deleteAllCarts&&e.deleteAllCarts.apply(e,arguments)})},"清空購物車")]),Object(c["g"])("table",r,[l,Object(c["g"])("tbody",null,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(S.cart.carts,(function(t){return Object(c["s"])(),Object(c["d"])("tr",{key:t.id},[Object(c["g"])("td",null,[Object(c["g"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return $.removeCartItem(t.id)}},[o,s],8,["onClick"])]),Object(c["g"])("td",null,[Object(c["f"])(Object(c["A"])(t.product.title)+" ",1),i]),Object(c["g"])("td",null,[Object(c["g"])("div",u,[Object(c["g"])("div",d,[Object(c["H"])(Object(c["g"])("input",{"onUpdate:modelValue":function(e){return t.qty=e},onBlur:function(a){return e.updateCart(t)},min:"1",type:"number",class:"form-control"},null,40,["onUpdate:modelValue","onBlur"]),[[c["D"],t.qty,void 0,{number:!0}]]),Object(c["g"])("span",b,Object(c["A"])(t.product.unit),1)])])]),Object(c["g"])("td",f,[m,Object(c["f"])(" "+Object(c["A"])(t.final_total),1)])])})),128))]),Object(c["g"])("tfoot",null,[Object(c["g"])("tr",null,[g,Object(c["g"])("td",O,Object(c["A"])(S.cart.total),1)]),Object(c["g"])("tr",null,[j,Object(c["g"])("td",p,Object(c["A"])(S.cart.final_total),1)])])]),Object(c["g"])("div",h,[Object(c["g"])(D,{ref:"form",class:"col-md-6",onSubmit:$.createOrder},{default:Object(c["G"])((function(e){var a=e.errors;return[Object(c["g"])("div",v,[x,Object(c["g"])(B,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":a["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:S.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return S.form.user.email=e})},null,8,["class","modelValue"]),Object(c["g"])(_,{name:"email",class:"invalid-feedback"})]),Object(c["g"])("div",y,[V,Object(c["g"])(B,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:S.form.user.name,"onUpdate:modelValue":t[3]||(t[3]=function(e){return S.form.user.name=e})},null,8,["class","modelValue"]),Object(c["g"])(_,{name:"姓名",class:"invalid-feedback"})]),Object(c["g"])("div",w,[C,Object(c["g"])(B,{id:"tel",name:"電話",type:"text",class:["form-control",{"is-invalid":a["電話"]}],placeholder:"請輸入電話",rules:"required",modelValue:S.form.user.tel,"onUpdate:modelValue":t[4]||(t[4]=function(e){return S.form.user.tel=e})},null,8,["class","modelValue"]),Object(c["g"])(_,{name:"電話",class:"invalid-feedback"})]),Object(c["g"])("div",A,[k,Object(c["g"])(B,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:S.form.user.address,"onUpdate:modelValue":t[5]||(t[5]=function(e){return S.form.user.address=e})},null,8,["class","modelValue"]),Object(c["g"])(_,{name:"地址",class:"invalid-feedback"})]),Object(c["g"])("div",U,[q,Object(c["H"])(Object(c["g"])("textarea",{name:"留言",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[6]||(t[6]=function(e){return S.form.message=e})},null,512),[[c["D"],S.form.message]])]),E]})),_:1},8,["onSubmit"])])],64)}a("99af");var S={name:"Cart",data:function(){return{cart:{},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},created:function(){this.getCart()},methods:{getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("alicialo","/cart");this.$http.get(t).then((function(t){t.data.success?e.cart=t.data.data:alert(t.data.message)})).catch((function(e){console.log(e)}))},removeCartItem:function(e){var t=this,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("alicialo","/cart/").concat(e);this.$http.delete(a).then((function(e){e.data.success?(alert(e.data.message),t.getCart()):alert(e.data.message)})).catch((function(e){console.log(e)}))},createOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("alicialo","/order"),a=this.form;this.$http.post(t,{data:a}).then((function(t){t.data.success?(alert(t.data.message),e.$refs.form.resetForm(),e.form.message="",e.getCart()):alert(t.data.message)})).catch((function(e){console.log(e)}))}}};S.render=F;t["default"]=S},e8b5:function(e,t,a){var c=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==c(e)}}}]);
//# sourceMappingURL=chunk-06ed50ac.95b817a0.js.map