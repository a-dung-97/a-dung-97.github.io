(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d0e4621"],{3699:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return i}));var r=a("b775");function n(e){return Object(r["a"])({url:"/leads",method:"get",params:e})}function l(e,t){return Object(r["a"])({url:"/leads/".concat(e),method:"get",params:t})}function s(e){return Object(r["a"])({url:"/leads",method:"post",data:e})}function o(e,t){return Object(r["a"])({url:"/leads/".concat(t),method:"put",data:e})}function i(e,t){return Object(r["a"])({url:"/leads/convert/".concat(t),method:"post",data:e})}},"5df3":function(e,t,a){"use strict";var r=a("02f4")(!0);a("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,a=this._i;return a>=t.length?{value:void 0,done:!0}:(e=r(t,a),this._i+=e.length,{value:e,done:!1})}))},e799:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-card",{staticStyle:{height:"75vh"}},[a("div",{staticStyle:{height:"35.6px"},attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"line-height":"35.6px"}},[e._v("Chuyển đổi tiềm năng")]),e._v(" "),a("el-button",{staticClass:"fr",attrs:{size:"medium",type:"primary"},on:{click:e.convert}},[e._v("Lưu")])],1),e._v(" "),a("p",[e._v("Thêm mới khách hàng: "+e._s(e.customerName))]),e._v(" "),a("p",[e._v("Thêm mới liên hệ: "+e._s(e.contactName))]),e._v(" "),a("el-row",{staticStyle:{"margin-bottom":"30px"}},[a("el-col",{attrs:{span:3}},[e._v("Thêm mới cơ hội")]),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-switch",{model:{value:e.opportunity,callback:function(t){e.opportunity=t},expression:"opportunity"}})],1)],1),e._v(" "),a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeInRight faster","leave-active-class":"animated fadeOutLeft faster"}},[e.opportunity?a("el-row",{attrs:{gutter:30}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"160px"}},[a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Chủ sở hữu",prop:"ownerable_id"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-select",{on:{change:function(t){e.form.ownerable_id=""}},model:{value:e.form.ownerable_type,callback:function(t){e.$set(e.form,"ownerable_type",t)},expression:"form.ownerable_type"}},[a("el-option",{attrs:{value:"App\\User",label:"Nhân viên"}}),e._v(" "),a("el-option",{attrs:{value:"App\\Group",label:"Nhóm"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:18}},[a("el-select",{staticClass:"w-100",attrs:{filterable:"",placeholder:"Chọn chủ sở hữu"},model:{value:e.form.ownerable_id,callback:function(t){e.$set(e.form,"ownerable_id",t)},expression:"form.ownerable_id"}},["App\\User"==e.form.ownerable_type?e._l(e.userOptions,(function(t){return a("el-option",{key:t.id,staticStyle:{"max-height":"100%"},attrs:{label:t.name,value:t.id}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),e._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.email))])])})):e._l(e.groupOptions,(function(t){return a("el-option",{key:t.id,staticStyle:{"max-height":"100%"},attrs:{disabled:0==t.count,label:t.name,value:t.id}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),e._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.count+" nhân viên"))])])}))],2)],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"Tên",prop:"name"}},[a("el-input",{attrs:{placeholder:"Nhập tên"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Kiểu"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Chọn kiểu"},model:{value:e.form.type_id,callback:function(t){e.$set(e.form,"type_id",t)},expression:"form.type_id"}},e._l(e.catalogs["Kiểu"],(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"Bước tiếp theo"}},[a("el-input",{attrs:{placeholder:"Nhập bước tiếp theo"},model:{value:e.form.next_step,callback:function(t){e.$set(e.form,"next_step",t)},expression:"form.next_step"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Trạng thái"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Chọn trạng thái"},model:{value:e.form.status_id,callback:function(t){e.$set(e.form,"status_id",t)},expression:"form.status_id"}},e._l(e.catalogs["Trạng thái"],(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"Ngày kết thúc",prop:"end_date"}},[a("el-date-picker",{staticClass:"w-100",attrs:{type:"date",placeholder:"Chọn ngày kết thúc",format:"dd/MM/yyyy","value-format":"yyyy-MM-dd"},model:{value:e.form.end_date,callback:function(t){e.$set(e.form,"end_date",t)},expression:"form.end_date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Nguồn"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Chọn nguồn"},model:{value:e.form.source_id,callback:function(t){e.$set(e.form,"source_id",t)},expression:"form.source_id"}},e._l(e.catalogs["Nguồn"],(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"Xác suất thành công"}},[a("el-input-number",{staticClass:"w-100",attrs:{placeholder:"Nhập xác suất thành công",precision:2,step:1,max:100,"controls-position":"right"},model:{value:e.form.probability_of_success,callback:function(t){e.$set(e.form,"probability_of_success",t)},expression:"form.probability_of_success"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Giá trị"}},[a("el-input",{attrs:{type:"number",placeholder:"Nhập giá trị"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Doanh số kì vọng"}},[a("el-input",{attrs:{type:"number",placeholder:"Nhập doanh số kì vọng"},model:{value:e.form.expected_sales,callback:function(t){e.$set(e.form,"expected_sales",t)},expression:"form.expected_sales"}})],1)],1)],1)],1):e._e()],1)],1)],1)},n=[],l=(a("ac6a"),a("5df3"),a("7f7f"),a("96cf"),a("3b8d")),s=a("3699"),o={data:function(){return{customerName:"",contactName:"",opportunity:!1,form:{id:"",ownerable_type:"App\\User",ownerable_id:"",name:"",type_id:"",next_step:"",end_date:"",status_id:"",source_id:"",probability_of_success:null,value:"",expected_sales:"",description:""},rules:{ownerable_id:[{required:!0,message:"Hãy chọn chủ sở hữu",trigger:"blur"}],name:[{required:!0,message:"Hãy nhập tên cơ hội",trigger:"blur"}],end_date:[{required:!0,message:"Hãy chọn ngày kết thúc",trigger:"blur"}]},catalogs:{"Kiểu":[],"Nguồn":[],"Trạng thái":[]}}},methods:{getName:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.openFullScreen(),e.next=4,Object(s["c"])(this.$route.params.id,{getName:!0});case 4:t=e.sent,a=t.data,this.customerName=a.company||a.name,this.contactName=a.name,this.closeFullScreen(),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),this.closeFullScreen();case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}(),convert:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!this.opportunity){e.next=4;break}return e.next=4,this.$refs["form"].validate();case 4:return this.openFullScreen(),e.next=7,Object(s["a"])({opportunity:this.opportunity,data:this.form},this.$route.params.id);case 7:t=e.sent,a=t.data,this.closeFullScreen(),this.$router.push("/customer/customer/show/".concat(a.id)),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0),this.closeFullScreen();case 17:case"end":return e.stop()}}),e,this,[[0,13]])})));function t(){return e.apply(this,arguments)}return t}()},created:function(){Promise.all([this.getCatalog("Cơ hội","Kiểu"),this.getCatalog("Cơ hội","Nguồn"),this.getCatalog("Cơ hội","Trạng thái"),this.getUsers(),this.getGroups(),this.getName()])}},i=o,c=a("2877"),u=Object(c["a"])(i,r,n,!1,null,null,null);t["default"]=u.exports}}]);