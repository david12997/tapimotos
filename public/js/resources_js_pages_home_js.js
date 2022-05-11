"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_home_js"],{

/***/ "./resources/js/components/asesor.jsx":
/*!********************************************!*\
  !*** ./resources/js/components/asesor.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _btn1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btn1 */ "./resources/js/components/btn1.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Asesor = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:330px;\n    height:200px;\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr;\n    grid-template-areas:\n        \"imagen  datos\"\n        \"btn     btn  \";\n    grid-gap:10px;\n\n\n    .imagen{\n\n        grid-column-start: imagen;\n        grid-column-end: imagen;\n        grid-row-start:imagen;\n        grid-row-end:imagen;\n\n\n    }\n\n    .datos{\n\n        grid-column-start: datos;\n        grid-column-end: datos;\n        grid-row-start:datos;\n        grid-row-end:datos;\n\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        flex-wrap:wrap;\n        color:gray;\n    }\n\n    .dato{\n\n        width:90%;\n        height:30%;\n        margin-top:3px;\n        font-size:16px;\n\n\n    }\n\n    .btn-asesor{\n\n        grid-column-start: btn;\n        grid-column-end: btn;\n        grid-row-start:btn;\n        grid-row-end:btn;\n\n\n    }\n\n"])));

var Asesor_render = function Asesor_render(_ref) {
  var img = _ref.img,
      asesor = _ref.asesor,
      number = _ref.number,
      email = _ref.email,
      link = _ref.link;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Asesor, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "imagen",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        style: {
          width: '90%'
        },
        src: img
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "datos",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "dato",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: asesor
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "dato",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
          icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faWhatsapp
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("b", {
          children: [" ", number]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "dato",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: email
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "btn-asesor",
      onClick: function onClick() {
        return window.location.href = link;
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_btn1__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: "rgb(233,128,8)",
        width: "330px",
        height: "47px",
        title: "Contactar"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asesor_render);

/***/ }),

/***/ "./resources/js/components/asesores.jsx":
/*!**********************************************!*\
  !*** ./resources/js/components/asesores.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _asesor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asesor */ "./resources/js/components/asesor.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Asesores = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    display:flex;\n    justify-content:space-around;\n    flex-wrap:wrap;\n    margin-top:100px;\n\n    .asesores{\n\n       margin-top:50px;\n\n    }\n\n    .main-title{\n\n        margin-top:50px;\n        width:100%;\n        height:50px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        font-size:17px;\n\n\n    }\n\n    @media(min-width:800px){\n\n        .asesores{\n\n            margin:70px;\n        }\n\n        .main-title{\n\n            font-size:18px;\n        }\n    }\n\n"])));

var Asesores_render = function Asesores_render() {
  var data = [{
    'img': './images/asesor.png',
    'asesor': 'Asesor1',
    'number': '3208168103',
    'email': 'asesor1@tapimotosdk.com',
    'link': 'https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina+tapimotosdk.com'
  }, {
    'img': './images/asesor.png',
    'asesor': 'Asesor2',
    'number': '3118928239',
    'email': 'asesor2@tapimotosdk.com',
    'link': 'https://api.whatsapp.com/send/?phone=573118928239&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina+tapimotosdk.com'
  }, {
    'img': './images/asesor.png',
    'asesor': 'Asesor3',
    'number': '3208168103',
    'email': 'asesor3@tapimotosdk.com',
    'link': 'https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina+tapimotosdk.com'
  }, {
    'img': './images/asesor.png',
    'asesor': 'Asesor4',
    'number': '3118928239',
    'email': 'asesor4@tapimotosdk.com',
    'link': 'https://api.whatsapp.com/send/?phone=573118928239&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina+tapimotosdk.com'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: {
      width: '100%'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Asesores, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "main-title",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
          children: "\xBFNECESITAS AYUDA?"
        })
      }), data.map(function (dato, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "asesores",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_asesor__WEBPACK_IMPORTED_MODULE_1__["default"], {
            img: dato.img,
            asesor: dato.asesor,
            number: dato.number,
            email: dato.email,
            link: dato.link
          })
        }, index);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asesores_render);

/***/ }),

/***/ "./resources/js/components/btn-whatsapp.jsx":
/*!**************************************************!*\
  !*** ./resources/js/components/btn-whatsapp.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Main = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    height:100px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    margin-top:30px;\n    cursor:pointer;\n\n    .container-btn-whatsapp{\n\n        width:90%;\n        height:65%;\n        background:#319713;\n        border-radius:9px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        font-size:16px;\n        box-shadow:3px 3px 8px rgba(0,0,0,0.3);\n    }\n\n    .img-whatsapp{\n\n        width:40px;\n        margin-right:7%;\n    }\n\n    b{\n        color:white;\n    }\n\n    @media(min-width:800px){\n\n        .container-btn-whatsapp{\n\n            width:40%;\n            height:70%;\n            background:#319713;\n            border-radius:9px;\n            display:flex;\n            justify-content:center;\n            align-items:center;\n            font-size:19px;\n            box-shadow:3px 3px 8px rgba(0,0,0,0.3);\n        }\n\n        .img-whatsapp{\n\n            margin-left:-80px;\n        }\n\n\n\n    }\n "])));

var Btn_whatsapp = function Btn_whatsapp() {
  var redirect = function redirect() {
    window.location.href = 'https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina+tapimotosdk.com';
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Main, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "container-btn-whatsapp",
        onClick: function onClick() {
          return redirect();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "img-whatsapp",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            style: {
              width: '100%',
              transform: 'rotate(346deg)'
            },
            src: "./images/logo-whatsapp.svg"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "\xBFQu\xE9 repuestos est\xE1s buscando?"
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Btn_whatsapp);

/***/ }),

