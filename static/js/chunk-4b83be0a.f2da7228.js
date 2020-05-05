(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b83be0a"],{4574:function(t,e,r){},"48b1":function(t,e,r){"use strict";var n=r("4574"),o=r.n(n);o.a},"4e60":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("ReceiptDetail",{attrs:{"is-edit":!0}})],1)},o=[],i=r("6477"),a={components:{ReceiptDetail:i["a"]}},s=a,c=r("2877"),u=Object(c["a"])(s,n,o,!1,null,null,null);e["default"]=u.exports},6477:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-row",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{"element-loading-text":"Xin vui lòng chờ","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[r("el-card",[r("el-row",{attrs:{slot:"header"},slot:"header"},[r("el-col",{staticStyle:{"margin-top":"10px"},attrs:{span:12}},[t._v("Thông tin phiếu nhập")]),t._v(" "),t.isShow?r("el-col",{attrs:{span:12}},[r("el-button",{staticClass:"fr",attrs:{disabled:t.form.confirmed,type:"primary",size:"small"},on:{click:function(e){return t.$router.push("/goods/receipt/edit/"+t.form.id)}}},[t._v("Sửa phiếu nhập")])],1):r("el-col",{attrs:{span:12}},[t.isEdit?r("el-button",{staticClass:"fr",attrs:{type:"primary",size:"small"},on:{click:t.updateReceipt}},[t._v("Sửa phiếu nhập")]):r("el-button",{staticClass:"fr",attrs:{type:"primary",size:"small"},on:{click:t.createReceipt}},[t._v("Thêm phiếu nhập")])],1)],1),t._v(" "),r("el-row",{attrs:{gutter:30}},[r("el-form",{ref:"form",attrs:{disabled:t.isShow,model:t.form,rules:t.rules,"label-position":"left","label-width":"120px"}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"Mã",prop:"code"}},[r("el-input",{model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Mô tả"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Nhà cung cấp"}},[r("el-input",{model:{value:t.form.supplier,callback:function(e){t.$set(t.form,"supplier",e)},expression:"form.supplier"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"Ngày nhập"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",clearable:!1,align:"center",format:"dd/MM/yyyy","value-format":"yyyy-MM-dd"},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Trạng thái"}},[r("el-switch",{attrs:{"active-text":"Đã xác nhận","inactive-text":"Chưa xác nhận"},model:{value:t.form.confirmed,callback:function(e){t.$set(t.form,"confirmed",e)},expression:"form.confirmed"}})],1)],1)],1)],1)],1),t._v(" "),r("el-card",{staticStyle:{"margin-top":"10px"}},[r("div",{attrs:{slot:"header"},slot:"header"},[t.isShow?r("span",[t._v("Thông tin sản phẩm")]):r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.showDialog=!0}}},[t._v("Thêm sản phẩm")])],1),t._v(" "),r("ProductList",{attrs:{"is-show":t.isShow,products:t.form.products,warehouses:t.warehouses}}),t._v(" "),r("SelectProductTable",{attrs:{"show-dialog":t.showDialog},on:{"select-product":function(e){return t.handleSelectProduct(e)},"update:showDialog":function(e){t.showDialog=e},"update:show-dialog":function(e){t.showDialog=e}}})],1)],1)},o=[],i=(r("ac6a"),r("7f7f"),r("96cf"),r("3b8d")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-row",[r("el-form",{attrs:{disabled:t.isShow,size:"mini"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.products}},[r("el-table-column",{attrs:{align:"center",type:"index",width:"80",label:"STT"}}),t._v(" "),r("el-table-column",{attrs:{prop:"name",width:"250",label:"Tên"}}),t._v(" "),r("el-table-column",{attrs:{prop:"code",width:"250",label:"Mã"}}),t._v(" "),r("el-table-column",{attrs:{width:"200",label:"Kho hàng"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.warehouses.length>0?r("el-form-item",{staticClass:"mb-0"},[r("el-select",{attrs:{placeholder:"Kho hàng"},model:{value:t.products[e.$index].warehouse_id,callback:function(r){t.$set(t.products[e.$index],"warehouse_id",r)},expression:"products[scope.$index].warehouse_id"}},t._l(t.warehouses,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1):t._e()]}}])}),t._v(" "),r("el-table-column",{attrs:{width:"100",label:"Số lượng"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-form-item",{staticClass:"mb-0"},[r("el-input-number",{staticStyle:{width:"80px"},attrs:{"controls-position":"right",min:1},model:{value:t.products[e.$index].quantity,callback:function(r){t.$set(t.products[e.$index],"quantity",r)},expression:"products[scope.$index].quantity"}})],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{width:"100",label:"Đơn vị"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-form-item",{staticClass:"mb-0"},[r("el-input",{model:{value:t.products[e.$index].unit,callback:function(r){t.$set(t.products[e.$index],"unit",r)},expression:"products[scope.$index].unit"}})],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{width:"150",label:"Giá bán(đ)"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-form-item",{staticClass:"mb-0"},[r("el-input-number",{staticStyle:{width:"130px"},attrs:{"controls-position":"right",min:0},model:{value:t.products[e.$index].price,callback:function(r){t.$set(t.products[e.$index],"price",r)},expression:"products[scope.$index].price"}})],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{width:"100",label:"Thuế"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-form-item",{staticClass:"mb-0"},[r("el-input-number",{staticStyle:{width:"80px"},attrs:{"controls-position":"right",min:0},model:{value:t.products[e.$index].tax,callback:function(r){t.$set(t.products[e.$index],"tax",r)},expression:"products[scope.$index].tax"}})],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{width:"200",label:"Tiền thuế"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("money")((t.products[e.$index].quantity*t.products[e.$index].price*t.products[e.$index].tax/100).toFixed(2))))]}}])}),t._v(" "),r("el-table-column",{attrs:{width:"200",label:"Tiền hàng"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("money")((t.products[e.$index].quantity*t.products[e.$index].price).toFixed(2))))]}}])}),t._v(" "),t.isShow?t._e():r("el-table-column",{attrs:{fixed:"right",align:"center",label:"Xóa",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{circle:"",type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return t.deleteProduct(e.$index)}}})]}}],null,!1,650268293)})],1)],1),t._v(" "),r("el-col",{attrs:{span:8,offset:16}},[r("p",[t._v("Tổng tiền hàng trước thuế: "+t._s(t._f("money")(t.total.toFixed(2)))+" đ")]),t._v(" "),r("p",[t._v("Tổng tiền hàng sau thuế: "+t._s(t._f("money")((t.total+t.tax).toFixed(2)))+" đ")])])],1)},s=[],c={props:["products","warehouses","isShow"],computed:{total:function(){return 0==this.products.length?0:this.products.map((function(t){return t.quantity*t.price})).reduce((function(t,e){return t+e}))},tax:function(){return 0==this.products.length?0:this.products.map((function(t){return t.quantity*t.price*t.tax/100})).reduce((function(t,e){return t+e}))}},data:function(){return{rules:[{}]}},methods:{deleteProduct:function(t){this.products.splice(t,1)}}},u=c,l=(r("48b1"),r("2877")),d=Object(l["a"])(u,a,s,!1,null,"754b87a2",null),p=d.exports,h=r("d1cd"),f=r("d50d"),m=r("9fbd"),b={components:{ProductList:p,SelectProductTable:h["a"]},props:["isEdit","isShow"],data:function(){return{showDialog:!1,form:{id:"",code:"",description:"",supplier:"",date:(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),confirmed:!1,products:[]},loading:"",warehouses:[],rules:{code:[{required:!0,message:"Hãy nhập mã phiếu nhập",trigger:"blur"}]}}},methods:{createReceipt:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$refs["form"].validate();case 3:if(this.validateReceiptInfo()){t.next=5;break}return t.abrupt("return");case 5:return this.loading=!0,t.next=8,Object(f["d"])(this.form);case 8:e=t.sent,r=e.data,this.loading=!1,this.$router.push("/goods/receipt/show/".concat(r.id)),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0),this.loading=!1;case 18:case"end":return t.stop()}}),t,this,[[0,14]])})));function e(){return t.apply(this,arguments)}return e}(),getReceipt:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,Object(f["c"])(this.$route.params.id);case 4:for(n in e=t.sent,r=e.data,this.isEdit&&r.confirmed&&this.$router.push("/404"),this.form)this.form[n]=r[n];this.loading=!1,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0),this.loading=!1;case 15:case"end":return t.stop()}}),t,this,[[0,11]])})));function e(){return t.apply(this,arguments)}return e}(),updateReceipt:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,this.$refs["form"].validate();case 4:if(this.validateReceiptInfo()){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,Object(f["e"])(this.form,this.$route.params.id);case 8:t.sent,this.loading=!1,this.$router.push("/goods/receipt/show/".concat(this.$route.params.id)),t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0),this.loading=!1;case 17:case"end":return t.stop()}}),t,this,[[0,13]])})));function e(){return t.apply(this,arguments)}return e}(),getWareHouses:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(m["b"])();case 3:e=t.sent,r=e.data,this.warehouses=r,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),handleSelectProduct:function(t){var e={name:t.name,code:t.code,product_id:t.id,warehouse_id:"",quantity:1,unit:t.unit,price:t.perchase_price,tax:t.tax};this.form.products.push(e)},validateReceiptInfo:function(){var t=this;if(0==this.form.products.length)return this.$message.error("Chưa có sản phẩm nào"),!1;var e=this.form.products.filter((function(t){return""==t.warehouse_id||void 0==t.quantity||void 0==t.tax||void 0==t.price}));if(e.length>0)return this.$message.error("Kho, số lượng, thuế và giá không được để trống!"),!1;var r=!1;return this.form.products.forEach((function(e){var n=t.form.products.filter((function(t){return t.product_id==e.product_id&&t.warehouse_id==e.warehouse_id}));n.length>1&&(r=!0)})),!r||(this.$message.error("Trùng sản phẩm và kho"),!1)}},created:function(){(this.isEdit||this.isShow)&&this.getReceipt(),this.getWareHouses()}},g=b,v=Object(l["a"])(g,n,o,!1,null,null,null);e["a"]=v.exports},"9fbd":function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"d",(function(){return a})),r.d(e,"a",(function(){return s}));var n=r("b775");function o(t){return Object(n["a"])({url:"/warehouses",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/warehouses",method:"post",data:t})}function a(t,e){return Object(n["a"])({url:"/warehouses/".concat(e),method:"put",data:t})}function s(t){return Object(n["a"])({url:"/warehouses/".concat(t),method:"delete"})}},bc50:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return s}));var n=r("b775");function o(t){return Object(n["a"])({url:"/products",method:"get",params:t})}function i(t,e){return Object(n["a"])({url:"/products/".concat(t),method:"get",params:e})}function a(t){return Object(n["a"])({url:"/products",method:"post",data:t})}function s(t,e){return Object(n["a"])({url:"/products/".concat(e),method:"put",data:t})}},d50d:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"d",(function(){return a})),r.d(e,"e",(function(){return s})),r.d(e,"a",(function(){return c}));var n=r("b775");function o(t){return Object(n["a"])({url:"/receipts",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/receipts/".concat(t),method:"get"})}function a(t){return Object(n["a"])({url:"/receipts",method:"post",data:t})}function s(t,e){return Object(n["a"])({url:"/receipts/".concat(e),method:"put",data:t})}function c(t){return Object(n["a"])({url:"/receipts/".concat(t),method:"delete"})}}}]);