webpackJsonp([8],{"33Nq":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t("Au9i"),n={data:function(){return{formData:{oldPwd:"",newPwd:"",newPwdAgain:""}}},methods:{changePwd:function(){var e=this;this.$axios.post("changePwd",this.formData).then(function(a){401==a.code?Object(o.Toast)({message:"旧密码输入错误",duration:2e3}):402==a.code?Object(o.Toast)({message:"新密码与旧密码相同",duration:2e3}):403==a.code?Object(o.Toast)({message:"两次输入的新密码不同",duration:2e3}):200==a.code&&(Object(o.MessageBox)("提示","修改成功，请重新登录！"),setTimeout(function(){e.$router.push("/login")},1e3))})}}},s={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"change"},[t("div",{staticClass:"form"},[t("label",[t("span",[e._v("旧密码：")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.oldPwd,expression:"formData.oldPwd"}],attrs:{type:"password"},domProps:{value:e.formData.oldPwd},on:{input:function(a){a.target.composing||e.$set(e.formData,"oldPwd",a.target.value)}}})]),e._v(" "),t("label",[t("span",[e._v("新密码：")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.newPwd,expression:"formData.newPwd"}],attrs:{type:"password"},domProps:{value:e.formData.newPwd},on:{input:function(a){a.target.composing||e.$set(e.formData,"newPwd",a.target.value)}}})]),e._v(" "),t("label",[t("span",[e._v("确认密码：")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.newPwdAgain,expression:"formData.newPwdAgain"}],attrs:{type:"password"},domProps:{value:e.formData.newPwdAgain},on:{input:function(a){a.target.composing||e.$set(e.formData,"newPwdAgain",a.target.value)}}})]),e._v(" "),t("button",{on:{click:e.changePwd}},[e._v("确定")])])])},staticRenderFns:[]};var r=t("VU/8")(n,s,!1,function(e){t("r3Bo")},"data-v-f949e2c6",null);a.default=r.exports},r3Bo:function(e,a){}});
//# sourceMappingURL=8.98f424bf9f84c643d4f9.js.map