/***/ "./resources/js/components/contacto.jsx":
/*!**********************************************!*\
  !*** ./resources/js/components/contacto.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Contacto = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    height:650px;\n\n\n    .title-contacto{\n\n        width:100%;\n        height:50px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        font-size:18px;\n        margin-bottom:30px;\n    }\n\n    .body-contacto{\n\n        width:100%;\n        height:510px;\n        background:#0096d2;\n    }\n\n    .text1-contacto{\n\n        width:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        height:40px;\n        color:white;\n    }\n    .container-iconos{\n\n        width:100%;\n        height:420px;\n        color:white;\n\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        flex-wrap:wrap;\n\n    }\n\n    .icon{\n\n        width:300px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        margin-top:10px;\n        cursor:pointer;\n\n    }\n\n    .Whatsapp{\n\n        font-size:60px;\n    }\n\n    .Messenger{\n\n        font-size:55px;\n    }\n    .Contacto{\n\n        font-size:50px;\n    }\n\n    @media(min-width:800px){\n\n        height:400px;\n\n        .icon{\n            font-size:18px;\n            margin-top:-40px;\n\n        }\n\n        .title-contacto{\n            font-size:20px;\n\n        }\n\n        .text1-contacto{\n            font-size:18px;\n            margin-top:40px;\n            height:60px;\n        }\n\n        .body-contacto{\n\n            height:330px;\n        }\n\n        .container-iconos{\n            height:310px;\n        }\n\n\n        .Whatsapp{\n\n            font-size:80px;\n        }\n\n        .Messenger{\n\n            font-size:75px;\n        }\n        .Contacto{\n\n            font-size:70px;\n        }\n\n    }\n"])));

var Contacto_render = function Contacto_render() {
  var redirects = ['https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina+tapimotosdk.com', 'https://api.whatsapp.com/send/?phone=573118928239&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina+tapimotosdk.com', 'https://www.facebook.com/Tapimotos-DK-110123437269115'];
  var data = [{
    'icono': _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faWhatsapp,
    'info1': 'Whatsapp',
    'info2': '3132954370',
    link: redirects[0]
  }, {
    'icono': _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faFacebookMessenger,
    'info1': 'Messenger',
    'info2': '¡Click aquí!',
    link: redirects[2]
  }, {
    'icono': _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPhoneAlt,
    'info1': 'Contacto',
    'info2': '3118928239',
    link: redirects[1]
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Contacto, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "title-contacto ",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "Contacto"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "body-contacto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "text1-contacto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
          style: {
            color: 'white'
          },
          children: "Comprar en Tapimotos nunca fue tan f\xE1cil"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "container-iconos",
        children: data.map(function (dato, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            onClick: function onClick() {
              return window.location.href = dato.link;
            },
            className: "icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: dato.info1 + " Svg",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                  className: data.info1,
                  icon: dato.icono
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "info1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
                  children: dato.info1
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "info2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
                  children: dato.info2
                })
              })]
            })
          }, index);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contacto_render);

/***/ }),

/***/ "./resources/js/components/credits.jsx":
/*!*********************************************!*\
  !*** ./resources/js/components/credits.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store */ "./resources/js/services/store.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Creditos = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n\n\n    .container-articles{\n        width:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        flex-wrap:wrap;\n    }\n\n\n    .title-main{\n\n        width:100%;\n        height:60px;\n        font-size:18px;\n    }\n    .article{\n\n        width:300px;\n        height:550px;\n        display:block;\n        margin-top:50px;\n    }\n\n    img{\n\n        height:298px;\n        box-shadow:0px 0px 10px rgba(0,0,0,0.25);\n        border-radius:30px;\n    }\n\n    .title-article{\n\n        width:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        height:60px;\n        color:#e98008;\n    }\n\n    .content-article{\n\n        width:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        color:gray;\n        height:150px;\n        overflow:hidden;\n\n    }\n\n    .know-more{\n\n        width:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        color:#0096d2;\n        height:22px;\n        text-decoration:none;\n    }\n\n    @media(min-width:800px){\n\n        .article{\n\n            margin:30px;\n        }\n\n        .title-main{\n\n            font-size:20px;\n        }\n\n        .title-article{\n            font-size:17px;\n        }\n\n        .content-article{\n\n            font-size:17px;\n        }\n\n        .know-more{\n            font-size:17px;\n        }\n    }\n"])));

