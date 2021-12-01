"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_filtros-products_jsx-resources_js_pages_products_js"],{

/***/ "./resources/js/components/body-tienda.jsx":
/*!*************************************************!*\
  !*** ./resources/js/components/body-tienda.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _card_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-product */ "./resources/js/components/card-product.jsx");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner */ "./resources/js/components/spinner.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _filtros_llantas_tienda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtros-llantas-tienda */ "./resources/js/components/filtros-llantas-tienda.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var Cuerpo_tienda = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    background:#eeecec;\n    display:flex;\n    justify-content:center;\n    padding-top:10px;\n\n    .filtros-desktop-body{\n\n        display:none;\n    }\n\n    .container-productos{\n\n        width:90%;\n        height:99%;\n        display:flex;\n        justify-content:space-around;\n        flex-wrap:wrap;\n        padding:8px;\n    }\n\n    .filtro{\n\n        border-radius:10px 10px 10px 10px;\n        background:white;\n    }\n    .img-filtro{\n\n        background:rgb(0,150,210);\n        border-radius:10px 10px 0px 0px;\n\n\n    }\n\n    .categories-filtro{\n\n        border-radius:10px 10px 10px 10px;\n        background:white;\n        padding:10px;\n        margin-top:35px;\n\n    }\n\n    .Llantas, .Aceites, .Cascos{\n\n        margin-left:10%;\n        width:80%;\n        margin-top:12px;\n        margin-bottom:12px;\n        border-bottom:2px solid gray;\n        cursor:pointer;\n    }\n\n    @media(min-width:800px){\n\n        .filtros-desktop-body{\n\n            display:block;\n            width:20%;\n            border-radius:10px 10px 10px 10px;\n            margin-top:33px;\n\n        }\n\n        .container-productos{\n\n            width:75%;\n            height:99%;\n\n        }\n\n\n    }\n\n"])));

var Body_tienda = function Body_tienda(_ref) {
  var data_state = _ref.data_state;
  console.log(data_state.Productos);

  var AllProducts = function AllProducts() {
    var Products = [];
    data_state.Productos[2].data.map(function (llantas, indice) {
      return Products.push({
        name: llantas.nombre_llanta,
        img: llantas.img,
        price: llantas.precio_llanta
      });
    });
    data_state.Productos[1].map(function (casco, indice) {
      return Products.push({
        name: casco.name,
        img: "/images/casco.png",
        price: casco.regular_price
      });
    });
    data_state.Productos[0].map(function (aceite, indice) {
      return Products.push({
        name: aceite.name,
        img: "/images/aceite.png",
        price: aceite.regular_price
      });
    });
    return Products;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Cuerpo_tienda, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "filtros-desktop-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "filtro",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "img-filtro",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            style: {
              width: '100%'
            },
            src: "/images/ejemplo-llantas.png"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "inputs-filtro",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            style: {
              width: '100%',
              margin: '18px',
              color: 'gray'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faFilter
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
              children: "Filtrar busqueda"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_filtros_llantas_tienda__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "categories-filtro",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          style: {
            width: '100%',
            margin: '2px',
            color: 'gray',
            display: 'flex',
            justifyContent: 'center'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
            children: "Catgeorias"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "Llantas",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            style: {
              width: '100%'
            },
            src: "/images/llantas.png"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "Aceites",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            style: {
              width: '100%'
            },
            src: "/images/aceite.png"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "Cascos",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            style: {
              width: '100%'
            },
            src: "/images/casco.png"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container-productos",
      children: data_state.Productos === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        width: "250px",
        height: "250px",
        size: "20px"
      }) : data_state.Categoria.name === 'Todo' ? AllProducts().map(function (product, indice) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_card_product__WEBPACK_IMPORTED_MODULE_1__["default"], {
          img: product.img,
          name: product.name,
          price: product.price
        }, indice);
      }) : data_state.Categoria.name === 'Llantas' ? data_state.Productos[0].products.map(function (llantas, indice) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_card_product__WEBPACK_IMPORTED_MODULE_1__["default"], {
          img: llantas.img,
          name: llantas.nombre_llanta,
          price: llantas.precio_llanta
        }, indice);
      }) : data_state.Categoria.name === 'Cascos' ? data_state.Productos[0].map(function (casco, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_card_product__WEBPACK_IMPORTED_MODULE_1__["default"], {
          img: "/images/casco.png",
          name: casco.name,
          price: casco.regular_price
        }, index);
      }) : data_state.Categoria.name === 'Aceites' ? data_state.Productos[0].map(function (aceite, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_card_product__WEBPACK_IMPORTED_MODULE_1__["default"], {
          img: "/images/aceite.png",
          name: aceite.name,
          price: aceite.regular_price
        }, index);
      }) : data_state.Categoria.name === 'Buscar' ? data_state.Productos.map(function (product, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_card_product__WEBPACK_IMPORTED_MODULE_1__["default"], {
          img: "/images/llantas.png",
          name: product.nombre_llanta,
          price: product.precio_llanta
        }, index);
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        children: "Ups, categoria erronea."
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Body_tienda);

