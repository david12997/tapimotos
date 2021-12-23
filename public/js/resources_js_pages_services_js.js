"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_services_js"],{

/***/ "./resources/js/components/contenido-services.jsx":
/*!********************************************************!*\
  !*** ./resources/js/components/contenido-services.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store */ "./resources/js/services/store.js");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner */ "./resources/js/components/spinner.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Services_contenido = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n\n    .title{\n\n        width:100%;\n        height:50px;\n        font-size:22px;\n        color:black;\n        font-weight:bold;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        padding:20px;\n        margin-top:20px;\n    }\n\n"])));

var Conteindo_services = function Conteindo_services() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      servicios = _useState2[0],
      setServicios = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataProducts)().Products.getServices().then(function (data) {
      setServicios(data[0]);
    });
    return function () {
      setServicios(null);
    };
  }, []);
  console.log(servicios);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Services_contenido, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "title",
      children: "\xA1Conoce lo mejor de tapimotos!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: {
        padding: '10px'
      },
      className: "d-flex justify-content-around align-items-center flex-wrap",
      children: servicios === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        width: "150px",
        height: "150px",
        size: "20px"
      }) : servicios.map(function (service, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: {
            margin: '16px',
            marginTop: '22px'
          },
          className: "servicio",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "card",
            style: {
              width: "19rem",
              boxShadow: "0px 0px 6px rgba(0,0,0,0.1)"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              style: {
                height: '210px'
              },
              className: "card-img-top",
              src: service.img,
              alt: "Card image cap"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                className: "card-title",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
                  children: service.title
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                style: {
                  height: '150px',
                  overflow: 'hidden',
                  color: 'gray',
                  fontWeight: 'bold'
                },
                dangerouslySetInnerHTML: {
                  __html: service.content
                },
                className: "card-text"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: service.link,
                className: "btn btn-secondary btn-block text-white",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
                  children: "Ver m\xE1s"
                })
              })]
            })]
          })
        }, index);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Conteindo_services);

/***/ }),

/***/ "./resources/js/components/portada-services.jsx":
/*!******************************************************!*\
  !*** ./resources/js/components/portada-services.jsx ***!
  \******************************************************/
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





var Portada = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    position:relative;\n\n    .img-desktop{\n\n        display:none;\n    }\n    .img-mobile{\n\n        display:block;\n        width:100%;\n    }\n\n    .container-titulo{\n\n        position:absolute;\n        color:white;\n        text-shadow:0px 0px 15px black;\n        width:100%;\n        display:flex;\n        justify-content:center;\n        margin-top:20%;\n        font-weight:bold;\n    }\n\n    @media(min-width:800px){\n\n        margin-top:-19px;\n\n        .img-desktop{\n\n            width:100%;\n            display:block;\n        }\n\n        .img-mobile{\n\n            display:none;\n        }\n\n        .container-titulo{\n\n            margin-top:13%;\n        }\n    }\n"])));

var Portada_services_render = function Portada_services_render() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Portada, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container-titulo",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
        children: "Servicios"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      className: "img-desktop",
      src: "./images/portada-servicios-desktop.png"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      className: "img-mobile",
      src: "./images/portada-servicios-mobile.png"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portada_services_render);

/***/ }),

/***/ "./resources/js/pages/services.js":
/*!****************************************!*\
  !*** ./resources/js/pages/services.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_contenido_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/contenido-services */ "./resources/js/components/contenido-services.jsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./resources/js/components/footer.jsx");
/* harmony import */ var _components_portada_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/portada-services */ "./resources/js/components/portada-services.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database */ "./resources/js/database/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



 //update carrito






function Services() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = 'Servicios';
    var links = document.getElementsByClassName('link');

    for (var i = 0; i < links.length; i++) {
      links[i].innerText === 'Servicios' ? links[i].classList.add('link-activo') : links[i].classList.remove('link-activo');
    } //update carrito


    var carrito = JSON.parse(localStorage.getItem('products_carrito'));

    if (carrito !== null) {
      dispatch((0,_database__WEBPACK_IMPORTED_MODULE_5__.UpdateCart)(carrito));
      dispatch((0,_database__WEBPACK_IMPORTED_MODULE_5__.UpdateCuantity)(carrito.length));
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_portada_services__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_contenido_services__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

/***/ })

}]);