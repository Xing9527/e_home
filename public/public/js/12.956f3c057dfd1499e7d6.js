webpackJsonp([12],{"5E+k":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{tableData:[]}},methods:{getData:function(){var t=this;this.$axios.get("getSwiper").then(function(e){t.tableData=e.data})},del:function(t){var e=this;this.$confirm("此操作将永久删除该新闻, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post("delSwiper",{id:t}).then(function(t){t.ret?(e.$message({type:"success",message:"删除成功!"}),setTimeout(function(){e.$router.go(0)},1e3)):e.$message.error("删除失败！")})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},edit:function(t){this.$router.push({path:"/swiper/update",query:{id:t}})}},created:function(){this.getData()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{"max-height":"100px"},attrs:{src:t.row.img,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"新闻标题"}}),t._v(" "),a("el-table-column",{attrs:{prop:"path",label:"路由"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"所属新闻分类"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.edit(e.row._id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.del(e.row._id)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var s=a("VU/8")(n,i,!1,function(t){a("kqHu")},"data-v-0b81c6a3",null);e.default=s.exports},kqHu:function(t,e){}});
//# sourceMappingURL=12.956f3c057dfd1499e7d6.js.map