var Creditos_render = function Creditos_render() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      credits = _useState2[0],
      setCredits = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().credits.response().then(function (response) {
      setCredits(response[0]);
    });
    return function () {
      setCredits(null);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Creditos, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "title-main d-flex justify-content-center align-items-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "Financiaci\xF3n y Creditos"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container-articles",
      children: credits !== null && credits.map(function (credit, index) {
        while (index < 3) {
          //this line print just three credits article
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "article",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: credit.img
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              className: "title-article",
              children: credit.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              className: "content-article",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                dangerouslySetInnerHTML: {
                  __html: credit.content
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: credit.link,
              className: "know-more",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
                children: "Saber m\xE1s"
              })
            })]
          }, index);
        }
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Creditos_render);

/***/ }),

/***/ "./resources/js/components/main-btn.jsx":
/*!**********************************************!*\
  !*** ./resources/js/components/main-btn.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Btn_category = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:360px;\n    height:100px;\n    background:", ";\n    border-radius:10px;\n    display:flex;\n    margin-top:25px;\n    cursor:pointer;\n    box-shadow:3px 3px 8px rgba(0,0,0,0.3);\n    overflow:hidden ;\n\n    .textos{\n\n        width:60%;\n        height:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n\n    }\n\n    .img{\n\n        width:40%;\n        height:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n    }\n\n    @media(min-width:800px){\n\n        margin-bottom:18px;\n    }\n\n"])), function (prop) {
  return prop.color;
});

var Main_btn_category = function Main_btn_category(_ref) {
  var name = _ref.name,
      discount = _ref.discount,
      img = _ref.img,
      color = _ref.color;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Btn_category, {
    color: color,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "textos",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          style: {
            display: 'block',
            fontSize: '18px',
            color: 'white'
          },
          children: name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          style: {
            display: 'block',
            marginLeft: '40px'
          },
          children: discount
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "img",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        style: {
          width: '70%'
        },
        src: img
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main_btn_category);

/***/ }),

/***/ "./resources/js/components/main-img.jsx":
/*!**********************************************!*\
  !*** ./resources/js/components/main-img.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Portada = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    margin-top:0px;\n\n\n    .img-desktop{\n\n        display:none;\n    }\n\n    .img-mobile{\n\n        display:block;\n    }\n\n    @media(min-width:800px){\n\n        margin-top:-18px;\n\n        .img-desktop{\n\n            display:block;\n        }\n\n        .img-mobile{\n\n            display:none;\n        }\n\n    }\n\n"])));

var Main_img = function Main_img() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Portada, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        className: "img-desktop",
        style: {
          width: '100%'
        },
        src: "./images/portada-desktop.png"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        className: "img-mobile",
        style: {
          width: '100%'
        },
        src: "./images/portada-principal-mobile.png"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main_img);

/***/ }),

/***/ "./resources/js/components/main-search.jsx":
/*!*************************************************!*\
  !*** ./resources/js/components/main-search.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _main_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-btn */ "./resources/js/components/main-btn.jsx");
/* harmony import */ var _styles_styles_main_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles-main-search */ "./resources/js/components/styles/styles-main-search.js");
/* harmony import */ var _search_llantas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-llantas */ "./resources/js/components/search-llantas.jsx");
/* harmony import */ var _search_cascos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-cascos */ "./resources/js/components/search-cascos.jsx");
/* harmony import */ var _search_aceites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-aceites */ "./resources/js/components/search-aceites.jsx");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/store */ "./resources/js/services/store.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Main_search = function Main_search() {
  var defaultData = [{
    'name': 'LLANTAS',
    'discount': '20% OFF',
    'img': './images/llantas.png'
  } //{'name':'LLANTAS POR MARCA','discount':'20% OFF','img':'./images/llantas.png'}
  ];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultData),
      _useState2 = _slicedToArray(_useState, 2),
      categories = _useState2[0],
      setCategories = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('LLANTAS'),
      _useState4 = _slicedToArray(_useState3, 2),
      nameCategory = _useState4[0],
      setNameCategory = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_search_llantas__WEBPACK_IMPORTED_MODULE_3__["default"], {})),
      _useState6 = _slicedToArray(_useState5, 2),
      typeSearch = _useState6[0],
      setTypeSearch = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    /*
    //defaultData must be equal to data[0] at  DataHome().main_search.response()
    DataHome().main_search.response().then(data =>{
         console.log(data[0][0]);
        //(data[0] !== 'Error can not get data') && setCategories(data[0])
        (data[0] !== 'Error can not get data') && setCategories([data[0][0]])
     });*/
    return function () {
      setCategories(defaultData);
    };
  }, []);

  var Click_category = function Click_category(index, category) {
    setNameCategory(category);
    category === 'LLANTAS' && setTypeSearch( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_search_llantas__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
    category === 'CASCOS' && setTypeSearch( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_search_cascos__WEBPACK_IMPORTED_MODULE_4__["default"], {}));
    category === 'ACEITES' && setTypeSearch( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_search_aceites__WEBPACK_IMPORTED_MODULE_5__["default"], {}));
    var buttons = document.getElementsByClassName('buttons-category');

    for (var i = 0; i < buttons.length; i++) {
      if (index === i) {
        buttons[i].firstChild.style.background = '#e98008';
      } else {
        buttons[i].firstChild.style.background = '#0096d2';
      }
    }

    $('html, body').animate({
      scrollTop: $('#scrollhere').offset().top
    }, 1000);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_styles_styles_main_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      style: {
        'overflow': 'hidden'
      },
      className: "contenedor-btns",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "btns",
        children: categories.map(function (category, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "buttons-category",
            onClick: function onClick() {
              return Click_category(index, category.name);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_main_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
              color: "#0096d2",
              name: category.name,
              discount: category.discount,
              img: category.img
            })
          }, index);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "main-search",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        id: "scrollhere",
        className: "title-search",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("b", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
            children: [" ", nameCategory]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "Form",
        children: typeSearch
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main_search);