/***/ }),

/***/ "./resources/js/components/btn1.jsx":
/*!******************************************!*\
  !*** ./resources/js/components/btn1.jsx ***!
  \******************************************/
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




var Btn1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:", ";\n    height:", ";\n\n    display:flex;\n    justify-content:center;\n    align-items:center;\n\n    .btn1{\n\n        width:100%;\n        height:90%;\n        boder-radius:10px;\n        background:", ";\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        border-radius:8px;\n        color:white;\n        box-shadow:2px 2px 6px rgba(0,0,0,0.4);\n        font-size:17px;\n        cursor:pointer;\n    }\n\n\n"])), function (prop) {
  return prop.width;
}, function (prop) {
  return prop.height;
}, function (prop) {
  return prop.color;
});

var Btn1_render = function Btn1_render(_ref) {
  var width = _ref.width,
      height = _ref.height,
      title = _ref.title,
      color = _ref.color;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Btn1, {
    color: color,
    width: width,
    height: height,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "btn1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: title
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Btn1_render);

/***/ }),

/***/ "./resources/js/components/card-product.jsx":
/*!**************************************************!*\
  !*** ./resources/js/components/card-product.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _btn1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn1 */ "./resources/js/components/btn1.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Card_element = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:300px;\n    height:450px;\n    margin:5px;\n    background:white;\n    box-shadow:0px 0px 4px rgba(0,0,0,0.4);\n    border-radius:7px;\n    margin-top:25px;\n\n    .img-product{\n\n        width:100%;\n        height:150px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n    }\n\n    .name-product{\n\n        width:100%;\n        height:60px;\n        display:flex;\n        justify-content:flex-start;\n        align-items:center;\n        font-weight:bold;\n\n    }\n\n    .name{\n\n        background:rgb(0, 150, 210);\n        color:white;\n        height:76%;\n        width:85%;\n        padding:8px;\n        font-size:15px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n\n    }\n\n    .price-product{\n\n        width:100%;\n        height:40px;\n        font-size:17px;\n        color:green;\n        padding:7px;\n    }\n    .actions-card{\n\n        width:100%;\n        height:100px;\n\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        padding:7px;\n        cursor:pointer;\n    }\n\n    .container-cantidad{\n\n        width:50%;\n    }\n\n\n    .cuantity, .btn-less, .btn-more{\n\n        width:30%;\n        font-size:16px;\n    }\n\n    .cuantity{\n\n        margin-left:5px;\n        margin-right:5px;\n    }\n\n    .iconos{\n        width:40%;\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        margin-top:23px;\n    }\n\n    .container-btn-comprar{\n\n        width:100%;\n        height:70px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        curosr:pointer\n    }\n\n    .ver-detalle{\n\n        width:100%;\n        height:30px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        color:gray;\n        cursor:pointer\n\n    }\n\n\n"])));

