webpackJsonp([18],{INLc:function(t,e){},MsLi:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mtWM"),i=a.n(n),s={data:function(){return{info:{headerImg:"",name:"",idNum:"",sex:"",politicsStatus:""},token:""}},methods:{getInfo:function(){var t=this;this.$axios.get("getInfo").then(function(e){t.info=e.data})},getToken:function(){var t=this;this.$axios.qiniuGet().then(function(e){t.token=e.data})},upload:function(t){var e=this,a=t.target.files[0],n=new FormData;n.append("file",a),n.append("token",this.token),i.a.post("https://upload-z1.qiniup.com",n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){e.info.headerImg="http://image.yaojunrong.com/"+t.data.key})},update:function(){var t=this;this.$axios.post("updateInfo",this.info).then(function(e){e.ret&&t.$router.push("/info")})}},created:function(){this.getInfo(),this.getToken()}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("div",{staticClass:"btn"},[a("div",{on:{click:t.update}},[t._v("保存")])]),t._v(" "),a("ul",[a("li",[a("span",{staticClass:"left"},[t._v("头像")]),t._v(" "),a("label",{staticClass:"pic"},[a("input",{staticClass:"file",attrs:{type:"file",name:"file"},on:{change:t.upload}}),t._v(" "),a("img",{staticClass:"pic",attrs:{src:t.info.headerImg,alt:""}})])]),t._v(" "),a("li",[a("span",{staticClass:"left"},[t._v("姓名")]),t._v(" "),a("span",{staticClass:"right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.name,expression:"info.name"}],attrs:{type:"text"},domProps:{value:t.info.name},on:{input:function(e){e.target.composing||t.$set(t.info,"name",e.target.value)}}})])]),t._v(" "),a("li",[a("span",{staticClass:"left"},[t._v("身份证号")]),t._v(" "),a("span",{staticClass:"right"},[t._v(t._s(t.info.idNum))])]),t._v(" "),a("li",[a("span",{staticClass:"left"},[t._v("性别")]),t._v(" "),a("span",{staticClass:"right"},[a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.sex,expression:"info.sex"}],attrs:{value:"男",name:"radio",type:"radio"},domProps:{checked:t._q(t.info.sex,"男")},on:{change:function(e){t.$set(t.info,"sex","男")}}}),t._v(" "),t._m(0),t._v("男                                        \n                ")]),t._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info.sex,expression:"info.sex"}],attrs:{value:"女",name:"radio",type:"radio"},domProps:{checked:t._q(t.info.sex,"女")},on:{change:function(e){t.$set(t.info,"sex","女")}}}),t._v(" "),t._m(1),t._v("女                                      \n                ")])])]),t._v(" "),a("li",[a("span",{staticClass:"left"},[t._v("政治面貌")]),t._v(" "),a("span",{staticClass:"right"},[a("label",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.info.politicsStatus,expression:"info.politicsStatus"}],attrs:{name:"",id:"select"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.info,"politicsStatus",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"党员"}},[t._v("党员")]),t._v(" "),a("option",{attrs:{value:"预备党员"}},[t._v("预备党员")]),t._v(" "),a("option",{attrs:{value:"积极分子"}},[t._v("积极分子")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"sex"},[e("i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"sex"},[e("i")])}]};var l=a("VU/8")(s,o,!1,function(t){a("INLc")},"data-v-60aea03c",null);e.default=l.exports}});
//# sourceMappingURL=18.4048b46c70e65bb9c0f7.js.map