/***/ }),

/***/ "./resources/js/components/search-aceites.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/search-aceites.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _btn1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn1 */ "./resources/js/components/btn1.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Aceites = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    height:390px;\n    background:#eeecec;\n\n    .aceites-title{\n\n        width:70%;\n        margin-left:15%;\n        height:60px;\n        background:rgb(233, 128, 8);\n        color:white;\n        border-radius:0px 0px 10px 10px;\n        display:flex;\n        justify-content:Center;\n        align-items:center;\n        font-size:16px;\n\n    }\n\n    .aceites-inputs{\n\n        width:100%;\n        margin-top:14px;\n        height:320px;\n    }\n\n    select{\n\n        width:80%;\n        height:45px;\n        border:0px;\n        margin-left:10%;\n        margin-top:28px;\n        border-radius:7px;\n        color:gray;\n        box-shadow:0px 0px 8px rgba(0,0,0,0.3);\n        background:white;\n\n    }\n    .btn-1{\n\n        width:80%;\n        height:45px;\n        margin-left:10%;\n        margin-top:28px;\n    }\n\n    @media(min-width:800px){\n\n        height:225px;\n\n\n        .aceites-title{\n\n            width:20%;\n            margin-left:5%;\n        }\n\n        .aceites-inputs{\n\n            height:130px;\n            display:flex;\n            justify-content:space-around;\n            align-items:center;\n            flex-wrap:wrap;\n        }\n\n        select{\n\n            width:250px;\n            margin-left:0;\n            font-size:18px;\n        }\n\n        .btn-1{\n\n            width:250px;\n            margin-left:0;\n            font-size:18px;\n        }\n    }\n"])));

var Search_aceites = function Search_aceites() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Aceites, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "aceites-title",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "Aceites"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "aceites-inputs",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          children: "Marca"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          children: "Tipo de moto"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "btn-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_btn1__WEBPACK_IMPORTED_MODULE_1__["default"], {
          width: "100%",
          height: "100%",
          color: "#0096d2",
          title: "Buscar"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search_aceites);

/***/ }),

/***/ "./resources/js/components/search-cascos.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/search-cascos.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _btn1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn1 */ "./resources/js/components/btn1.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Cascos = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    height:390px;\n    background:#eeecec;\n\n    .cascos-title{\n\n        width:70%;\n        margin-left:15%;\n        height:60px;\n        background:rgb(233, 128, 8);\n        color:white;\n        border-radius:0px 0px 10px 10px;\n        display:flex;\n        justify-content:Center;\n        align-items:center;\n        font-size:16px;\n\n    }\n\n    .cascos-inputs{\n\n        width:100%;\n        margin-top:14px;\n        height:320px;\n    }\n\n    select{\n\n        width:80%;\n        height:45px;\n        border:0px;\n        margin-left:10%;\n        margin-top:28px;\n        border-radius:7px;\n        color:gray;\n        box-shadow:0px 0px 8px rgba(0,0,0,0.3);\n        background:white;\n\n    }\n\n    .btn-1{\n\n        width:80%;\n        height:45px;\n        margin-left:10%;\n        margin-top:28px;\n    }\n\n    @media(min-width:800px){\n\n        height:225px;\n\n\n        .cascos-title{\n\n            width:20%;\n            margin-left:5%;\n        }\n\n        .cascos-inputs{\n\n            height:130px;\n            display:flex;\n            justify-content:space-around;\n            align-items:center;\n            flex-wrap:wrap;\n        }\n\n        select{\n\n            width:250px;\n            margin-left:0;\n            font-size:18px;\n        }\n\n        .btn-1{\n\n            width:250px;\n            margin-left:0;\n            font-size:18px;\n        }\n    }\n"])));

var Search_cascos = function Search_cascos() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Cascos, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cascos-title",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "Cascos"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "cascos-inputs",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          children: "Marca"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          children: "Color"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "btn-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_btn1__WEBPACK_IMPORTED_MODULE_1__["default"], {
          width: "100%",
          height: "100%",
          color: "#0096d2",
          title: "Buscar"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search_cascos);

/***/ }),