var Card_render = function Card_render(_ref) {
  var img = _ref.img,
      name = _ref.name,
      price = _ref.price;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Card_element, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "img-product",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        style: {
          height: '100%'
        },
        src: img
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "name-product",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "name",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: name
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "price-product",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("b", {
          children: ["$ ", new Intl.NumberFormat().format(Math.ceil(parseInt(price))), " COP"]
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          style: {
            color: 'gray'
          },
          children: "C/U"
        }), " "]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "actions-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "container-cantidad",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          style: {
            color: 'gray'
          },
          children: "Cantidad"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "controls-cuantity",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: {
              fontWeight: 'bold'
            },
            className: "btn-less btn btn-danger",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
              children: "-"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            type: "number",
            className: "cuantity"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: {
              fontWeight: 'bold'
            },
            className: "btn-more btn btn-success",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
              children: "+"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "iconos",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: {
            fontSize: '27px',
            color: 'green'
          },
          className: "whatsapp",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faWhatsapp
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: {
            fontSize: '24px',
            color: 'gray'
          },
          className: "add-cart",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCartPlus
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "container-btn-comprar",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_btn1__WEBPACK_IMPORTED_MODULE_1__["default"], {
        width: "90%",
        height: "80%",
        title: "Comprar",
        color: "rgb(255,137,12)"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "ver-detalle",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        style: {
          paddingTop: '15px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: "Ver detalles"
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card_render);

/***/ }),

/***/ "./resources/js/components/filtros-llantas-tienda.jsx":
/*!************************************************************!*\
  !*** ./resources/js/components/filtros-llantas-tienda.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store */ "./resources/js/services/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _database_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/index */ "./resources/js/database/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Filtro_llantas_element = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n\n    select{\n\n        width:90%;\n        border:0px;\n        background:white;\n        color:gray;\n        margin-top:15px;\n        box-shadow:0px 0px 6px rgba(0,0,0,0.4);\n        margin-left:5%;\n        height:40px;\n        border-radius:5px;\n        margin-bottom:25px;\n        font-weight:bold;\n    }\n\n"])));

var Filtro_llantas_tienda = function Filtro_llantas_tienda() {
  var Marca_llantas_element = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var Ancho_llantas_element = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var Perfil_llantas_element = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

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

  var dispath = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var redirect = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();

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
        name: categoria
      }));
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Filtros)({
        marca: ['Marca', marca],
        ancho: ['Ancho', ancho],
        perfil: ['Perfil', perfil],
        rin: ['N° rin', rin]
      }));
      setCargandoRin(rin);
      (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_llantas.llantas_for_marcaAnchoPerfilRin(marca, ancho, perfil, rin).then(function (data) {
        console.log(data);
        dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Productos)(data[0]));
        dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Busqueda)(true));
        navegar('/productos/busqueda');
      });
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCargandoMarca('Cargando resultados...');
    (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_llantas.response().then(function (data) {
      setMarcaLlantas(data[0]);
      setCargandoMarca('Marca de la llanta');
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Filtro_llantas_element, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
      value: cargandoMarca,
      ref: Marca_llantas_element,
      onChange: function onChange(e) {
        return GetLlantasMarca(e.target.value);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
        value: "Marca de la llanta",
        children: "Marca de la llanta"
      }), marcaLlantas === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
        value: "Cargando resultados...",
        children: "Cargando resultados..."
      }) : marcaLlantas.map(function (marca, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
          value: marca.nombre,
          children: marca.nombre
        }, index);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
      value: cargandoAncho,
      ref: Ancho_llantas_element,
      onChange: function onChange(e) {
        return GetLlantasMarcaAncho(Marca_llantas_element.current.value, e.target.value);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
        value: "Ancho de la llanta",
        children: "Ancho de la llanta"
      }), llantas_for_marca === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
        value: "Cargando resultados...",
        children: "Cargando resultados..."
      }) : llantas_for_marca.map(function (ancho_llanta, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
          value: ancho_llanta,
          children: ancho_llanta
        }, index);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
      value: cargandoPerfil,
      ref: Perfil_llantas_element,
      onChange: function onChange(e) {
        return GetLlantasMarcaAnchoPerfil(Marca_llantas_element.current.value, Ancho_llantas_element.current.value, e.target.value);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
        value: "Perfil de la llanta",
        children: "Perfil de la llanta"
      }), llantas_marcaAncho === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
        value: "Cargando resultados...",
        children: "Cargando resultados..."
      }) : llantas_marcaAncho.map(function (perfil_llanta, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
          value: perfil_llanta,
          children: perfil_llanta
        }, index);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
      value: cargandoRin,
      onChange: function onChange(e) {
        return GoSearchLlantaRin(Marca_llantas_element.current.value, Ancho_llantas_element.current.value, Perfil_llantas_element.current.value, e.target.value, 'Buscar', dispath, redirect);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
        value: "Numero de rin",
        children: "Numero de rin"
      }), llantas_marcaAnchoPerfil === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
        value: "Cargando resultados...",
        children: "Cargando resultados..."
      }) : llantas_marcaAnchoPerfil.map(function (numero_rin, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
          value: numero_rin,
          children: numero_rin
        }, index);
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filtro_llantas_tienda);

