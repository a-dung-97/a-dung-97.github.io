(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ffb465c"],{"005c":function(t,e,a){"use strict";a.d(e,"e",(function(){return s})),a.d(e,"g",(function(){return r})),a.d(e,"f",(function(){return l})),a.d(e,"h",(function(){return o})),a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return c})),a.d(e,"d",(function(){return u})),a.d(e,"c",(function(){return p}));var n=a("b775");function s(t){return Object(n["a"])({url:"/tasks",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/tasks",method:"post",data:t})}function l(t,e){return Object(n["a"])({url:"/tasks/".concat(t),method:"get",params:e})}function o(t,e){return Object(n["a"])({url:"/tasks/".concat(e),method:"put",data:t})}function i(t){return Object(n["a"])({url:"/tasks/".concat(t),method:"delete"})}function c(t,e,a){return Object(n["a"])({url:"/tasks/".concat(e,"/").concat(a),method:"post",data:t})}function u(t,e,a){return Object(n["a"])({url:"/tasks/".concat(e,"/").concat(a),method:"get",params:t})}function p(t){return Object(n["a"])({url:"/tasks/".concat(t,"/finish"),method:"put"})}},"085e":function(t,e,a){},a7eb:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",{staticClass:"mb-20"},[a("el-col",{attrs:{span:21}},[a("SearchForm",{attrs:{params:t.params},on:{"handle-search":t.getData}})],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{staticClass:"fr",attrs:{size:"medium",type:"primary",circle:"",icon:"el-icon-plus"},on:{click:function(e){return t.$router.push("/business/task/create")}}}),t._v(" "),a("el-button",{staticClass:"fr mr-10",attrs:{size:"medium",type:"primary",circle:"",icon:"el-icon-search"},on:{click:t.getData}})],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-col",{attrs:{span:24}},[a("TableData",{attrs:{"table-data":t.tableData,loading:t.loading},on:{"handle-delete":t.getData,"update:loading":function(e){t.loading=e}}}),t._v(" "),a("Pagination",{attrs:{pagination:t.pagination},on:{"size-change":function(e){t.params.perPage=e,t.params.page=1,t.getData()},"current-change":function(e){t.params.page=e,t.getData()}}})],1)],1)],1)},s=[],r=(a("96cf"),a("3b8d")),l=a("005c"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{height:"65vh",data:t.tableData,border:""}},[a("el-table-column",{attrs:{align:"center",type:"index",width:"50",label:"STT"}}),t._v(" "),a("el-table-column",{attrs:{width:"250",label:"Tiêu đề"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{staticClass:"link",attrs:{tag:"a",to:"/business/task/show/"+e.row.id}},[t._v(t._s(e.row.title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"120",label:"Loại"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.type?a("el-tag",{attrs:{type:"App\\Lead"===e.row.type?"success":"primary","disable-transitions":"",size:"small"}},[t._v(t._s("App\\Lead"===e.row.type?"Tiềm năng":"Khách hàng"))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"130",label:"Trạng thái"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.status?[a("el-tag",{attrs:{type:"primary"}},[t._v(t._s(e.row.status))])]:void 0}}],null,!0)}),t._v(" "),a("el-table-column",{attrs:{width:"150",label:"Đối tượng"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.taskable?[a("router-link",{staticClass:"link",attrs:{tag:"a",to:"App\\Lead"==e.row.type?"/customer/lead/show/"+e.row.taskable.id:"/customer/customer/show/"+e.row.taskable.id}},[t._v(t._s(e.row.taskable.name))])]:void 0}}],null,!0)}),t._v(" "),a("el-table-column",{attrs:{prop:"user",width:"150",label:"Chủ sở hữu"}}),t._v(" "),a("el-table-column",{attrs:{width:"140",label:"Ngày bắt đầu"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("date")(e.row.start_date)))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"140",label:"Ngày hết hạn"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("date")(e.row.expiration_date)))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"140",label:"Ngày hoàn thành"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("date")(e.row.finish_date)))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"120",fixed:"right",align:"center",label:"Hành động"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:"",disabled:null!=e.row.finish_date},on:{click:function(a){return t.$router.push("/business/task/edit/"+e.row.id)}}}),t._v(" "),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return t.handleDelete(e.row.id)}}})]}}])})],1)},i=[],c={props:["tableData","loading"],methods:{handleDelete:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$confirm("Bạn có chắc chắn muốn xóa?","Cảnh báo",{confirmButtonText:"Xóa",cancelButtonText:"Hủy",type:"warning"});case 2:return this.openFullScreen(),t.next=5,Object(l["b"])(e);case 5:this.closeFullScreen(),this.$message.success("Xóa dữ liệu thành công"),this.$emit("handle-delete");case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},u=c,p=a("2877"),d=Object(p["a"])(u,o,i,!1,null,null,null),h=d.exports,m=a("333d"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"col",attrs:{span:6}},[a("el-select",{staticClass:"w-100",attrs:{size:"small",placeholder:"Loại",clearable:""},model:{value:t.params.type,callback:function(e){t.$set(t.params,"type",e)},expression:"params.type"}},[a("el-option",{attrs:{label:"Tiềm năng",value:"App\\Lead"}}),t._v(" "),a("el-option",{attrs:{label:"Khách hàng",value:"App\\Customer"}})],1)],1),t._v(" "),a("el-col",{staticClass:"col",attrs:{span:6}},[a("el-select",{staticClass:"w-100",attrs:{size:"small",placeholder:"Trạng thái",clearable:""},model:{value:t.params.status,callback:function(e){t.$set(t.params,"status",e)},expression:"params.status"}},[a("el-option",{attrs:{value:"1",label:"Chưa thực hiện"}}),t._v(" "),a("el-option",{attrs:{value:"2",label:"Đang thực hiện"}}),t._v(" "),a("el-option",{attrs:{value:"3",label:"Đã giải quyết"}}),t._v(" "),a("el-option",{attrs:{value:"4",label:"Đã hoàn thành"}})],1)],1),t._v(" "),a("el-col",{staticClass:"col",attrs:{span:6}},[a("el-input",{attrs:{size:"small",placeholder:"Tiêu đề",clearable:""},model:{value:t.params.title,callback:function(e){t.$set(t.params,"title",e)},expression:"params.title"}})],1),t._v(" "),a("el-col",{staticClass:"col",attrs:{span:6}},[a("el-select",{staticClass:"w-100",attrs:{size:"small",clearable:"",placeholder:"Chủ sở hữu"},model:{value:t.params.user,callback:function(e){t.$set(t.params,"user",e)},expression:"params.user"}},t._l(t.userOptions,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("el-col",{staticClass:"col",attrs:{span:12}},[a("el-date-picker",{staticClass:"w-100",attrs:{type:"daterange","range-separator":"-",size:"small","start-placeholder":"Bắt đầu từ","end-placeholder":"Bắt đầu đến"},model:{value:t.params.startDate,callback:function(e){t.$set(t.params,"startDate",e)},expression:"params.startDate"}})],1),t._v(" "),a("el-col",{staticClass:"col",attrs:{span:12}},[a("el-date-picker",{staticClass:"w-100",attrs:{type:"daterange","range-separator":"-",size:"small","start-placeholder":"Hoàn thành từ","end-placeholder":"Hoàn thành đến"},model:{value:t.params.finishDate,callback:function(e){t.$set(t.params,"finishDate",e)},expression:"params.finishDate"}})],1)],1)],1)],1)},b=[],g=(a("c103"),{props:["params"],data:function(){return{}},methods:{},created:function(){this.getUsers()}}),v=g,_=(a("f65f"),Object(p["a"])(v,f,b,!1,null,"456c0911",null)),w=_.exports,k={components:{TableData:h,Pagination:m["a"],SearchForm:w},data:function(){return{tableData:[],loading:!1,pagination:{},params:{perPage:10,page:1,title:"",startDate:"",status:"",finishDate:"",user:"",type:""}}},methods:{getData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,Object(l["e"])(this.params);case 4:e=t.sent,a=e.data,n=e.meta,this.tableData=a,this.pagination=n,this.loading=!1,t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0),this.loading=!1;case 16:case"end":return t.stop()}}),t,this,[[0,12]])})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},y=k,D=Object(p["a"])(y,n,s,!1,null,null,null);e["default"]=D.exports},f65f:function(t,e,a){"use strict";var n=a("085e"),s=a.n(n);s.a}}]);