/***/ "./resources/js/components/search-llantas.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/search-llantas.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store */ "./resources/js/services/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _database_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/index */ "./resources/js/database/index.js");
/* harmony import */ var _search_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-product */ "./resources/js/components/search-product.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var Llantas = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    height:410px;\n    background:#eeecec;\n    position:relative;\n    margin-top:58px ;\n\n    .llantas-title{\n\n        width:70%;\n        margin-left:15%;\n        height:60px;\n        background:rgb(233, 128, 8);\n        color:white;\n        border-radius:0px 0px 10px 10px;\n        display:flex;\n        justify-content:Center;\n        align-items:center;\n        font-size:16px;\n\n    }\n\n    .llantas-inputs{\n\n        width:100%;\n        margin-top:40px;\n        height:320px;\n    }\n\n    select{\n\n        width:80%;\n        height:45px;\n        border:0px;\n        margin-left:10%;\n        margin-top:28px;\n        border-radius:7px;\n        color:gray;\n        box-shadow:0px 0px 8px rgba(0,0,0,0.3);\n        background:white;\n\n    }\n\n    .incluir-marca{\n\n        width:100%;\n        height:22px;\n        display:flex ;\n        justify-content:center ;\n        align-items:center;\n        position:absolute ;\n        top:78px\n    }\n\n    .incluir-marca > b{\n        background: #0096d2;\n        color:white;\n        padding:7px ;\n        border-radius:5px;\n        font-size:16px ;\n\n    }\n\n    .container-buscador-render{\n\n        position:absolute;\n        top:-70px;\n        left:16% ;\n    }\n\n    @media(min-width:800px){\n\n        height:225px;\n        margin-top:0px ;\n\n        .container-buscador-render{\n\n            top:5px;\n            left:80% ;\n        }\n\n        .llantas-title{\n\n            width:20%;\n            margin-left:5%;\n        }\n\n        .llantas-inputs{\n\n            height:130px;\n            display:flex;\n            justify-content:space-around;\n            align-items:center;\n            flex-wrap:wrap;\n        }\n\n        select{\n\n            width:250px;\n            margin-left:0;\n            font-size:18px;\n\n        }\n    }\n"])));