/***/ }),

/***/ "./resources/js/components/filtros-products.jsx":
/*!******************************************************!*\
  !*** ./resources/js/components/filtros-products.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _search_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-product */ "./resources/js/components/search-product.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _pages_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/products */ "./resources/js/pages/products.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var Filtros_html = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n\n\n    .filtros{\n\n        width:100%;\n    }\n\n    .buscador{\n        padding:12px;\n        width:100%;\n        display:flex;\n        justify-content:flex-end;\n    }\n\n    .titulo{\n\n        width:100%;\n        height:40px;\n        margin-top:20px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        position:relative;\n    }\n\n    .title-category{\n\n        background:transparent;\n        border:0px;\n        font-size:20px;\n        font-weight:bold;\n        margin-left:12%;\n    }\n\n    .btn-filtrar-busqueda{\n\n        position:absolute;\n        color:gray;\n        margin-right:64%;\n    }\n\n    .filtro-aplicado{\n\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        flex-wrap:wrap;\n\n    }\n\n    .container-filter{\n\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        width:107px;\n        margin-top:-6px;\n    }\n\n    .filter{\n\n        color:gray;\n\n    }\n\n    .container-pagination{\n\n        width:100%;\n        height:50px;\n        background:rgb(255, 137, 12);\n        display:flex;\n        justify-content:center;\n        align-items:center;\n    }\n\n    .container-link-pages{\n        width:100%;\n    }\n    .bg-white{\n\n        width:36px;\n        height:36px;\n        margin:2px;\n    }\n\n    .container-buscador-desktop{\n\n        display:none;\n    }\n\n    .container-filtros-desktop{\n\n        display:none;\n    }\n\n\n    @media(min-width:800px){\n\n        .buscador{\n\n            display:none;\n        }\n\n        .btn-filtrar-busqueda{\n\n            display:none;\n        }\n\n        .filtro-aplicado{\n\n            display:none;\n        }\n\n        .container-pagination{\n\n            height:80px;\n            justify-content:space-around;\n        }\n\n        .title-category{\n\n            margin-left:0px;\n        }\n\n        .container-buscador-desktop{\n\n            border-left:2px solid white;\n            display:flex;\n            justify-content:center;\n            align-items:center;\n            width:300px;\n        }\n\n        .container-filtros-desktop{\n\n            border-right:2px solid white;\n            display:flex;\n            width:300px;\n            justify-content:space-around;\n            aign-items:center\n            padding:5px;\n            font-size:15px;\n        }\n\n        .container-filter{\n\n            display:flex;\n            justify-content:space-around;\n            flex-wrap:wrap;\n            width:100px;\n            margin-left:5px;\n            margin-right:5px;\n            margin-top:0px;\n        }\n\n        .filter{\n\n            color:white;\n        }\n\n        .bg-white{\n\n            width:40px;\n            height:40px;\n            margin:3px;\n            font-size:17px;\n        }\n\n\n    }\n\n\n"])));

var redirect = function redirect(route, redireccion, dispatch) {
  route === 'llantas' && redireccion('/productos/llantas');
  route === 'cascos' && redireccion('/productos/cascos');
  route === 'aceites' && redireccion('/productos/aceites');
  route === 'todo' && redireccion('/productos');
  (0,_pages_products__WEBPACK_IMPORTED_MODULE_4__.UpdateStateTienda)(route, dispatch);
};

