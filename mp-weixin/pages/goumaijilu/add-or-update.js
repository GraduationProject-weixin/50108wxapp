(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goumaijilu/add-or-update"],{"3b40":function(n,i,e){"use strict";var t=e("865e"),a=e.n(t);a.a},"483b":function(n,i,e){"use strict";(function(n){e("7495"),e("921b");t(e("66fd"));var i=t(e("84a5"));function t(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},7914:function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,i,e,t,a,r,u){try{var o=n[r](u),s=o.value}catch(h){return void e(h)}o.done?i(s):Promise.resolve(s).then(t,a)}function u(n){return function(){var i=this,e=arguments;return new Promise((function(t,a){var u=n.apply(i,e);function o(n){r(u,t,a,o,s,"next",n)}function s(n){r(u,t,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("bab1"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{goumaidanhao:this.getUUID(),shangpinbianhao:"",shangpinmingcheng:"",shangpinleibie:"",tupian:"",chushoudanjia:"",goumaishuliang:"",goumaizongjia:"",goumaishijian:"",yonghuming:"",xingming:"",beizhu:"",ispay:"",userid:""},shangpinbianhaoOptions:[],shangpinbianhaoIndex:0,user:{},ro:{goumaidanhao:!1,shangpinbianhao:!1,shangpinmingcheng:!1,shangpinleibie:!1,tupian:!1,chushoudanjia:!1,goumaishuliang:!1,goumaizongjia:!1,goumaishijian:!1,yonghuming:!1,xingming:!1,beizhu:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{goumaizongjia:{get:function(){return 1*this.ruleForm.chushoudanjia*this.ruleForm.goumaishuliang}}},onLoad:function(){var i=u(t.default.mark((function i(e){var a,r,u,o;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=n.getStorageSync("nowTable"),i.next=3,this.$api.session(a);case 3:return r=i.sent,this.user=r.data,this.ruleForm.yonghuming=this.user.yonghuming,this.ruleForm.xingming=this.user.xingming,i.next=9,this.$api.option("shangpinxinxi","shangpinbianhao",{});case 9:if(r=i.sent,this.shangpinbianhaoOptions=r.data,this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=19;break}return this.ruleForm.id=e.id,i.next=17,this.$api.info("goumaijilu",this.ruleForm.id);case 17:r=i.sent,this.ruleForm=r.data;case 19:if(!e.cross){i.next=78;break}u=n.getStorageSync("crossObj"),i.t0=t.default.keys(u);case 22:if((i.t1=i.t0()).done){i.next=78;break}if(o=i.t1.value,"goumaidanhao"!=o){i.next=28;break}return this.ruleForm.goumaidanhao=u[o],this.ro.goumaidanhao=!0,i.abrupt("continue",22);case 28:if("shangpinbianhao"!=o){i.next=32;break}return this.ruleForm.shangpinbianhao=u[o],this.ro.shangpinbianhao=!0,i.abrupt("continue",22);case 32:if("shangpinmingcheng"!=o){i.next=36;break}return this.ruleForm.shangpinmingcheng=u[o],this.ro.shangpinmingcheng=!0,i.abrupt("continue",22);case 36:if("shangpinleibie"!=o){i.next=40;break}return this.ruleForm.shangpinleibie=u[o],this.ro.shangpinleibie=!0,i.abrupt("continue",22);case 40:if("tupian"!=o){i.next=44;break}return this.ruleForm.tupian=u[o],this.ro.tupian=!0,i.abrupt("continue",22);case 44:if("chushoudanjia"!=o){i.next=48;break}return this.ruleForm.chushoudanjia=u[o],this.ro.chushoudanjia=!0,i.abrupt("continue",22);case 48:if("goumaishuliang"!=o){i.next=52;break}return this.ruleForm.goumaishuliang=u[o],this.ro.goumaishuliang=!0,i.abrupt("continue",22);case 52:if("goumaizongjia"!=o){i.next=56;break}return this.ruleForm.goumaizongjia=u[o],this.ro.goumaizongjia=!0,i.abrupt("continue",22);case 56:if("goumaishijian"!=o){i.next=60;break}return this.ruleForm.goumaishijian=u[o],this.ro.goumaishijian=!0,i.abrupt("continue",22);case 60:if("yonghuming"!=o){i.next=64;break}return this.ruleForm.yonghuming=u[o],this.ro.yonghuming=!0,i.abrupt("continue",22);case 64:if("xingming"!=o){i.next=68;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,i.abrupt("continue",22);case 68:if("beizhu"!=o){i.next=72;break}return this.ruleForm.beizhu=u[o],this.ro.beizhu=!0,i.abrupt("continue",22);case 72:if("userid"!=o){i.next=76;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,i.abrupt("continue",22);case 76:i.next=22;break;case 78:this.styleChange();case 79:case"end":return i.stop()}}),i,this)})));function e(n){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shangpinbianhaoChange:function(){var n=u(t.default.mark((function n(i){var e;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.shangpinbianhaoIndex=i.target.value,this.ruleForm.shangpinbianhao=this.shangpinbianhaoOptions[this.shangpinbianhaoIndex],n.next=4,this.$api.follow("shangpinxinxi","shangpinbianhao",{columnValue:this.ruleForm.shangpinbianhao});case 4:e=n.sent,e.data.shangpinmingcheng&&(this.ruleForm.shangpinmingcheng=e.data.shangpinmingcheng),e.data.shangpinleibie&&(this.ruleForm.shangpinleibie=e.data.shangpinleibie),e.data.chushoudanjia&&(this.ruleForm.chushoudanjia=e.data.chushoudanjia);case 8:case"end":return n.stop()}}),n,this)})));function i(i){return n.apply(this,arguments)}return i}(),goumaishijianChange:function(n){this.ruleForm.goumaishijian=n.target.value,this.$forceUpdate()},tupianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.tupian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.goumaizongjia=this.goumaizongjia,this.ruleForm.goumaidanhao){n.next=4;break}return this.$utils.msg("购买单号不能为空"),n.abrupt("return");case 4:if(this.ruleForm.shangpinbianhao){n.next=7;break}return this.$utils.msg("商品编号不能为空"),n.abrupt("return");case 7:if(!this.ruleForm.chushoudanjia||this.$validate.isIntNumer(this.ruleForm.chushoudanjia)){n.next=10;break}return this.$utils.msg("出售单价应输入整数"),n.abrupt("return");case 10:if(!this.ruleForm.goumaishuliang||this.$validate.isIntNumer(this.ruleForm.goumaishuliang)){n.next=13;break}return this.$utils.msg("购买数量应输入整数"),n.abrupt("return");case 13:if(!this.ruleForm.goumaizongjia||this.$validate.isIntNumer(this.ruleForm.goumaizongjia)){n.next=16;break}return this.$utils.msg("购买总价应输入整数"),n.abrupt("return");case 16:if(!this.ruleForm.id){n.next=21;break}return n.next=19,this.$api.update("goumaijilu",this.ruleForm);case 19:n.next=23;break;case 21:return n.next=23,this.$api.add("goumaijilu",this.ruleForm);case 23:this.$utils.msgBack("提交成功");case 24:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};i.default=s}).call(this,e("543d")["default"])},"84a5":function(n,i,e){"use strict";e.r(i);var t=e("dd40"),a=e("bbda");for(var r in a)"default"!==r&&function(n){e.d(i,n,(function(){return a[n]}))}(r);e("3b40");var u,o=e("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"6fe62700",null,!1,t["a"],u);i["default"]=s.exports},"865e":function(n,i,e){},bbda:function(n,i,e){"use strict";e.r(i);var t=e("7914"),a=e.n(t);for(var r in t)"default"!==r&&function(n){e.d(i,n,(function(){return t[n]}))}(r);i["default"]=a.a},dd40:function(n,i,e){"use strict";var t,a=function(){var n=this,i=n.$createElement;n._self._c},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return t}))}},[["483b","common/runtime","common/vendor"]]]);