var Search_llantas = function Search_llantas() {
  var Marca_llantas_element = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var Ancho_llantas_element = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var Perfil_llantas_element = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var v2_Ancho_llantas_element = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var v2_Perfil_llantas_element = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Marca de la llanta'),
      _useState2 = _slicedToArray(_useState, 2),
      cargandoMarca = _useState2[0],
      setCargandoMarca = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Ancho de la llanta'),
      _useState4 = _slicedToArray(_useState3, 2),
      cargandoAncho = _useState4[0],
      setCargandoAncho = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Perfil de la llanta'),
      _useState6 = _slicedToArray(_useState5, 2),
      cargandoPerfil = _useState6[0],
      setCargandoPerfil = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Numero de rin'),
      _useState8 = _slicedToArray(_useState7, 2),
      cargandoRin = _useState8[0],
      setCargandoRin = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      marcaLlantas = _useState10[0],
      setMarcaLlantas = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      llantas_for_marca = _useState12[0],
      set_llantasForMarca = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      llantas_marcaAncho = _useState14[0],
      setLlantasMarcaAncho = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      llantas_marcaAnchoPerfil = _useState16[0],
      setLlantasMarcaAnchoPerfil = _useState16[1];
  /* search llantas sin marca */


  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState18 = _slicedToArray(_useState17, 2),
      v2_anchoLlantas = _useState18[0],
      v2_setAnchoLlantas = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState20 = _slicedToArray(_useState19, 2),
      v2_perfilLlantas = _useState20[0],
      v2_setPerfilLlantas = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState22 = _slicedToArray(_useState21, 2),
      v2_rinLlantas = _useState22[0],
      v2_setRinLlantas = _useState22[1];
  /* mostar buscador con marca o sin marca */


  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Quitar marca'),
      _useState24 = _slicedToArray(_useState23, 2),
      msg = _useState24[0],
      setMsg = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('none'),
      _useState26 = _slicedToArray(_useState25, 2),
      conMarca = _useState26[0],
      setConMarca = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('flex'),
      _useState28 = _slicedToArray(_useState27, 2),
      sinMarca = _useState28[0],
      setSinMarca = _useState28[1];

  var dispath = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var redirect = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();

  var GetLlantasMarca = function GetLlantasMarca(value) {
    setCargandoAncho('Cargando resultados...');
    setCargandoMarca(value);

    if (value !== 'Marca de la llanta' && value !== 'Cargando resultados...') {
      (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_llantas.llantas_for_marca(value).then(function (data) {
        data[0].length === 0 ? set_llantasForMarca(['Sin resultados']) : set_llantasForMarca(data[0]);
        setCargandoAncho('Ancho de la llanta');
      });
    } else {
      setCargandoAncho('Ancho de la llanta');
    }
  };

  var GetLlantasMarcaAncho = function GetLlantasMarcaAncho(marca, ancho) {
    setCargandoPerfil('Cargando resultados...');
    setCargandoAncho(ancho);

    if (ancho !== 'Ancho de la llanta' && ancho !== 'Sin resultados' && ancho !== 'Cargando resultados...') {
      (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_llantas.llantas_for_marcaAncho(marca, ancho).then(function (data) {
        data[0].length === 0 ? setLlantasMarcaAncho(['Sin resultados']) : setLlantasMarcaAncho(data[0]);
        setCargandoPerfil('Perfil de la llanta');
      });
    } else {
      setCargandoPerfil('Perfil de la llanta');
    }
  };

  var GetLlantasMarcaAnchoPerfil = function GetLlantasMarcaAnchoPerfil(marca, ancho, perfil) {
    setCargandoRin('Cargando resultados...');
    setCargandoPerfil(perfil);

    if (perfil !== 'Perfil de la llanta' && perfil !== 'Sin resultados' && perfil !== 'Cargando resultados...') {
      (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_llantas.llantas_for_marcaAnchoPerfil(marca, ancho, perfil).then(function (data) {
        data[0].length === 0 ? setLlantasMarcaAnchoPerfil(['Sin resultados']) : setLlantasMarcaAnchoPerfil(data[0]);
        setCargandoRin('Numero de rin');
      });
    } else {
      setCargandoRin('Numero de rin');
    }
  };

  var GoSearchLlantaRin = function GoSearchLlantaRin(marca, ancho, perfil, rin, categoria, dispatch, navegar) {
    if (rin !== 'Numero de rin' && rin !== 'Sin resultados' && rin !== 'Cargando resultados...') {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Categoria)({
        name: categoria,
        type: 'llantas'
      }));
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Filtros)([{
        type: 'Marca ',
        value: marca
      }, {
        type: 'Ancho ',
        value: ancho
      }, {
        type: 'Perfil ',
        value: perfil
      }, {
        type: 'N° rin ',
        value: rin
      }])); //[marca:['Marca',marca],ancho:['Ancho',ancho],perfil:['Perfil',perfil],rin:['N° rin',rin]]

      setCargandoRin(rin);
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Productos)(null));
      $('.llantas-inputs').empty();
      $('.llantas-inputs').append("\n                <div class=\"d-flex justify-content-center align-items-center\">\n                    <div style=\"width:100px;height:100px;font-size:20px;\" class=\"spinner-border text-secondary d-flex justify-content-center align-items-center\" role=\"status\">\n                        <span class=\"sr-only\">Loading...</span>\n                    </div>\n                </div>\n            ");
      (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_llantas.llantas_for_marcaAnchoPerfilRin(marca, ancho, perfil, rin).then(function (data) {
        console.log('from search-llantas,jsx ', data);
        dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Productos)(data[0]));
        dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Busqueda)(true));
        localStorage.setItem('data_busqueda', "".concat(ancho, "x").concat(perfil, "x").concat(rin));
        navegar('/productos/busqueda');
      });
    }
  };
  /* Metodos search llantas sin marca */


  var V2GetLlantasAnchoPerfil = function V2GetLlantasAnchoPerfil(value) {
    setCargandoPerfil('Cargando resultados...');
    setCargandoAncho(value);

    if (value !== 'Ancho de la llanta' && value !== 'Cargando resultados...') {
      (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_v2.llantas_ancho_perfil(value).then(function (data) {
        setCargandoPerfil('Perfil de la llanta');
        v2_setPerfilLlantas(data[0]);
      });
    }
  };

  var V2GetLlantasAnchoPerfilRin = function V2GetLlantasAnchoPerfilRin(ancho, perfil) {
    setCargandoRin('Cargando resultados...');
    setCargandoPerfil(perfil);

    if (perfil !== 'Cargando resultados...' && perfil !== 'Perfil de la llanta' && perfil !== 'Sin resultados') {
      (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_v2.llantas_ancho_perfil_rin(ancho, perfil).then(function (response) {
        setCargandoRin('Numero de rin');
        v2_setRinLlantas(response[0]);
      });
    }
  };

  var V2GoSearchLlantasRin = function V2GoSearchLlantasRin(ancho, perfil, rin, categoria, dispatch, navegar) {
    if (rin !== 'Numero de rin' && rin !== 'Sin resultados' && rin !== 'Cargando resultados...') {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Categoria)({
        name: categoria,
        type: 'llantas v2'
      }));
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Filtros)([{
        type: 'Marca ',
        value: '--'
      }, {
        type: 'Ancho ',
        value: ancho
      }, {
        type: 'Perfil ',
        value: perfil
      }, {
        type: 'N° rin ',
        value: rin
      }]));
      setCargandoRin(rin);
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Productos)(null));
      $('.llantas-inputs').empty();
      $('.llantas-inputs').append("\n                <div class=\"d-flex justify-content-center align-items-center\">\n                    <div style=\"width:100px;height:100px;font-size:20px;\" class=\"spinner-border text-secondary d-flex justify-content-center align-items-center\" role=\"status\">\n                        <span class=\"sr-only\">Loading...</span>\n                    </div>\n                </div>\n            ");
      (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_v2.llantas_ancho_perfil_rin_resultado(ancho, perfil, rin).then(function (data) {
        dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Productos)(data[0]));
        dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Busqueda)(true));
        localStorage.setItem('data_busqueda', "".concat(ancho, "x").concat(perfil, "x").concat(rin));
        navegar('/productos/busqueda');
      });
    }
  };

  var CambiarBuscador = function CambiarBuscador() {
    if (msg === 'Incluir marca') {
      setMsg('Quitar marca');
      window.screen.width > 600 && setConMarca('flex');
      window.screen.width < 600 && setConMarca('block');
      setSinMarca('none');
    } else {
      setMsg('Incluir marca');
      setConMarca('none');
      window.screen.width > 600 && setSinMarca('flex');
      window.screen.width < 600 && setSinMarca('block');
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    CambiarBuscador();
    setCargandoMarca('Cargando resultados...');
    (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_llantas.response().then(function (data) {
      setMarcaLlantas(data[0]);
      setCargandoMarca('Marca de la llanta');
    });
    setCargandoAncho('Cargando resultados...');
    (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_v2.llantas_ancho().then(function (data) {
      setCargandoAncho('Ancho de la llanta');
      v2_setAnchoLlantas(data[0]);
    });
    return function () {
      setMarcaLlantas(null);
      setCargandoMarca('Marca de la llanta');
      setCargandoAncho('Ancho de la llanta');
      v2_setAnchoLlantas(null);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Llantas, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container-buscador-render",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_search_product__WEBPACK_IMPORTED_MODULE_4__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "llantas-title",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
        children: "Llantas por medida"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        'display': conMarca
      },
      className: "llantas-inputs",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          'cursor': 'pointer'
        },
        className: "incluir-marca",
        onClick: function onClick() {
          return CambiarBuscador();
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
          children: msg
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
        value: cargandoMarca,
        ref: Marca_llantas_element,
        onChange: function onChange(e) {
          return GetLlantasMarca(e.target.value);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Marca de la llanta",
          children: "Marca de la llanta"
        }), marcaLlantas === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Cargando resultados...",
          children: "Cargando resultados..."
        }) : marcaLlantas.map(function (marca, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: marca.nombre,
            children: marca.nombre
          }, index);
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
        value: cargandoAncho,
        ref: Ancho_llantas_element,
        onChange: function onChange(e) {
          return GetLlantasMarcaAncho(Marca_llantas_element.current.value, e.target.value);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Ancho de la llanta",
          children: "Ancho de la llanta"
        }), llantas_for_marca === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Cargando resultados...",
          children: "Cargando resultados..."
        }) : llantas_for_marca.map(function (ancho_llanta, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: ancho_llanta,
            children: ancho_llanta
          }, index);
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
        value: cargandoPerfil,
        ref: Perfil_llantas_element,
        onChange: function onChange(e) {
          return GetLlantasMarcaAnchoPerfil(Marca_llantas_element.current.value, Ancho_llantas_element.current.value, e.target.value);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Perfil de la llanta",
          children: "Perfil de la llanta"
        }), llantas_marcaAncho === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Cargando resultados...",
          children: "Cargando resultados..."
        }) : llantas_marcaAncho.map(function (perfil_llanta, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: perfil_llanta,
            children: perfil_llanta
          }, index);
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
        value: cargandoRin,
        onChange: function onChange(e) {
          return GoSearchLlantaRin(Marca_llantas_element.current.value, Ancho_llantas_element.current.value, Perfil_llantas_element.current.value, e.target.value, 'Busqueda', dispath, redirect);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Numero de rin",
          children: "Numero de rin"
        }), llantas_marcaAnchoPerfil === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Cargando resultados...",
          children: "Cargando resultados..."
        }) : llantas_marcaAnchoPerfil.map(function (numero_rin, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: numero_rin,
            children: numero_rin
          }, index);
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        'display': sinMarca
      },
      className: "llantas-inputs",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          'cursor': 'pointer'
        },
        className: "incluir-marca",
        onClick: function onClick() {
          return CambiarBuscador();
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
          children: msg
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
        value: cargandoAncho,
        ref: v2_Ancho_llantas_element,
        onChange: function onChange(e) {
          return V2GetLlantasAnchoPerfil(e.target.value);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Ancho de la llanta",
          children: "Ancho de la llanta"
        }), v2_anchoLlantas === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Cargando resultados...",
          children: "Cargando resultados..."
        }) : v2_anchoLlantas.map(function (ancho, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: ancho,
            children: ancho
          }, index);
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
        value: cargandoPerfil,
        ref: v2_Perfil_llantas_element,
        onChange: function onChange(e) {
          return V2GetLlantasAnchoPerfilRin(v2_Ancho_llantas_element.current.value, e.target.value);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Perfil de la llanta",
          children: "Perfil de la llanta"
        }), v2_perfilLlantas === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Cargando resultados...",
          children: "Cargando resultados..."
        }) : v2_perfilLlantas.map(function (perfil, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: perfil,
            children: perfil
          }, index);
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
        value: cargandoRin,
        onChange: function onChange(e) {
          return V2GoSearchLlantasRin(v2_Ancho_llantas_element.current.value, v2_Perfil_llantas_element.current.value, e.target.value, 'Busqueda', dispath, redirect);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Numero de rin",
          children: "Numero de rin"
        }), v2_rinLlantas === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: "Cargando resultados...",
          children: "Cargando resultados..."
        }) : v2_rinLlantas.map(function (rin, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: rin,
            children: rin
          }, index);
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search_llantas);