var Filtros_render = function Filtros_render(_ref) {
  var data_state = _ref.data_state;
  var redireccion = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Filtros_html, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "filtros",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "buscador",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_search_product__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "titulo",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "btn-filtrar-busqueda",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faFilter
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: " Filtrar busqueda"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
          value: data_state.Categoria !== null && data_state.Categoria.name,
          onChange: function onChange(e) {
            return redirect(e.currentTarget.value.toLowerCase(), redireccion, dispatch);
          },
          className: "title-category",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            defaultValue: "/",
            children: "Todo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            defaultValue: "llantas",
            children: "Llantas"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            defaultValue: "cascos",
            children: "Cascos"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            defaultValue: "aceites",
            children: "Aceites"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "filtro-aplicado",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "container-filter",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
            className: "filter",
            children: "Marca: "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
            children: " MICHELIN"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "container-filter",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
            className: "filter",
            children: "Ancho :"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
            children: " 180"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "container-filter",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
            className: "filter",
            children: "Perfil: "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
            children: " 180"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "container-filter",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
            className: "filter",
            children: "N\xB0 rin: "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
            children: " 180"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "container-pagination",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "container-filtros-desktop",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "container-filter",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
              className: "filter",
              children: "  Marca: "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
              children: " MICHELIN"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "container-filter",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
              className: "filter",
              children: "Ancho :"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
              children: " 180"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "container-filter",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
              className: "filter",
              children: "Perfil: "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
              children: " 180"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "container-filter",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
              className: "filter",
              children: "N\xB0 rin: "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
              children: " 180"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "contanier-link-pages",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "btn  bg-white",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faAngleLeft
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "btn  bg-white",
            children: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "btn  bg-white",
            children: "2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "btn  bg-white",
            children: "3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "btn  bg-white",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faAngleRight
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "container-buscador-desktop",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_search_product__WEBPACK_IMPORTED_MODULE_1__["default"], {})
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filtros_render);

/***/ }),

/***/ "./resources/js/components/footer.jsx":
/*!********************************************!*\
  !*** ./resources/js/components/footer.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Footer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n\n    display:grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 4fr 1.5fr 0.5fr;\n    grid-template-areas:\n        \"info info info\"\n        \"logos logos logos\"\n        \"pie pie pie\";\n\n    .info{\n\n        grid-column-start:info;\n        grid-column-end:info;\n        grid-row-start:info;\n        grid-row-end:info;\n\n        background:black;\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        flex-wrap:wrap;\n        color:white;\n        font-size:16px;\n        margin-top:120px;\n\n    }\n\n    .info1 , .info2 , .info3{\n\n        width:300px;\n        height:30%;\n        margin-top:15px;\n\n\n    }\n\n    .main-logo{\n\n       width:70%;\n        margin-bottom:5px;\n        margin-left:10%;\n    }\n\n    .data1, .title, .data2, .title3, .data3{\n\n        margin-left:17%;\n    }\n\n    .logos{\n        grid-column-start:logos;\n        grid-column-end:logos;\n        grid-row-start:logos;\n        grid-row-end:logos;\n\n        background:black;\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        flex-wrap:wrap;\n\n    }\n\n    .img-logos{\n\n        width:90%;\n    }\n\n    .pie{\n\n        grid-column-start:pie;\n        grid-column-end:pie;\n        grid-row-start:pie;\n        grid-row-end:pie;\n\n        background:rgb(233,128,8);\n        color:white;\n\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        padding-top:7px;\n        flex-wrap:wrap;\n    }\n\n    @media(min-width:800px){\n\n        height:650px;\n        margin-top:0px;\n\n        .main-logo{\n\n            width:100%;\n            margin-left:0%;\n        }\n\n        .img-logos{\n\n            width:28%;\n        }\n\n        .info{\n            margin-top:0px;\n        }\n        .info1, .info2, .info3{\n\n            margin-top:-110px;\n        }\n    }\n\n\n"])));

var Footer_render = function Footer_render() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Footer, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "info",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "info1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: "main-logo",
          src: "/images/logo-tapimotos.png"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "data1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "Oficina: Cra 11-6-46 Villanueva"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "Casanare Colombia"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "email: ventas@tapimotosdk.com"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "info2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            color: 'rgb(233,128,8)'
          },
          className: "title",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: "Servicio al cliente"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "data2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "ventas: ventas@tapimotosdk.com"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "Whatsapp: 3208168103"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "M\xE9todos de pago"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "Env\xEDos"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "Garant\xEDas"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "info3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            color: 'rgb(233,128,8)'
          },
          className: "title3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: "Legal"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "data3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "legal@tapimotosdk.com"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "T\xE9rminos y condiciones"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "Tratamiento de datos"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "Manual de usuario"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "logos",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        className: "img-logos",
        src: "/images/mercadopago.png"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        className: "img-logos",
        src: "/images/addi.png"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "pie",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "Todos los derechos reservados "
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small", {
            children: "Tapimotosdk villanueva casanare"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("b", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faFacebook
              }), " Tapimotos DK"]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("b", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faWhatsapp
              }), " 320 816 8103"]
            })
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer_render);

/***/ }),

