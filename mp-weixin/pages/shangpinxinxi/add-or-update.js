(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinxinxi/add-or-update"],{"401c":function(n,i,t){"use strict";t.r(i);var e=t("8d39"),a=t("d7dc");for(var r in a)"default"!==r&&function(n){t.d(i,n,(function(){return a[n]}))}(r);t("7855");var u,s=t("f0c5"),h=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"3fa49bc8",null,!1,e["a"],u);i["default"]=h.exports},7855:function(n,i,t){"use strict";var e=t("abf1"),a=t.n(e);a.a},"8d39":function(n,i,t){"use strict";var e,a=function(){var n=this,i=n.$createElement;n._self._c},r=[];t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return r})),t.d(i,"a",(function(){return e}))},abf1:function(n,i,t){},bd98:function(n,i,t){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,i,t,e,a,r,u){try{var s=n[r](u),h=s.value}catch(o){return void t(o)}s.done?i(h):Promise.resolve(h).then(e,a)}function u(n){return function(){var i=this,t=arguments;return new Promise((function(e,a){var u=n.apply(i,t);function s(n){r(u,e,a,s,h,"next",n)}function h(n){r(u,e,a,s,h,"throw",n)}s(void 0)}))}}var s=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("bab1"))}.bind(null,t)).catch(t.oe)},h={data:function(){return{ruleForm:{shangpinbianhao:this.getUUID(),shangpinmingcheng:"",shangpinleibie:"",tupian:"",maijiazhanghao:"",maijiaxingming:"",guige:"",pinpai:"",xinjiuchengdu:"",yuanjia:"",chushoudanjia:"",shuliang:"",shangpinmiaoshu:"",thumbsupnum:"",crazilynum:"",clicknum:""},shangpinleibieOptions:[],shangpinleibieIndex:0,maijiazhanghaoOptions:[],maijiazhanghaoIndex:0,maijiaxingmingOptions:[],maijiaxingmingIndex:0,user:{},ro:{shangpinbianhao:!1,shangpinmingcheng:!1,shangpinleibie:!1,tupian:!1,maijiazhanghao:!1,maijiaxingming:!1,guige:!1,pinpai:!1,xinjiuchengdu:!1,yuanjia:!1,chushoudanjia:!1,shuliang:!1,shangpinmiaoshu:!1,thumbsupnum:!1,crazilynum:!1,clicknum:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var i=u(e.default.mark((function i(t){var a,r,u,s;return e.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=n.getStorageSync("nowTable"),i.next=3,this.$api.session(a);case 3:return r=i.sent,this.user=r.data,i.next=7,this.$api.option("shangpinfenlei","shangpinleibie",{});case 7:return r=i.sent,this.shangpinleibieOptions=r.data,i.next=11,this.$api.option("yonghu","yonghuming",{});case 11:return r=i.sent,this.maijiazhanghaoOptions=r.data,i.next=15,this.$api.option("yonghu","xingming",{});case 15:if(r=i.sent,this.maijiaxingmingOptions=r.data,this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){i.next=25;break}return this.ruleForm.id=t.id,i.next=23,this.$api.info("shangpinxinxi",this.ruleForm.id);case 23:r=i.sent,this.ruleForm=r.data;case 25:if(!t.cross){i.next=96;break}u=n.getStorageSync("crossObj"),i.t0=e.default.keys(u);case 28:if((i.t1=i.t0()).done){i.next=96;break}if(s=i.t1.value,"shangpinbianhao"!=s){i.next=34;break}return this.ruleForm.shangpinbianhao=u[s],this.ro.shangpinbianhao=!0,i.abrupt("continue",28);case 34:if("shangpinmingcheng"!=s){i.next=38;break}return this.ruleForm.shangpinmingcheng=u[s],this.ro.shangpinmingcheng=!0,i.abrupt("continue",28);case 38:if("shangpinleibie"!=s){i.next=42;break}return this.ruleForm.shangpinleibie=u[s],this.ro.shangpinleibie=!0,i.abrupt("continue",28);case 42:if("tupian"!=s){i.next=46;break}return this.ruleForm.tupian=u[s],this.ro.tupian=!0,i.abrupt("continue",28);case 46:if("maijiazhanghao"!=s){i.next=50;break}return this.ruleForm.maijiazhanghao=u[s],this.ro.maijiazhanghao=!0,i.abrupt("continue",28);case 50:if("maijiaxingming"!=s){i.next=54;break}return this.ruleForm.maijiaxingming=u[s],this.ro.maijiaxingming=!0,i.abrupt("continue",28);case 54:if("guige"!=s){i.next=58;break}return this.ruleForm.guige=u[s],this.ro.guige=!0,i.abrupt("continue",28);case 58:if("pinpai"!=s){i.next=62;break}return this.ruleForm.pinpai=u[s],this.ro.pinpai=!0,i.abrupt("continue",28);case 62:if("xinjiuchengdu"!=s){i.next=66;break}return this.ruleForm.xinjiuchengdu=u[s],this.ro.xinjiuchengdu=!0,i.abrupt("continue",28);case 66:if("yuanjia"!=s){i.next=70;break}return this.ruleForm.yuanjia=u[s],this.ro.yuanjia=!0,i.abrupt("continue",28);case 70:if("chushoudanjia"!=s){i.next=74;break}return this.ruleForm.chushoudanjia=u[s],this.ro.chushoudanjia=!0,i.abrupt("continue",28);case 74:if("shuliang"!=s){i.next=78;break}return this.ruleForm.shuliang=u[s],this.ro.shuliang=!0,i.abrupt("continue",28);case 78:if("shangpinmiaoshu"!=s){i.next=82;break}return this.ruleForm.shangpinmiaoshu=u[s],this.ro.shangpinmiaoshu=!0,i.abrupt("continue",28);case 82:if("thumbsupnum"!=s){i.next=86;break}return this.ruleForm.thumbsupnum=u[s],this.ro.thumbsupnum=!0,i.abrupt("continue",28);case 86:if("crazilynum"!=s){i.next=90;break}return this.ruleForm.crazilynum=u[s],this.ro.crazilynum=!0,i.abrupt("continue",28);case 90:if("clicknum"!=s){i.next=94;break}return this.ruleForm.clicknum=u[s],this.ro.clicknum=!0,i.abrupt("continue",28);case 94:i.next=28;break;case 96:this.styleChange();case 97:case"end":return i.stop()}}),i,this)})));function t(n){return i.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shangpinleibieChange:function(n){this.shangpinleibieIndex=n.target.value,this.ruleForm.shangpinleibie=this.shangpinleibieOptions[this.shangpinleibieIndex]},maijiazhanghaoChange:function(n){this.maijiazhanghaoIndex=n.target.value,this.ruleForm.maijiazhanghao=this.maijiazhanghaoOptions[this.maijiazhanghaoIndex]},maijiaxingmingChange:function(n){this.maijiaxingmingIndex=n.target.value,this.ruleForm.maijiaxingming=this.maijiaxingmingOptions[this.maijiaxingmingIndex]},tupianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.tupian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(e.default.mark((function n(){return e.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.yuanjia||this.$validate.isIntNumer(this.ruleForm.yuanjia)){n.next=3;break}return this.$utils.msg("原价应输入整数"),n.abrupt("return");case 3:if(!this.ruleForm.chushoudanjia||this.$validate.isIntNumer(this.ruleForm.chushoudanjia)){n.next=6;break}return this.$utils.msg("出售单价应输入整数"),n.abrupt("return");case 6:if(!this.ruleForm.shuliang||this.$validate.isIntNumer(this.ruleForm.shuliang)){n.next=9;break}return this.$utils.msg("数量应输入整数"),n.abrupt("return");case 9:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){n.next=12;break}return this.$utils.msg("赞应输入整数"),n.abrupt("return");case 12:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){n.next=15;break}return this.$utils.msg("踩应输入整数"),n.abrupt("return");case 15:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){n.next=18;break}return this.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 18:if(!this.ruleForm.id){n.next=23;break}return n.next=21,this.$api.update("shangpinxinxi",this.ruleForm);case 21:n.next=25;break;case 23:return n.next=25,this.$api.add("shangpinxinxi",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,t=i.getFullYear(),e=i.getMonth()+1,a=i.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),e=e>9?e:"0"+e,a=a>9?a:"0"+a,"".concat(t,"-").concat(e,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};i.default=h}).call(this,t("543d")["default"])},ca5d:function(n,i,t){"use strict";(function(n){t("7495"),t("921b");e(t("66fd"));var i=e(t("401c"));function e(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,t("543d")["createPage"])},d7dc:function(n,i,t){"use strict";t.r(i);var e=t("bd98"),a=t.n(e);for(var r in e)"default"!==r&&function(n){t.d(i,n,(function(){return e[n]}))}(r);i["default"]=a.a}},[["ca5d","common/runtime","common/vendor"]]]);