(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-688b17da"],{"17d0":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-row",[e.report?l("h3",{staticStyle:{height:"32px","line-height":"32px"}},[e._v("\n            "+e._s(e.title)+" từ ngày "+e._s(e._f("date")(e.report.filter.value[0]))+" đến ngày "+e._s(e._f("date")(e.report.filter.value[1]))+"\n            "),l("el-button",{staticClass:"fr",attrs:{type:"primary",size:"small"},on:{click:function(t){e.showDialog=!0}}},[e._v("Sửa")])],1):e._e()]),e._v(" "),l("el-row",[l("el-table",{attrs:{data:e.tableData}},e._l(e.report.column,(function(t){return l("el-table-column",{key:t,attrs:{prop:t,label:e.options.find((function(e){return e.value==t})).label}})})),1)],1),e._v(" "),l("DialogForm",{attrs:{"show-dialog":e.showDialog,isEdit:!0,data:e.report},on:{reload:function(t){return e.getData()},"update:showDialog":function(t){e.showDialog=t},"update:show-dialog":function(t){e.showDialog=t}}})],1)},o=[],r=(l("96cf"),l("3b8d")),n=l("1b10"),i=l("da9c"),u=l("5983"),s={components:{DialogForm:u["a"]},data:function(){return{showDialog:!1,tableData:[],report:"",title:"",options:""}},methods:{getData:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.openFullScreen(),e.next=4,Object(n["c"])(this.$route.params.id);case 4:t=e.sent,this.tableData=t.data,this.report=t.report,this.title=this.getTitle(this.report),"customer"==this.report.module?this.options=i["a"].customer.concat(i["a"].order).concat(i["a"].quote):"task"==this.report.module?this.options=i["a"].task.concat(i["a"].user):"opportunity"==this.report.module&&(this.options=i["a"].opportunity.concat(i["a"].customer)),this.closeFullScreen(),e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](0);case 14:case"end":return e.stop()}}),e,this,[[0,12]])})));function t(){return e.apply(this,arguments)}return t}(),getTitle:function(){switch(this.report.module){case"customer":return"created_at"==this.report.filter.column?"Ngày tạo khách hàng":"Ngày đặt hàng";case"task":return"Ngày bắt đầu";case"opportunity":return"created_at"==this.report.filter.column?"Ngày tạo khách hàng":"Ngày kết thúc";default:break}}},created:function(){this.getData()}},c=s,m=l("2877"),d=Object(m["a"])(c,a,o,!1,null,null,null);t["default"]=d.exports},"1b10":function(e,t,l){"use strict";l.d(t,"b",(function(){return o})),l.d(t,"c",(function(){return r})),l.d(t,"d",(function(){return n})),l.d(t,"e",(function(){return i})),l.d(t,"a",(function(){return u}));var a=l("b775");function o(e){return Object(a["a"])({url:"/reports",method:"get",params:e})}function r(e){return Object(a["a"])({url:"/reports/".concat(e),method:"get"})}function n(e){return Object(a["a"])({url:"/reports",method:"post",data:e})}function i(e,t){return Object(a["a"])({url:"/reports/".concat(t),method:"put",data:e})}function u(e){return Object(a["a"])({url:"/reports/".concat(e),method:"delete"})}},5983:function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{width:"40%",top:"0vh",center:"",title:this.isEdit?"Chỉnh sửa báo cáo":"Thêm báo cáo","before-close":e.closeDialog,visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t}}},[l("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"150px",model:e.form,rules:e.rules}},[l("el-form-item",{attrs:{label:"Tên báo cáo",prop:"name"}},[l("el-input",{attrs:{label:"Tên báo cáo",placeholder:"Nhập tên báo cáo"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Module",prop:"module"}},[l("el-select",{staticClass:"w-100",attrs:{placeholder:"Chọn module"},on:{clear:function(t){e.form.related="",e.form.column=""}},model:{value:e.form.module,callback:function(t){e.$set(e.form,"module",t)},expression:"form.module"}},[l("el-option",{attrs:{label:"Khách hàng",value:"customer"}}),e._v(" "),l("el-option",{attrs:{label:"Công việc",value:"task"}}),e._v(" "),l("el-option",{attrs:{label:"Cơ hội",value:"opportunity"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"Module liên quan"}},[l("el-select",{staticClass:"w-100",attrs:{disabled:""==e.form.module,placeholder:"Chọn module liên quan"},model:{value:e.form.related,callback:function(t){e.$set(e.form,"related",t)},expression:"form.related"}},["customer"==e.form.module?[l("el-option",{attrs:{label:"Đơn hàng",value:"order"}}),e._v(" "),l("el-option",{attrs:{label:"Báo giá",value:"quote"}})]:e._e(),e._v(" "),"task"==e.form.module?[l("el-option",{attrs:{label:"Người dùng",value:"user"}})]:e._e(),e._v(" "),"opportunity"==e.form.module?[l("el-option",{attrs:{label:"Khách hàng",value:"customer"}})]:e._e()],2)],1),e._v(" "),l("el-form-item",{attrs:{label:"Cột",prop:"column"}},[l("el-select",{staticClass:"w-100",attrs:{disabled:""==e.form.module,multiple:"",placeholder:"Chọn"},model:{value:e.form.column,callback:function(t){e.$set(e.form,"column",t)},expression:"form.column"}},["customer"==e.form.module?[l("el-option-group",{attrs:{label:"Khách hàng"}},e._l(e.options.customer,(function(e){return l("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1),e._v(" "),"order"==e.form.related?l("el-option-group",{attrs:{label:"Đơn hàng"}},e._l(e.options.order,(function(e){return l("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1):e._e(),e._v(" "),"quote"==e.form.related?l("el-option-group",{attrs:{label:"Báo giá"}},e._l(e.options.quote,(function(e){return l("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1):e._e()]:e._e(),e._v(" "),"task"==e.form.module?[l("el-option-group",{attrs:{label:"Công việc"}},e._l(e.options.task,(function(e){return l("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1),e._v(" "),"user"==e.form.related?l("el-option-group",{attrs:{label:"Người dùng"}},e._l(e.options.user,(function(e){return l("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1):e._e()]:e._e(),e._v(" "),"opportunity"==e.form.module?[l("el-option-group",{attrs:{label:"Cơ hội"}},e._l(e.options.opportunity,(function(e){return l("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1),e._v(" "),"customer"==e.form.related?l("el-option-group",{attrs:{label:"Khách hàng"}},e._l(e.options.customer,(function(e){return l("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1):e._e()]:e._e()],2)],1),e._v(" "),l("el-form-item",{attrs:{label:"Lọc theo",prop:"filter.column"}},[l("el-select",{staticClass:"w-100",attrs:{disabled:""==e.form.module,placeholder:"Lọc theo"},model:{value:e.form.filter.column,callback:function(t){e.$set(e.form.filter,"column",t)},expression:"form.filter.column"}},["customer"==e.form.module?[l("el-option",{attrs:{label:"Ngày tạo khách hàng",value:"created_at"}}),e._v(" "),"order"==e.form.related?l("el-option",{attrs:{label:"Đơn hàng",value:"Ngày đặt hàng"}}):e._e()]:e._e(),e._v(" "),"task"==e.form.module?[l("el-option",{attrs:{label:"Ngày bắt đầu",value:"start_date"}})]:e._e(),e._v(" "),"opportunity"==e.form.module?[l("el-option",{attrs:{label:"Ngày kết thúc",value:"end_date"}}),e._v(" "),"customer"==e.form.related?l("el-option",{attrs:{label:"Ngày tạo khách hàng",value:"created_at"}}):e._e()]:e._e()],2)],1),e._v(" "),l("el-form-item",{attrs:{label:"Thời gian",prop:"filter.value"}},[l("el-date-picker",{staticClass:"w-100",attrs:{type:"datetimerange","range-separator":"-","start-placeholder":"Từ ngày","end-placeholder":"Tới ngày",format:"dd/MM/yyyy","value-format":"yyyy-MM-dd"},model:{value:e.form.filter.value,callback:function(t){e.$set(e.form.filter,"value",t)},expression:"form.filter.value"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Mô tả"}},[l("el-input",{attrs:{type:"textarea",placeholder:"Nhập mô tả"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:e.closeDialog}},[e._v("Hủy")]),e._v(" "),e.isEdit?l("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.updateData}},[e._v("Cập nhật")]):l("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.createData}},[e._v("Tạo mới")])],1)],1)},o=[],r=(l("96cf"),l("3b8d")),n=l("da9c"),i=l("1b10"),u={props:["data","isEdit","showDialog"],watch:{showDialog:function(){if(this.isEdit)for(var e in this.form)this.form[e]=this.data[e];else{for(var t in this.form)"filter"!=t&&(this.form[t]="");for(var l in this.form["filter"])this.form["filter"][l]=""}}},data:function(){return{loading:!1,form:{id:"",name:"",module:"",column:"",related:"",filter:{column:"",value:""},description:""},options:"",rules:{name:[{required:!0,message:"Hãy nhập tên báo cáo",trigger:"blur"}],module:[{required:!0,message:"Hãy chọn module",trigger:"blur"}],column:[{required:!0,message:"Hãy chọn các cột trong báo cáo",trigger:"blur"}],"filter.column":[{required:!0,message:"Hãy chọn điều kiện lọc",trigger:"blur"}],"filter.value":[{required:!0,message:"Hãy chọn giá trị lọc",trigger:"blur"}]}}},methods:{closeDialog:function(){this.$emit("update:showDialog",!1),this.$refs["form"].resetFields()},updateData:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$refs["form"].validate();case 3:return this.loading=!0,e.next=6,Object(i["e"])(this.form,this.form.id);case 6:this.reload(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.loading=!1;case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),createData:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$refs["form"].validate();case 3:return this.loading=!0,e.next=6,Object(i["d"])(this.form);case 6:this.reload(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.loading=!1;case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),reload:function(){this.loading=!1,this.$message.success(this.isEdit?"Cập nhật thành công":"Thêm mới thành công"),this.closeDialog(),this.$emit("reload")}},created:function(){this.options=n["a"]}},s=u,c=l("2877"),m=Object(c["a"])(s,a,o,!1,null,null,null);t["a"]=m.exports},da9c:function(e,t,l){"use strict";var a=[{label:"Mã khách hàng",value:"code"},{label:"Tên khách hàng",value:"name"},{label:"Chủ sở hữu",value:"owner"},{label:"Email",value:"email"},{label:"SĐT",value:"phone_number"},{label:"Địa chỉ giao hàng",value:"delivery_address"}],o=[{label:"Mã đơn hàng",value:"order_code"},{label:"Người bán",value:"seller"},{label:"Phương thức vận chuyển",value:"delivery_method"},{label:"Ngày đặt hàng",value:"order_date"},{label:"Thành tiền",value:"total"},{label:"Chiết khấu",value:"discount"},{label:"Đã thanh toán",value:"paid"},{label:"Còn nợ",value:"owed"}],r=[{label:"Mã báo giá",value:"quote_code"},{label:"Thành tiền báo giá",value:"total"}],n=[{label:"Tên người dùng",value:"name"},{label:"Email",value:"email"},{label:"SĐT",value:"phone_number"}],i=[{label:"Tiêu đề",value:"title"},{label:"Trạng thái",value:"status"},{label:"Ngày bắt đầu",value:"start_date"}],u=[{label:"Tên cơ hội",value:"order_name"},{label:"Kiểu",value:"type"},{label:"Nguồn",value:"source"},{label:"Trạng thái",value:"status"},{label:"Xác suất thành công",value:"probability_of_success"}];t["a"]={customer:a,order:o,quote:r,user:n,task:i,opportunity:u}}}]);