/***/ }),

/***/ "./resources/js/components/services.jsx":
/*!**********************************************!*\
  !*** ./resources/js/components/services.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store */ "./resources/js/services/store.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Services = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n\n    .title-services{\n\n        width:100%;\n        height:60px;\n        font-size:18px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n    }\n\n    .container-services{\n\n        width:100%;\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        flex-wrap:wrap;\n\n    }\n\n    .service{\n\n        width:330px;\n        height:200px;\n        display:flex;\n        margin-top:50px;\n        cursor:pointer;\n    }\n\n    .img{\n\n        width:44%;\n        height:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        margin-right:1%;\n    }\n\n    .content{\n\n        margin-left:2%;\n        width:53%;\n        height:100%;\n    }\n\n    .title-service{\n\n        height:40px;\n        color:#e98008;\n    }\n\n    .body{\n        width:100%;\n        height:130px;\n        overflow:hidden;\n        color:gray;\n    }\n\n    @media(min-width:800px){\n\n        .title-services{\n\n            font-size:20px;\n        }\n\n        .container-services{\n\n            padding-left:100px;\n            padding-right:100px;\n        }\n        .service{\n\n            width:345px;\n            font-size:17px;\n            margin:40px;\n        }\n\n    }\n"])));

var Services_render = function Services_render() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      service = _useState2[0],
      setService = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().services.response().then(function (response) {
      setService(response[0]);
    });
    return function () {
      setService(null);
    };
  }, []);

  var redirect = function redirect(url) {
    window.location.href = url;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Services, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "title-services",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "Servicios"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container-services",
      children: service !== null && service.map(function (data, index) {
        while (index < 4) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            onClick: function onClick() {
              return redirect(data.link);
            },
            className: "service",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "img",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                style: {
                  width: '100%',
                  borderRadius: '40px'
                },
                src: data.img
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "title-service d-flex justify-content-start align-items-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
                  children: data.title
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "body d-flex justify-content-center align-items-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: data.content
                    }
                  })
                })
              })]
            })]
          }, index);
        }
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services_render);

