webpackJsonp([6],{"162o":function(e,t,i){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function s(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new s(a.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new s(a.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},i("mypn"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(t,i("DuR2"))},"8dBt":function(e,t){},mypn:function(e,t,i){(function(e,t){!function(e,i){"use strict";if(!e.setImmediate){var n,a,s,o,r,c=1,l={},u=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick(function(){h(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,i=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=i,t}}()?e.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){h(e.data)},n=function(e){s.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(a=d.documentElement,n=function(e){var t=d.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):n=function(e){setTimeout(h,0,e)}:(o="setImmediate$"+Math.random()+"$",r=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&h(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),n=function(t){e.postMessage(o+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),i=0;i<t.length;i++)t[i]=arguments[i+1];var a={callback:e,args:t};return l[c]=a,n(c),c++},f.clearImmediate=m}function m(e){delete l[e]}function h(e){if(u)setTimeout(h,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(i,n)}}(t)}finally{m(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,i("DuR2"),i("W2nU"))},uxuc:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("Au9i"),a=i("6GP+"),s=i.n(a),o=i("162o"),r={data:function(){return{newsList:[],routeName:"",api:"",loading:"",pn:1,isLoading:!0,over:!1}},methods:{getNews:function(){var e=this,t=this.$route.query.type;1==t?(this.routeName="信工新闻眼",this.api="getNewsEyes"):2==t?(this.routeName="政治学习",this.api="getPoliticaLearn"):3==t?(this.routeName="党建一点通",this.api="getMadeEasy"):4==t?(this.routeName="党员亮身份",this.api="getShowID"):5==t?(this.routeName="随时随地学",this.api="getStydy"):6==t?(this.routeName="随时随地拍",this.api="getPic"):7==t?(this.routeName="制度建设",this.api="getSystem"):8==t?(this.routeName="特色活动",this.api="getSpecialActivity"):(this.routeName="通知早知道",this.api="getInform"),this.$axios.get(this.api,{pn:this.$route.query.pn}).then(function(t){for(var i=0;i<t.data.length;i++)t.data[i].createTime=s()(t.data[i].createTime);e.newsList=t.data,e.$nextTick(function(){e.isLoading=!1})})},goDetail:function(e){this.$router.push({path:"/news/detail",query:{id:e}})},loadMore:function(){var e=this;this.isLoading||(this.loading=!0,this.pn++,this.$axios.get("getNewsEyes",{pn:this.pn}).then(function(t){t.data[0]?(n.Indicator.open(),Object(o.setTimeout)(function(){for(var i=0;i<t.data.length;i++)t.data[i].createTime=s()(t.data[i].createTime),n.Indicator.close(),e.newsList.push(t.data[i])},2500),e.loading=!1):(e.over=!0,console.log(11111111))}))}},created:function(){this.getNews()}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"news"},[i("h2",{staticClass:"header"},[e._v("\n      "+e._s(e.routeName)+"\n  ")]),e._v(" "),i("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":e.loading,"infinite-scroll-distance":10,"infinite-scroll-listen-for-event":""}},e._l(e.newsList,function(t){return i("li",{key:t._id,staticClass:"clear",on:{click:function(i){e.goDetail(t._id)}}},[i("img",{attrs:{src:t.img,alt:""}}),e._v(" "),i("div",{staticClass:"item"},[i("h3",[e._v(e._s(t.title))]),e._v(" "),i("p",{staticClass:"time"},[e._v(e._s(t.createTime)+" "),i("span",[i("i",{staticClass:"iconfont icon-eyes"}),e._v(e._s(t.view))])])])])})),e._v(" "),1==e.over?i("p",{staticClass:"no-more"},[e._v("没有更多数据了...")]):e._e()])},staticRenderFns:[]};var l=i("VU/8")(r,c,!1,function(e){i("8dBt")},"data-v-52c1a9d6",null);t.default=l.exports}});
//# sourceMappingURL=6.ef660f83f6fe04419ada.js.map