(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b04c62c"],{"11e9":function(t,e,a){var n=a("52a7"),r=a("4630"),s=a("6821"),o=a("6a99"),l=a("69a8"),i=a("c69a"),c=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?c:function(t,e){if(t=s(t),e=o(e,!0),i)try{return c(t,e)}catch(a){}if(l(t,e))return r(!n.f.call(t,e),t[e])}},"3c9e":function(t,e,a){"use strict";var n=a("d027"),r=a.n(n);r.a},"469f":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("7d7b")},"5d73":function(t,e,a){t.exports=a("469f")},"5dbc":function(t,e,a){var n=a("d3f4"),r=a("8b97").set;t.exports=function(t,e,a){var s,o=e.constructor;return o!==a&&"function"==typeof o&&(s=o.prototype)!==a.prototype&&n(s)&&r&&r(t,s),t}},"5df3":function(t,e,a){"use strict";var n=a("02f4")(!0);a("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=n(e,a),this._i+=t.length,{value:t,done:!1})}))},"768b":function(t,e,a){"use strict";var n=a("a745"),r=a.n(n);function s(t){if(r()(t))return t}var o=a("5d73"),l=a.n(o),i=a("c8bb"),c=a.n(i);function u(t,e){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var a=[],n=!0,r=!1,s=void 0;try{for(var o,i=l()(t);!(n=(o=i.next()).done);n=!0)if(a.push(o.value),e&&a.length===e)break}catch(u){r=!0,s=u}finally{try{n||null==i["return"]||i["return"]()}finally{if(r)throw s}}return a}}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function d(t,e){return s(t)||u(t,e)||p()}a.d(e,"a",(function(){return d}))},"7d7b":function(t,e,a){var n=a("e4ae"),r=a("7cd6");t.exports=a("584a").getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},"896e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("Infomation")],1)},r=[],s=(a("a881"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",[a("el-row",[a("el-col",{attrs:{span:24}},[a("span",[t._v(t._s(t.data.code))]),t._v(" "),a("el-button",{staticClass:"fr",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.$router.push("/business/order/edit/"+t.$route.params.id)}}},[t._v("Sửa")]),t._v(" "),a("el-button",{staticClass:"fr mr-10",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.$router.push("/business/order/create/?cloneId="+t.$route.params.id)}}},[t._v("Sao chép")]),t._v(" "),a("el-button",{staticClass:"fr",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.$router.push("/business/quote/create/?orderId="+t.$route.params.id)}}},[t._v("Convert báo giá")]),t._v(" "),a("el-button",{staticClass:"fr",attrs:{type:"primary",size:"small"},on:{click:function(e){t.showDialog=!0}}},[t._v("In")])],1)],1),t._v(" "),a("h3",{staticClass:"title"},[t._v("Thông tin đơn hàng")]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Chủ sở hữu")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.owner))])])],1),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Trạng thái")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.status))])])],1),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Phương thức thanh toán")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.payment_method))])])],1),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Địa chỉ giao hàng")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.delivery_address))])])],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Phương thức giao hàng")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.delivery_method))])])],1),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Ngày đặt")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t._f("date")(t.data.order_date)))])])],1),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Ngày giao")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t._f("date")(t.data.delivery_date)))])])],1),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Báo giá")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.quote?t.data.quote.code:""))])])],1)],1)],1),t._v(" "),a("h3",{staticClass:"title"},[t._v("Thông tin khách hàng")]),t._v(" "),t.data.customer?a("el-row",[a("el-col",{attrs:{span:12}},[a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Tên")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.customer.name))])])],1),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Điện thoại")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.customer.phone_number))])])],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Email")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.customer.email))])])],1),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Số di động")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.customer.mobile_number))])])],1)],1)],1):t._e(),t._v(" "),a("h3",{staticClass:"title"},[t._v("Thông tin liên hệ")]),t._v(" "),t.data.contact?a("el-row",[a("el-col",{attrs:{span:12}},[a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Tên")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.contact.name))])])],1),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Điện thoại")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.contact.phone_number))])])],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Email")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.contact.email))])])],1),t._v(" "),a("el-row",{staticClass:"item"},[a("el-col",{attrs:{span:10}},[a("p",{staticClass:"my-label"},[t._v("Số di động")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("p",{staticClass:"content"},[t._v(t._s(t.data.contact.mobile_number))])])],1)],1)],1):t._e(),t._v(" "),a("h3",{staticClass:"title"},[t._v("Thông tin sản phẩm")]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[t.data?a("el-table",{attrs:{data:t.data.products}},[a("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"STT"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"Tên"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"Giá bán"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("money")(e.row.price)))]}}],null,!1,2841422553)}),t._v(" "),a("el-table-column",{attrs:{prop:"quantity",align:"center",width:"100",label:"Số lượng"}}),t._v(" "),a("el-table-column",{attrs:{prop:"discount",align:"center",width:"120",label:"Chiết khấu(%)"}}),t._v(" "),a("el-table-column",{attrs:{label:"Tiền chiết khấu"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("money")((t.data.products[e.$index].quantity*t.data.products[e.$index].price*t.data.products[e.$index].discount/100).toFixed(2))))]}}],null,!1,3174354112)}),t._v(" "),a("el-table-column",{attrs:{prop:"tax",width:"80",align:"center",label:"Thuế(%)"}}),t._v(" "),a("el-table-column",{attrs:{label:"Tiền thuế"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("money")((t.data.products[e.$index].quantity*t.data.products[e.$index].price*t.data.products[e.$index].tax/100).toFixed(2))))]}}],null,!1,993904)}),t._v(" "),a("el-table-column",{attrs:{label:"Tiền hàng(đ)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("money")((t.data.products[e.$index].quantity*t.data.products[e.$index].price).toFixed(2))))]}}],null,!1,275512089)})],1):t._e()],1),t._v(" "),a("el-col",{staticStyle:{"margin-top":"10px"},attrs:{span:7,offset:17}},[a("p",[t._v("Tổng tiền hàng: "+t._s(t._f("money")(t.total.toFixed(2)))+" đ")]),t._v(" "),a("p",[t._v("Tổng tiền thuế: "+t._s(t._f("money")(t.tax.toFixed(2)))+" đ")]),t._v(" "),a("p",[t._v("Tổng tiền chiết khấu: "+t._s(t._f("money")(t.discount.toFixed(2)))+" đ")]),t._v(" "),a("p",[t._v("Phí giao hàng: "+t._s(t._f("money")(t.fee.toFixed(2)))+" đ")]),t._v(" "),a("p",[t._v("Tổng thanh toán: "+t._s(t._f("money")((t.total+t.tax-t.discount+t.fee).toFixed(2)))+" đ")]),t._v(" "),null!=t.data.paid?[a("p",[t._v("Đã thanh toán: "+t._s(t._f("money")(t.data.paid.toFixed(2)))+" đ")]),t._v(" "),a("p",[t._v("Còn nợ: "+t._s(t._f("money")((t.total+t.tax-t.discount+t.fee-t.data.paid).toFixed(2)))+" đ")])]:t._e()],2)],1),t._v(" "),a("h3",{staticClass:"title"},[t._v("\n        Cơ hội\n        "),t.data.opportunity?t._e():a("i",{staticClass:"el-icon-plus"})]),t._v(" "),a("el-row",[a("el-table",{attrs:{data:t.data.opportunity}},[a("el-table-column",{attrs:{prop:"name",label:"Tên"}}),t._v(" "),a("el-table-column",{attrs:{prop:"owner",label:"Chủ sở hữu"}}),t._v(" "),a("el-table-column",{attrs:{prop:"source",label:"Nguồn"}}),t._v(" "),a("el-table-column",{attrs:{prop:"customer",label:"Khách hàng"}}),t._v(" "),a("el-table-column",{attrs:{label:"Ngày tạo"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("datetime")(e.row.created_at)))]}}])})],1)],1),t._v(" "),a("Invoice",{attrs:{order:t.data}}),t._v(" "),a("el-dialog",{attrs:{center:"",title:"Báo giá",visible:t.showDialog,top:"5vh",width:"80%"},on:{"update:visible":function(e){t.showDialog=e}}},[t.showDialog?a("div",{attrs:{id:"print"},domProps:{innerHTML:t._s(t.order.content)}}):t._e(),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"medium"},on:{click:function(e){t.showDialog=!1}}},[t._v("Hủy")]),t._v(" "),a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(e){return t.$htmlToPaper("print")}}},[t._v("In")])],1)])],1)}),o=[],l=(a("ac6a"),a("5df3"),a("768b")),i=(a("96cf"),a("3b8d")),c=(a("c5f6"),a("b946")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"mb-20"},[a("h3",{staticClass:"title"},[t._v("\n        Hóa đơn\n        "),0==t.tableData.length?a("el-button",{staticClass:"fr",attrs:{type:"primary",size:"small",icon:"el-icon-plus",circle:""},on:{click:function(e){return t.$router.push({name:"Thêm mới hóa đơn",params:{order:t.order}})}}}):t._e()],1),t._v(" "),a("TableData",{attrs:{"table-data":t.tableData,loading:t.loading},on:{"handle-delete":t.getData,"update:loading":function(e){t.loading=e}}})],1)},p=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{align:"center",type:"index",width:"50",label:"STT"}}),t._v(" "),a("el-table-column",{attrs:{label:"Mã"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{staticClass:"link",attrs:{tag:"a",to:"/accounting/invoice/show/"+e.row.id}},[t._v(t._s(e.row.code))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"owner",label:"Chủ sở hữu"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"Trạng thái"}}),t._v(" "),a("el-table-column",{attrs:{prop:"customer",label:"Khách hàng"}}),t._v(" "),a("el-table-column",{attrs:{label:"Ngày tạo"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("date")(e.row.created_at)))]}}])})],1)],1)},_=[],f={props:["tableData","loading"]},v=f,h=a("2877"),m=Object(h["a"])(v,d,_,!1,null,null,null),b=m.exports,g={props:["order"],components:{TableData:b},data:function(){return{tableData:[],loading:!1}},methods:{getData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,Object(c["a"])(this.$route.params.id);case 4:e=t.sent,a=e.data,a&&(this.tableData=[a]),this.loading=!1,t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](0);case 12:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},y=g,C=Object(h["a"])(y,u,p,!1,null,null,null),w=C.exports,x={components:{Invoice:w},data:function(){return{data:{products:[]},order:"",showDialog:!1}},computed:{fee:function(){return Number(this.data.shipping_fee)},total:function(){return 0==this.data.products.length?0:this.data.products.map((function(t){return t.quantity*t.price})).reduce((function(t,e){return t+e}))},tax:function(){return 0==this.data.products.length?0:this.data.products.map((function(t){return t.quantity*t.price*t.tax/100})).reduce((function(t,e){return t+e}))},discount:function(){return 0==this.data.products.length?0:this.data.products.map((function(t){return t.quantity*t.price*t.discount/100})).reduce((function(t,e){return t+e}))}},methods:{getOrder:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.openFullScreen(),t.next=4,Promise.all([Object(c["d"])(this.$route.params.id),Object(c["c"])(this.$route.params.id)]);case 4:e=t.sent,a=Object(l["a"])(e,2),n=a[0],r=a[1],this.data=n.data,this.order=r.data,this.data.opportunity=this.data.opportunity?[this.data.opportunity]:[],this.data["total"]=this.total+this.tax-this.discount+this.fee,this.closeFullScreen(),t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0),this.closeFullScreen();case 19:case"end":return t.stop()}}),t,this,[[0,15]])})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getOrder()}},T=x,k=(a("3c9e"),Object(h["a"])(T,s,o,!1,null,"63c523de",null)),S=k.exports,O={components:{Infomation:S}},I=O,N=Object(h["a"])(I,n,r,!1,null,null,null);e["default"]=N.exports},"8b97":function(t,e,a){var n=a("d3f4"),r=a("cb7c"),s=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return s(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:s}},9093:function(t,e,a){var n=a("ce10"),r=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},a881:function(t,e,a){"use strict";e["a"]={data:function(){return{count:{file:0,note:0,task:0,opportunity:0,order:0,quote:0,email:0,contact:0,call:0,appointment:0}}},methods:{handleLoad:function(t,e){this.count[t]=e}}}},aa77:function(t,e,a){var n=a("5ca1"),r=a("be13"),s=a("79e5"),o=a("fdef"),l="["+o+"]",i="​",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),p=function(t,e,a){var r={},l=s((function(){return!!o[t]()||i[t]()!=i})),c=r[t]=l?e(d):o[t];a&&(r[a]=c),n(n.P+n.F*l,"String",r)},d=p.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=p},b946:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return s})),a.d(e,"e",(function(){return o})),a.d(e,"f",(function(){return l})),a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return c}));var n=a("b775");function r(t){return Object(n["a"])({url:"/orders",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/orders/".concat(t),method:"get"})}function o(t){return Object(n["a"])({url:"/orders",method:"post",data:t})}function l(t,e){return Object(n["a"])({url:"/orders/".concat(e),method:"put",data:t})}function i(t){return Object(n["a"])({url:"/orders/".concat(t,"/invoice"),method:"get"})}function c(t){return Object(n["a"])({url:"/orders/".concat(t,"/send"),method:"get"})}},c5f6:function(t,e,a){"use strict";var n=a("7726"),r=a("69a8"),s=a("2d95"),o=a("5dbc"),l=a("6a99"),i=a("79e5"),c=a("9093").f,u=a("11e9").f,p=a("86cc").f,d=a("aa77").trim,_="Number",f=n[_],v=f,h=f.prototype,m=s(a("2aeb")(h))==_,b="trim"in String.prototype,g=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():d(e,3);var a,n,r,s=e.charCodeAt(0);if(43===s||45===s){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var o,i=e.slice(2),c=0,u=i.length;c<u;c++)if(o=i.charCodeAt(c),o<48||o>r)return NaN;return parseInt(i,n)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof f&&(m?i((function(){h.valueOf.call(a)})):s(a)!=_)?o(new v(g(e)),a,f):g(e)};for(var y,C=a("9e1e")?c(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;C.length>w;w++)r(v,y=C[w])&&!r(f,y)&&p(f,y,u(v,y));f.prototype=h,h.constructor=f,a("2aba")(n,_,f)}},d027:function(t,e,a){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);