/***/ }),

/***/ "./resources/js/components/styles/styles-main-search.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/styles/styles-main-search.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Search = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    height:600px;\n    margin-top:40px;\n\n    .contenedor-btns{\n\n        width:100%;\n        display:flex;\n        justify-content:center;\n        height:180px;\n        overflow-y:scroll;\n        padding:4px;\n\n    }\n\n    .main-search{\n\n        width:100%;\n        height:470px;\n    }\n\n    .title-search{\n\n        width:100%;\n        height:70px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        font-size:19px;\n    }\n\n    .Form{\n\n        width:100%;\n        height:400px;\n    }\n\n\n    @media(min-width:800px){\n\n          height:450px;\n\n\n        .contenedor-btns{\n\n            width:100%;\n            height:150px;\n            overflow-y:hidden;\n            overflow-x:scroll;\n\n\n        }\n\n        .btns{\n\n            width:100%;\n            display:flex;\n            justify-content:space-around;\n            align-items:center;\n        }\n        .main-search{\n\n            width:100%;\n            height:300px;\n        }\n\n        .title-search{\n\n            width:100%;\n            height:70px;\n            display:flex;\n            justify-content:center;\n            align-items:center;\n            font-size:18px;\n        }\n\n        .Form{\n\n            width:100%;\n            height:230px;\n        }\n    }\n\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./resources/js/pages/home.js":
/*!************************************!*\
  !*** ./resources/js/pages/home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_asesores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/asesores */ "./resources/js/components/asesores.jsx");
/* harmony import */ var _components_btn_whatsapp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/btn-whatsapp */ "./resources/js/components/btn-whatsapp.jsx");
/* harmony import */ var _components_contacto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contacto */ "./resources/js/components/contacto.jsx");
/* harmony import */ var _components_credits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/credits */ "./resources/js/components/credits.jsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./resources/js/components/footer.jsx");
/* harmony import */ var _components_main_img__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/main-img */ "./resources/js/components/main-img.jsx");
/* harmony import */ var _components_main_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/main-search */ "./resources/js/components/main-search.jsx");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/services */ "./resources/js/components/services.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../database */ "./resources/js/database/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








 //update carrito






var Home = function Home() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    //reset title page
    document.title = 'Inicio'; //update menu page

    var links = document.getElementsByClassName('link');

    for (var i = 0; i < links.length; i++) {
      links[i].innerText === 'Inicio' ? links[i].classList.add('link-activo') : links[i].classList.remove('link-activo');
    } //update carrito


    var carrito = JSON.parse(localStorage.getItem('products_carrito'));

    if (carrito !== null) {
      dispatch((0,_database__WEBPACK_IMPORTED_MODULE_10__.UpdateCart)(carrito));
      dispatch((0,_database__WEBPACK_IMPORTED_MODULE_10__.UpdateCuantity)(carrito.length));
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_main_img__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_btn_whatsapp__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_main_search__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_credits__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_services__WEBPACK_IMPORTED_MODULE_8__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_contacto__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_asesores__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

}]);