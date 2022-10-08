"use strict";(self["webpackChunkvue_music"]=self["webpackChunkvue_music"]||[]).push([[369],{5275:function(t,e,s){s.d(e,{Z:function(){return o}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"list"},[e("ul",t._l(t.playlists,(function(s,a){return e("li",{key:a},[e("router-link",{attrs:{to:`/playlist/${s.id}`}},[e("el-image",{attrs:{src:s.coverImgUrl,lazy:""}}),"toplist"!==t.kind?e("span",[t._v(t._s(s.name))]):t._e()],1)],1)})),0)])},i=[],r={props:["playlists","kind"]},n=r,l=s(1001),c=(0,l.Z)(n,a,i,!1,null,"23d4b6a8",null),o=c.exports},8369:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"title"},[e("span",[t._v(t._s(t.queryInfo.cat))]),e("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.dialogVisible=!t.dialogVisible}}},[t._v(" 选择分类"),e("i",{staticClass:"el-icon-arrow-down"})])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogVisible,expression:"dialogVisible"}],staticClass:"catelist"},t._l(t.categories,(function(s,a,i){return e("dl",{key:a},[e("dt",[t._v(t._s(t._f("format")(i)))]),e("dd",t._l(s,(function(s,a){return e("button",{key:a,class:{active:s.name===t.queryInfo.cat},on:{click:function(e){return t.handleClick(s.name)}}},[t._v(" "+t._s(s.name)+" ")])})),0)])})),0)]),e("hr"),e("PlaylistsList",{attrs:{playlists:t.playlists}}),e("div",{staticClass:"footer"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.queryInfo.limit,"current-page":t.currentPage},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1)},i=[],r=s(5275),n={components:{PlaylistsList:r.Z},filters:{format(t){switch(t){case 0:return"语种";case 1:return"风格";case 2:return"场景";case 3:return"情感";case 4:return"主题"}}},data(){return{categories:{language:[],style:[],scenes:[],emotion:[],theme:[]},queryInfo:{cat:"全部",limit:30,offset:0},playlists:[],total:0,dialogVisible:!1,currentPage:1}},methods:{async getCategories(){const{data:t}=await this.$http.get("/playlist/catlist");t.sub.forEach((t=>{switch(t.category){case 0:this.categories.language.push(t);break;case 1:this.categories.style.push(t);break;case 2:this.categories.scenes.push(t);break;case 3:this.categories.emotion.push(t);break;case 4:this.categories.theme.push(t);break}}))},async getPlaylists(){const{data:t}=await this.$http.get("/top/playlist",{params:this.queryInfo});this.playlists=t.playlists,this.total=t.total},handleClick(t){this.queryInfo.cat=t,this.currentPage=1,this.queryInfo.offset=0,this.getPlaylists(),this.dialogVisible=!1},handleCurrentChange(){this.queryInfo.offset=(this.currentPage-1)*this.queryInfo.limit,this.getPlaylists()}},created(){this.getCategories(),this.getPlaylists()}},l=n,c=s(1001),o=(0,c.Z)(l,a,i,!1,null,"8da629d4",null),u=o.exports}}]);
//# sourceMappingURL=369.b455c5f4.js.map