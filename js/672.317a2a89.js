"use strict";(self["webpackChunkvue_music"]=self["webpackChunkvue_music"]||[]).push([[672],{1053:function(t,s,a){a.d(s,{Z:function(){return o}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"list"},[s("ul",t._l(t.albums,(function(a,l){return s("li",{key:l},[s("router-link",{attrs:{to:`/album/${a.id}`}},[s("el-image",{attrs:{src:a.blurPicUrl,lazy:""}}),s("span",{staticClass:"name"},[t._v(t._s(a.name))]),s("span",{staticClass:"time"},[t._v(t._s(t._f("dateFormat")(a.publishTime)))])],1)],1)})),0)])},e=[],r={props:["albums"]},n=r,i=a(1001),u=(0,i.Z)(n,l,e,!1,null,"1a61d4f2",null),o=u.exports},8466:function(t,s,a){a.d(s,{Z:function(){return o}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"list"},[s("ul",t._l(t.artists,(function(a,l){return s("li",{key:l},[s("router-link",{attrs:{to:`/artist/${a.id}`}},[s("el-image",{attrs:{src:a.img1v1Url,lazy:""}}),s("span",[t._v(t._s(a.name))])],1)],1)})),0)])},e=[],r={props:["artists"]},n=r,i=a(1001),u=(0,i.Z)(n,l,e,!1,null,"fa1b2008",null),o=u.exports},5275:function(t,s,a){a.d(s,{Z:function(){return o}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"list"},[s("ul",t._l(t.playlists,(function(a,l){return s("li",{key:l},[s("router-link",{attrs:{to:`/playlist/${a.id}`}},[s("el-image",{attrs:{src:a.coverImgUrl,lazy:""}}),"toplist"!==t.kind?s("span",[t._v(t._s(a.name))]):t._e()],1)],1)})),0)])},e=[],r={props:["playlists","kind"]},n=r,i=a(1001),u=(0,i.Z)(n,l,e,!1,null,"23d4b6a8",null),o=u.exports},6425:function(t,s,a){a.d(s,{Z:function(){return o}});var l=function(){var t=this,s=t._self._c;return s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.songs}},[s("el-table-column",{attrs:{type:"index",label:"#"}}),s("el-table-column",{attrs:{width:"50px"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("button",{attrs:{type:"button"},on:{click:function(s){return t.play(a.row)}}},[s("i",{staticClass:"el-icon-video-play"})])]}}])}),s("el-table-column",{attrs:{prop:"name",label:"歌曲"}}),s("el-table-column",{attrs:{label:"歌手"},scopedSlots:t._u([{key:"default",fn:function(a){return t._l(a.row.ar,(function(a,l){return s("router-link",{key:l,attrs:{to:`/artist/${a.id}`}},[t._v(t._s(a.name)+" ")])}))}}])}),s("el-table-column",{attrs:{label:"专辑"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("router-link",{attrs:{to:`/album/${a.row.al.id}`}},[t._v(t._s(a.row.al.name)+" ")])]}}])}),s("el-table-column",{attrs:{label:"时长"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",[t._v(t._s(t._f("timeFormat")(a.row.dt)))])]}}])})],1)},e=[],r={props:["songs"],methods:{play(t){this.$store.commit("setSingleList",t)}}},n=r,i=a(1001),u=(0,i.Z)(n,l,e,!1,null,"3758d1ac",null),o=u.exports},9672:function(t,s,a){a.r(s),a.d(s,{default:function(){return m}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("el-tabs",{attrs:{value:"first",stretch:""}},[s("el-tab-pane",{attrs:{label:"相关歌曲",name:"first"}},[s("SongsTable",{attrs:{songs:t.songs}})],1),s("el-tab-pane",{attrs:{label:"相关歌手",name:"second"}},[s("ArtistsList",{attrs:{artists:t.artists}})],1),s("el-tab-pane",{attrs:{label:"相关专辑",name:"third"}},[s("AlbumsList",{attrs:{albums:t.albums}})],1),s("el-tab-pane",{attrs:{label:"相关歌单",name:"fourth"}},[s("PlaylistsList",{attrs:{playlists:t.playlists}})],1)],1)],1)},e=[],r=a(1053),n=a(8466),i=a(5275),u=a(6425),o={components:{AlbumsList:r.Z,ArtistsList:n.Z,PlaylistsList:i.Z,SongsTable:u.Z},props:["keywords"],data(){return{songs:[],artists:[],playlists:[],albums:[]}},methods:{async getSongs(){const{data:t}=await this.$http.get("/cloudsearch",{params:{keywords:this.keywords,type:"1"}});this.songs=t.result.songs},async getArtists(){const{data:t}=await this.$http.get("/cloudsearch",{params:{keywords:this.keywords,type:"100"}});this.artists=t.result.artists},async getAlbums(){const{data:t}=await this.$http.get("/cloudsearch",{params:{keywords:this.keywords,type:"10"}});this.albums=t.result.albums},async getPlaylists(){const{data:t}=await this.$http.get("/cloudsearch",{params:{keywords:this.keywords,type:"1000"}});this.playlists=t.result.playlists}},created(){this.getSongs(),this.getArtists(),this.getAlbums(),this.getPlaylists()},watch:{keywords:{handler(){this.getSongs(),this.getArtists(),this.getAlbums(),this.getPlaylists()}}}},c=o,p=a(1001),d=(0,p.Z)(c,l,e,!1,null,"d22ae8f2",null),m=d.exports}}]);
//# sourceMappingURL=672.317a2a89.js.map