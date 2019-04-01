(function(t){function e(e){for(var o,a,s=e[0],l=e[1],r=e[2],b=0,f=[];b<s.length;b++)a=s[b],c[a]&&f.push(c[a][0]),c[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==c[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},c={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/blockchain-demo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var r=0;r<s.length;r++)e(s[r]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1cdd":function(t,e,n){},3436:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Blockchain")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blockchain"},[n("b-navbar",{attrs:{type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("Blockchain Demo")]),n("b-navbar-nav",{staticClass:"ml-auto"},[n("ResetBlockchain")],1)],1),t._l(t.blockList,function(t,e){return n("div",{key:e,attrs:{id:"blocks"}},[n("Block",{attrs:{blockNum:e}})],1)}),n("AddBlock")],2)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"block"},[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",[t._v("Data:")]),n("b-col",{attrs:{cols:"9"}},[n("b-form-input",{attrs:{type:"text"},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}})],1)],1),n("b-row",[n("b-col",[t._v("Previous hash:")]),n("b-col",{staticClass:"hex",class:{invalid:!t.previousHashIsValid,valid:t.previousHashIsValid},attrs:{cols:"9"}},[t._v(t._s(t.block.prevHash))])],1),n("b-row",[n("b-col",[t._v("Hash:")]),n("b-col",{staticClass:"hex",class:{invalid:!t.valid,valid:t.valid},attrs:{cols:"9"}},[t._v(t._s(t.block.hash))])],1),n("b-row",[n("b-col",[t._v(t._s(t.block.timestamp.toLocaleString()))]),n("b-col",{staticClass:"text-right"},[t.valid?n("div",[t._v(t._s(t.block.nonce))]):n("div",[n("b-button",{staticClass:"remine",on:{click:t.remine}},[t._v("⛏️")])],1)])],1)],1)],1)},r=[],u=(n("c5f6"),{name:"Block",props:{blockNum:Number},computed:{block:{get:function(){return this.$store.getters.block(this.blockNum)}},data:{get:function(){return this.block.data},set:function(t){this.$store.commit("updateBlockData",{blockNum:this.blockNum,data:t})}},valid:function(){return this.$store.getters.isBlockValid(this.blockNum)},previousHashIsValid:function(){return this.$store.getters.previousHashIsValid(this.blockNum)}},methods:{remine:function(){this.$store.commit("remineBlock",this.blockNum)}}}),b=u,f=(n("c3de"),n("2877")),d=Object(f["a"])(b,l,r,!1,null,"577c40e2",null),k=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"block"},[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",[t._v("Data:")]),n("b-col",{attrs:{cols:"9"}},[n("b-form-input",{attrs:{type:"text",placeholder:"Enter data for next block"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addBlock(e)}},model:{value:t.newBlockData,callback:function(e){t.newBlockData=e},expression:"newBlockData"}})],1)],1),n("b-row",[n("b-col"),n("b-col",[n("button",{staticClass:"addBlock",on:{click:t.addBlock}},[t._v("+ ADD NEW BLOCK")])])],1)],1)],1)},p=[],v={name:"AddBlock",computed:{newBlockData:{get:function(){return this.$store.state.newBlockData},set:function(t){this.$store.commit("setNewBlockData",t)}}},data:function(){return{tempData:""}},methods:{addBlock:function(){this.$store.commit("addNewBlock")}}},m=v,L=(n("d450"),Object(f["a"])(m,h,p,!1,null,null,null)),_=L.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{attrs:{id:"difficulty_level"}},[t._v("difficulty level:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.difficulty,expression:"difficulty"}],staticClass:"difficulty",attrs:{type:"text"},domProps:{value:t.difficulty},on:{input:function(e){e.target.composing||(t.difficulty=e.target.value)}}}),n("b-button",{attrs:{id:"reset_btn"},on:{click:t.reset}},[t._v("Reset Blockchain")])],1)},g=[],B=n("e814"),w=n.n(B),D={name:"ResetBlockchain",data:function(){return{difficulty:2}},methods:{reset:function(){this.$store.commit("updateDifficulty",w()(this.difficulty)),this.$store.commit("reset")}}},x=D,$=(n("f146"),Object(f["a"])(x,y,g,!1,null,null,null)),E=$.exports,N={components:{Block:k,AddBlock:_,ResetBlockchain:E},computed:{blockList:function(){return this.$store.getters.blockList}},beforeMount:function(){this.$store.commit("reset")}},O=N,H=Object(f["a"])(O,a,s,!1,null,"60ed7bb9",null),j=H.exports,C={name:"app",components:{Blockchain:j}},S=C,A=Object(f["a"])(S,c,i,!1,null,null,null),P=A.exports,V=n("9f7b"),I=n.n(V),M=(n("14b9"),n("f499")),R=n.n(M),F=(n("6b54"),n("2f62"));function J(t){for(var e="",n=0;n<t.length;n++)e+=t.charCodeAt(n).toString(16);return e}function T(t){var e={data:t.data,prevHash:t.prevHash,timestamp:t.timestamp,nonce:t.nonce},n=R()(e),o=J(n);return ethers.utils.keccak256("0x"+o)}function G(t,e){var n="0",o={data:t.data,timestamp:t.timestamp,previous_hash:t.previous_hash,nonce:t.nonce},c=JSON.parse(R()(o)),i=0;c["nonce"]=i;var a=T(c);while(a.substring(2,e+2)!==n.repeat(e))i++,c["nonce"]=i,a=T(c);return t.hash=a,i}o["a"].use(F["a"]);var K=new F["a"].Store({state:{newBlockData:"",blockList:[],bc_difficulty:2},getters:{difficulty:function(t){return t.bc_difficulty},blockList:function(t){return t.blockList},block:function(t){return function(e){return t.blockList[e]}},isBlockValid:function(t){return function(e){var n=t.blockList[e].hash;return n.substring(2,t.bc_difficulty+2)==="0".repeat(t.bc_difficulty)}},previousHashIsValid:function(t){return function(e){return!(e>0&&e<t.blockList.length)||t.blockList[e].prevHash===t.blockList[e-1].hash&&t.blockList[e].prevHash.substring(2,t.bc_difficulty+2)==="0".repeat(t.bc_difficulty)}}},mutations:{updateDifficulty:function(t,e){t.bc_difficulty=e},updateBlockData:function(t,e){var n=e.data,o=e.blockNum;for(t.blockList[o].data=n,t.blockList[o].hash=T(t.blockList[o]),o++;o<t.blockList.length;o++)t.blockList[o].prevHash=t.blockList[o-1].hash,t.blockList[o].hash=T(t.blockList[o])},remineBlock:function(t,e){t.blockList[e].nonce=G(t.blockList[e],t.bc_difficulty),e>=0&&e<t.blockList.length-1&&(t.blockList[e+1].prevHash=t.blockList[e].hash,t.blockList[e+1].hash=T(t.blockList[e]))},addNewBlock:function(t){t.blockList.push({data:t.newBlockData,prevHash:t.blockList[t.blockList.length-1].hash,hash:"0xDEADBEEF",timestamp:new Date,nonce:0}),t.newBlockData="",t.blockList[t.blockList.length-1].hash=T(t.blockList[t.blockList.length-1]),t.blockList[t.blockList.length-1].nonce=G(t.blockList[t.blockList.length-1],t.bc_difficulty)},reset:function(t){t.blockList=[{data:"Genesis block data",prevHash:"0xDEADBEEF",hash:"0xDEADBEEF",timestamp:new Date,nonce:0}],t.blockList[t.blockList.length-1].hash=T(t.blockList[t.blockList.length-1]),t.blockList[t.blockList.length-1].nonce=G(t.blockList[t.blockList.length-1],t.bc_difficulty)},setNewBlockData:function(t,e){t.newBlockData=e}}});n("f9e3"),n("2dd8");o["a"].config.productionTip=!1,o["a"].use(I.a),new o["a"]({store:K,render:function(t){return t(P)}}).$mount("#app")},"9d5d":function(t,e,n){},c3de:function(t,e,n){"use strict";var o=n("3436"),c=n.n(o);c.a},d450:function(t,e,n){"use strict";var o=n("9d5d"),c=n.n(o);c.a},f146:function(t,e,n){"use strict";var o=n("1cdd"),c=n.n(o);c.a}});
//# sourceMappingURL=app.384cc3c7.js.map