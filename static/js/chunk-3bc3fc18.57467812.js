(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bc3fc18"],{"005c":function(t,a,e){"use strict";e.d(a,"e",(function(){return n})),e.d(a,"g",(function(){return i})),e.d(a,"f",(function(){return c})),e.d(a,"h",(function(){return l})),e.d(a,"b",(function(){return r})),e.d(a,"a",(function(){return o})),e.d(a,"d",(function(){return p})),e.d(a,"c",(function(){return _}));var s=e("b775");function n(t){return Object(s["a"])({url:"/tasks",method:"get",params:t})}function i(t){return Object(s["a"])({url:"/tasks",method:"post",data:t})}function c(t,a){return Object(s["a"])({url:"/tasks/".concat(t),method:"get",params:a})}function l(t,a){return Object(s["a"])({url:"/tasks/".concat(a),method:"put",data:t})}function r(t){return Object(s["a"])({url:"/tasks/".concat(t),method:"delete"})}function o(t,a,e){return Object(s["a"])({url:"/tasks/".concat(a,"/").concat(e),method:"post",data:t})}function p(t,a,e){return Object(s["a"])({url:"/tasks/".concat(a,"/").concat(e),method:"get",params:t})}function _(t){return Object(s["a"])({url:"/tasks/".concat(t,"/finish"),method:"put"})}},cccb:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:7}},[e("el-card",{staticStyle:{height:"420px"}},[t.data?e("el-tabs",{attrs:{stretch:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[t.data.taskable?e("el-tab-pane",{attrs:{label:"App\\Customer"==t.data.taskable.type?"Khách hàng":"Tiềm năng",name:"taskable"}},[e("div",{staticClass:"infomation"},[e("i",{staticClass:"el-icon-user"}),t._v(" "),e("span",[t._v(t._s(t.data.taskable.detail.name))])]),t._v(" "),e("div",{staticClass:"infomation"},[e("i",{staticClass:"el-icon-phone-outline"}),t._v(" "),e("span",[t._v(t._s(t.data.taskable.detail.phone_number))])]),t._v(" "),e("div",{staticClass:"infomation"},[e("i",{staticClass:"el-icon-mobile-phone"}),t._v(" "),e("span",[t._v(t._s(t.data.taskable.detail.mobile_number))])]),t._v(" "),e("div",{staticClass:"infomation"},[e("i",{staticClass:"el-icon-message"}),t._v(" "),e("span",[t._v(t._s(t.data.taskable.detail.email))])])]):t._e(),t._v(" "),t.data.contact?e("el-tab-pane",{attrs:{label:"Liên hệ",name:"contact"}},[e("div",{staticClass:"infomation"},[e("i",{staticClass:"el-icon-user"}),t._v(" "),e("span",[t._v(t._s(t.data.contact.name))])]),t._v(" "),e("div",{staticClass:"infomation"},[e("i",{staticClass:"el-icon-phone-outline"}),t._v(" "),e("span",[t._v(t._s(t.data.contact.phone_number))])]),t._v(" "),e("div",{staticClass:"infomation"},[e("i",{staticClass:"el-icon-mobile-phone"}),t._v(" "),e("span",[t._v(t._s(t.data.contact.mobile_number))])]),t._v(" "),e("div",{staticClass:"infomation"},[e("i",{staticClass:"el-icon-message"}),t._v(" "),e("span",[t._v(t._s(t.data.contact.email))])])]):t._e(),t._v(" "),e("el-tab-pane",{attrs:{label:"Mốc thời gian",name:"timeline"}},[e("el-timeline",{staticStyle:{"padding-left":"0"}},[e("el-timeline-item",{attrs:{timestamp:t._f("datetime")(t.data.timeline.created_at),placement:"top"}},[e("el-card",[e("h4",[t._v("Tạo bởi")]),t._v(" "),e("p",[t._v(t._s(t.data.timeline.created_by))])])],1),t._v(" "),t.data.timeline.updated_by?e("el-timeline-item",{attrs:{timestamp:t._f("datetime")(t.data.timeline.updated_at),placement:"top"}},[e("el-card",[e("h4",[t._v("Chỉnh sửa lần cuối bởi")]),t._v(" "),e("p",[t._v(t._s(t.data.timeline.updated_by))])])],1):t._e()],1)],1)],1):t._e()],1)],1),t._v(" "),e("el-col",{attrs:{span:17}},[e("el-card",[e("el-row",[e("el-col",{attrs:{span:12}},[e("h3",{staticClass:"title",staticStyle:{"margin-top":"10px"}},[t._v("Thông tin công việc")])]),t._v(" "),e("el-col",{attrs:{span:12}},[t.data.finish_date?t._e():e("el-button",{staticClass:"fr",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:t.finishTask}},[t._v("Đóng công việc")]),t._v(" "),t.data.finish_date?t._e():e("el-button",{staticClass:"fr",attrs:{type:"primary",size:"small"},on:{click:function(a){return t.$router.push("/business/task/edit/"+t.$route.params.id)}}},[t._v("Sửa")])],1)],1),t._v(" "),e("el-row",{staticClass:"item"},[e("el-col",{attrs:{span:6}},[e("p",{staticClass:"my-label"},[t._v("Tiêu đề")])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("p",{staticClass:"content"},[t._v(t._s(t.data.title))])])],1),t._v(" "),e("el-row",{staticClass:"item"},[e("el-col",{attrs:{span:6}},[e("p",{staticClass:"my-label"},[t._v("Chủ sở hữu")])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("p",{staticClass:"content"},[t._v(t._s(t.data.user))])])],1),t._v(" "),e("el-row",{staticClass:"item"},[e("el-col",{attrs:{span:6}},[e("p",{staticClass:"my-label"},[t._v("Ngày bắt đầu")])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("p",{staticClass:"content"},[t._v(t._s(t._f("date")(t.data.start_date)))])])],1),t._v(" "),e("el-row",{staticClass:"item"},[e("el-col",{attrs:{span:6}},[e("p",{staticClass:"my-label"},[t._v("Ngày hết hạn")])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("p",{staticClass:"content"},[t._v(t._s(t._f("date")(t.data.expiration_date)))])])],1),t._v(" "),e("el-row",{staticClass:"item"},[e("el-col",{attrs:{span:6}},[e("p",{staticClass:"my-label"},[t._v("Ngày hoàn thành")])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("p",{staticClass:"content"},[t._v(t._s(t._f("date")(t.data.finish_date)))])])],1),t._v(" "),e("el-row",{staticClass:"item"},[e("el-col",{attrs:{span:6}},[e("p",{staticClass:"my-label"},[t._v("Độ ưu tiên")])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("p",{staticClass:"content"},[t._v(t._s(t.data.priority))])])],1),t._v(" "),e("el-row",{staticClass:"item"},[e("el-col",{attrs:{span:6}},[e("p",{staticClass:"my-label"},[t._v("Trạng thái")])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("p",{staticClass:"content"},[t._v(t._s(t.data.status))])])],1),t._v(" "),t.data.opportunity?e("el-row",{staticClass:"item"},[e("el-col",{attrs:{span:6}},[e("p",{staticClass:"my-label"},[t._v("Cơ hội")])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("p",{staticClass:"content"},[e("router-link",{staticStyle:{color:"#3498db"},attrs:{tag:"a",to:"/business/opportunity/show/"+t.data.opportunity.id}},[t._v(t._s(t.data.opportunity.name))])],1)])],1):t._e(),t._v(" "),e("h3",{staticClass:"title"},[t._v("Mô tả công việc")]),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("p",{staticClass:"content"},[t._v(t._s(t.data.description))])])],1),t._v(" "),e("h3",{staticClass:"title"},[t._v("Nhắc nhở công việc")]),t._v(" "),t.data.reminder&&t.data.reminder.time?[e("el-row",{staticClass:"item"},[e("el-col",{attrs:{span:6}},[e("p",{staticClass:"my-label"},[t._v("Thời gian nhắc")])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("p",{staticClass:"content"},[t._v(t._s(t._f("datetime")(t.data.reminder.time)))])])],1),t._v(" "),e("el-row",{staticClass:"item"},[e("el-col",{attrs:{span:6}},[e("p",{staticClass:"my-label"},[t._v("Kiểu nhắc")])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("p",{staticClass:"content"},[t._v(t._s("1"==t.data.reminder.type?"Email":"2"==t.data.reminder.type?"Thông báo":"Email, Thông báo"))])])],1)]:t._e()],2)],1)],1)],1)},n=[],i=(e("96cf"),e("3b8d")),c=e("005c"),l={data:function(){return{data:"",tab:""}},methods:{getTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.openFullScreen(),t.next=4,Object(c["f"])(this.$route.params.id);case 4:a=t.sent,e=a.data,this.data=e,this.tab=e.taskable?"taskable":"timeline",this.closeFullScreen(),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),this.closeFullScreen(),console.log(t.t0);case 15:case"end":return t.stop()}}),t,this,[[0,11]])})));function a(){return t.apply(this,arguments)}return a}(),finishTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$confirm("Bạn có muốn đóng công việc này?");case 3:return this.openFullScreen(),t.next=6,Object(c["c"])(this.$route.params.id);case 6:return t.next=8,this.getTask();case 8:this.closeFullScreen(),this.$message.success("Đóng công việc thành công"),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),this.closeFullScreen(),console.log(t.t0);case 16:case"end":return t.stop()}}),t,this,[[0,12]])})));function a(){return t.apply(this,arguments)}return a}()},created:function(){this.getTask()}},r=l,o=(e("e8ab"),e("2877")),p=Object(o["a"])(r,s,n,!1,null,"2f6ab32a",null);a["default"]=p.exports},d45f:function(t,a,e){},e8ab:function(t,a,e){"use strict";var s=e("d45f"),n=e.n(s);n.a}}]);