/***/ "./resources/js/components/search-product.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/search-product.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Buscador = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:250px;\n    height:60px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n\n    .input-search{\n\n        width:90%;\n        height:75%;\n        color:gray;\n        border:0px;\n        box-shadow:0px 0px 5px rgba(0,0,0,0.35);\n        border-radius:5px 0px 0px 5px;\n    }\n\n    .btn-search{\n\n        font-size:20px;\n        box-shadow:0px 0px 5px rgba(0,0,0,0.35);\n    }\n"])));

var Buscador_render = function Buscador_render() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Buscador, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      className: "input-search",
      type: "text",
      placeholder: "Buscar producto"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      className: "btn btn-secondary btn-search",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSearch
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buscador_render);

/***/ }),

/***/ "./resources/js/pages/products.js":
/*!****************************************!*\
  !*** ./resources/js/pages/products.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateStateTienda": () => (/* binding */ UpdateStateTienda),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_filtros_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/filtros-products */ "./resources/js/components/filtros-products.jsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./resources/js/components/footer.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/store */ "./resources/js/services/store.js");
/* harmony import */ var _database_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database/index */ "./resources/js/database/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_body_tienda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/body-tienda */ "./resources/js/components/body-tienda.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


 //parametros url


 //data ajax localstorage

 //data redux






var UpdateStateTienda = function UpdateStateTienda(category, dispatch) {
  if (category === 'busqueda') {
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Busqueda)(true));
    return 0;
  } else {
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Busqueda)(false));
  }

  dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Productos)(null));

  if (category === 'llantas') {
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Categoria)({
      name: 'Llantas'
    }));
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Filtros)({
      marca: ['Marca:', '--'],
      ancho: ['Ancho:', '--'],
      perfil: ['Perfil:', '--'],
      rin: ['N° rin:', '--']
    }));
    (0,_services_store__WEBPACK_IMPORTED_MODULE_3__.DataProducts)().Products.getLlantas('').then(function (data) {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Productos)(data));
    });
  }

  if (category === 'cascos') {
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Categoria)({
      name: 'Cascos'
    }));
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Filtros)({
      marca: ['Marca:', '--'],
      color: ['Color:', '--']
    }));
    (0,_services_store__WEBPACK_IMPORTED_MODULE_3__.DataProducts)().Products.getCascos('').then(function (data) {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Productos)(data));
    });
  }

  if (category === 'aceites') {
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Categoria)({
      name: 'Aceites'
    }));
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Filtros)({
      marca: ['Marca:', '--'],
      tipo: ['Tipo de moto:', '--']
    }));
    (0,_services_store__WEBPACK_IMPORTED_MODULE_3__.DataProducts)().Products.getAceites('').then(function (data) {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Productos)(data));
    });
  }

  if (category === 'todo' || category === undefined || category === null) {
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Categoria)({
      name: 'Todo'
    }));
    (0,_services_store__WEBPACK_IMPORTED_MODULE_3__.DataProducts)().Products.getAll('', '', '').then(function (data) {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Productos)(data));
    });
  }
};

var Products = function Products() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)(),
      category = _useParams.category;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var navegar = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var StateTienda = {
    Productos: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
      return state.tienda.productos;
    }),
    Paginacion: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
      return state.tienda.paginacion;
    }),
    Filtros: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
      return state.tienda.filtros;
    }),
    Categoria: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
      return state.tienda.categoria;
    }),
    Busqueda: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
      return state.tienda.busqueda;
    })
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    UpdateStateTienda(category, dispatch);

    if (category === 'busqueda' && StateTienda.Productos === null) {
      navegar('/productos');
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_filtros_products__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data_state: StateTienda
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_body_tienda__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data_state: StateTienda
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

/***/ })

}]);