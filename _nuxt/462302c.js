(window.webpackJsonp=window.webpackJsonp||[]).push([[31,12],{374:function(t,e,n){t.exports=n.p+"img/logo.901ed0e.png"},375:function(t,e,n){"use strict";n.r(e);var l={props:["activePage"],methods:{}},o=n(69),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{attrs:{toggleable:"lg"}},[e("b-navbar-brand",{attrs:{href:"#"}},[e("img",{staticClass:"img-fluid",attrs:{src:n(374),alt:""}})]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:"Home"==t.activePage?"active":"",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:""==t.activePage?"active":"",attrs:{to:""}},[t._v("About Us")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:""==t.activePage?"active":"",attrs:{to:""}},[t._v("Services")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:"diagnosis"==t.activePage?"active":"",attrs:{to:"/diagnosis"}},[t._v("Diagnosis")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:"medical"==t.activePage?"active":"",attrs:{to:"medical"}},[t._v("Medical Analysis")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:"save"==t.activePage?"active":"",attrs:{to:"save"}},[t._v("Saved Resulats")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:"setting"==t.activePage?"active":"",attrs:{to:"settings"}},[t._v("Settings")])],1)]),t._v(" "),e("b-navbar-nav",{staticClass:"ml-auto"},[e("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"}},[e("i",{staticClass:"fa-solid fa-right-from-bracket"})])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,n){t.exports=n.p+"img/Group 513464.5d65db6.png"},460:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this._self._c;return t("div",{staticClass:"col-md-6 d-md-block d-none"},[t("img",{staticClass:"img-fluid",attrs:{src:n(386),alt:""}})])}],o={data:function(){return{phoneNumber:""}},methods:{sendMsg:function(){if(""==this.phone)this.$toast.error("Please Enter Your phone",{position:"top-right",timeout:2e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:"fas fa-bomb",rtl:!1});else{var t=this.code+this.phone;localStorage.setItem("phone",t),this.$router.push("checkphone")}}}},c=n(69),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("navbar"),t._v(" "),e("div",{staticClass:"forget-chooce"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-md-6 align-self-center"},[e("form",{attrs:{action:""}},[e("h3",[t._v("Forget your password ?")]),t._v(" "),e("p",[t._v("Don’t Worry!  Its Happens. Please choose one option to reset your account.")]),t._v(" "),e("label",{attrs:{for:""}},[t._v("Phone Number")]),t._v(" "),e("VuePhoneNumberInput",{model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}}),t._v(" "),e("button",{staticClass:"btn btn-send",on:{click:function(e){return e.preventDefault(),t.sendMsg()}}},[t._v("Send Code")])],1),t._v(" "),e("p",{staticClass:"btn-login text-center mt-3"},[t._v("Remember Password "),e("nuxt-link",{attrs:{to:"/login"}},[t._v("Login")])],1)])])])])],1)}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(375).default})}}]);