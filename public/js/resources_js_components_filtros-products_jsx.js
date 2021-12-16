"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_filtros-products_jsx"],{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _card_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-product */ "./resources/js/components/card-product.jsx");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner */ "./resources/js/components/spinner.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _filtros_llantas_tienda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtros-llantas-tienda */ "./resources/js/components/filtros-llantas-tienda.jsx");
/* harmony import */ var _pages_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/products */ "./resources/js/pages/products.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _filtros_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filtros-products */ "./resources/js/components/filtros-products.jsx");
/* harmony import */ var _filtros_cascos_tienda__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filtros-cascos-tienda */ "./resources/js/components/filtros-cascos-tienda.jsx");
/* harmony import */ var _filtros_aceite_tienda__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filtros-aceite-tienda */ "./resources/js/components/filtros-aceite-tienda.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
















var Cuerpo_tienda = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    background:#eeecec;\n    display:flex;\n    justify-content:center;\n    padding-top:10px;\n    padding-bottom:50px;\n\n    .filtros-desktop-body{\n\n        display:none;\n    }\n\n    .container-productos{\n\n        width:90%;\n        height:99%;\n        display:flex;\n        justify-content:space-around;\n        flex-wrap:wrap;\n        padding:8px;\n    }\n\n    .filtro{\n\n        border-radius:10px 10px 10px 10px;\n        background:white;\n        box-shadow:0px 0px 3px rgba(0,0,0,0.4);\n    }\n    .img-filtro{\n\n        background:rgb(0,150,210);\n        border-radius:10px 10px 0px 0px;\n\n\n    }\n\n    .categories-filtro{\n\n        border-radius:10px 10px 10px 10px;\n        background:white;\n        padding:10px;\n        margin-top:35px;\n        box-shadow:0px 0px 4px rgba(0,0,0,0.4);\n\n    }\n\n    .Llantas, .Aceites, .Cascos{\n\n        margin-left:10%;\n        width:80%;\n        margin-top:12px;\n        margin-bottom:12px;\n        border-bottom:2px solid gray;\n        cursor:pointer;\n    }\n\n    @media(min-width:800px){\n\n        .filtros-desktop-body{\n\n            display:block;\n            width:20%;\n            border-radius:10px 10px 10px 10px;\n            margin-top:33px;\n\n        }\n\n        .container-productos{\n\n            width:75%;\n            height:99%;\n\n        }\n\n\n    }\n\n"])));

var setCategory = function setCategory(category, dispatch, page_cascos, page_aceites, page_llantas, btn, navigate) {
  var btns = [document.querySelector('.Llantas'), document.querySelector('.Aceites'), document.querySelector('.Cascos')];

  for (var i = 0; i < btns.length; i++) {
    if (btn.innerHTML === btns[i].innerHTML) {
      btns[i].style.borderLeft = "10px solid rgb(0,150,210)";
    } else {
      btns[i].style.borderLeft = "0px";
    }
  }

  (0,_filtros_products__WEBPACK_IMPORTED_MODULE_7__.setIndexPagebtns)();
  (0,_pages_products__WEBPACK_IMPORTED_MODULE_5__.UpdateStateTienda)(category, dispatch, page_cascos, page_aceites, page_llantas);
  navigate("/productos/".concat(category));
};

var Body_tienda = function Body_tienda(_ref) {
  var data_state = _ref.data_state;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  var btn1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var btn2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var btn3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var imgFiltro = '/images/ejemplo-llantas.png';

  if (data_state.Categoria !== null) {
    if (data_state.Categoria.type === 'llantas') imgFiltro = '/images/ejemplo-llantas.png';else if (data_state.Categoria.type === 'cascos') imgFiltro = '/images/casco.png';else if (data_state.Categoria.type === 'aceites') imgFiltro = '/images/aceite.png';else imgFiltro = '/images/ejemplo-llantas.png';
  }

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
    return Products.sort(function (a, b) {
      return a.price < b.price && Math.random() - 0.5;
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var route = window.location.pathname;

    if (btn3 !== null) {
      var btns = [btn1.current, btn2.current, btn3.current];

      if (route === '/') {
        for (var i = 0; i < btns.length; i++) {
          btns[i].style.borderLeft = "0px";
        }
      } else {
        for (var _i = 0; _i < btns.length; _i++) {
          if (route === "/productos/".concat(btns[_i].classList[0].toLowerCase())) {
            btns[_i].style.borderLeft = "10px solid rgb(0,150,210)";
          } else {
            btns[_i].style.borderLeft = "0px";
          }
        }
      }
    }
  }, [btn1, btn2, btn3]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(Cuerpo_tienda, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "filtros-desktop-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "filtro",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "img-filtro",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            style: {
              width: '100%'
            },
            src: imgFiltro
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "inputs-filtro",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
            style: {
              width: '100%',
              margin: '18px',
              color: 'gray'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faFilter
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("b", {
              children: "Filtrar busqueda"
            })]
          }), data_state.Categoria === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_filtros_llantas_tienda__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : data_state.Categoria.type === 'cascos' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_filtros_cascos_tienda__WEBPACK_IMPORTED_MODULE_8__["default"], {}) : data_state.Categoria.type === 'llantas' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_filtros_llantas_tienda__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : data_state.Categoria.type === 'aceites' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_filtros_aceite_tienda__WEBPACK_IMPORTED_MODULE_9__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_filtros_llantas_tienda__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "categories-filtro",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
          style: {
            width: '100%',
            margin: '2px',
            color: 'gray',
            display: 'flex',
            justifyContent: 'center'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("b", {
            children: "Catgeorias"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          ref: btn1,
          className: "Llantas",
          onClick: function onClick(e) {
            return setCategory('llantas', dispatch, 1, 1, 1, e.currentTarget, navigate);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            style: {
              width: '100%'
            },
            src: "/images/llantas.png"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          ref: btn2,
          className: "Aceites",
          onClick: function onClick(e) {
            return setCategory('aceites', dispatch, 1, 1, 1, e.currentTarget, navigate);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            style: {
              width: '100%'
            },
            src: "/images/aceite.png"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          ref: btn3,
          className: "Cascos",
          onClick: function onClick(e) {
            return setCategory('cascos', dispatch, 1, 1, 1, e.currentTarget, navigate);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            style: {
              width: '100%'
            },
            src: "/images/casco.png"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "container-productos",
      children: data_state.Productos === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        width: "250px",
        height: "250px",
        size: "20px"
      }) : data_state.Categoria.name === 'Todo' ? AllProducts().map(function (product, indice) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_card_product__WEBPACK_IMPORTED_MODULE_1__["default"], {
          img: product.img,
          name: product.name,
          price: product.price
        }, indice);
      }) : data_state.Categoria.name === 'Llantas' ? data_state.Productos[0].products.map(function (llantas, indice) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_card_product__WEBPACK_IMPORTED_MODULE_1__["default"], {
          img: llantas.img,
          name: llantas.nombre_llanta,
          price: llantas.precio_llanta
        }, indice);
      }) : data_state.Categoria.name === 'Cascos' ? data_state.Productos[0].map(function (casco, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_card_product__WEBPACK_IMPORTED_MODULE_1__["default"], {
          img: "/images/casco.png",
          name: casco.name,
          price: casco.regular_price
        }, index);
      }) : data_state.Categoria.name === 'Aceites' ? data_state.Productos[0].map(function (aceite, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_card_product__WEBPACK_IMPORTED_MODULE_1__["default"], {
          img: "/images/aceite.png",
          name: aceite.name,
          price: aceite.regular_price
        }, index);
      }) : data_state.Categoria.name === 'Busqueda' ? data_state.Productos.map(function (product, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_card_product__WEBPACK_IMPORTED_MODULE_1__["default"], {
          img: product.img,
          name: product.nombre_llanta,
          price: product.precio_llanta
        }, index);
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
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
            className: "cuantity",
            readOnly: true,
            defaultValue: "1"
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

/***/ "./resources/js/components/filtros-aceite-tienda.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/components/filtros-aceite-tienda.jsx ***!
  \***********************************************************/
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






var Aceites = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    background:white;\n    padding:6px;\n    border-radius:10px;\n\n\n\n    .aceites-inputs{\n\n        width:100%;\n        margin-top:5px;\n    }\n\n    select{\n\n        width:80%;\n        height:40px;\n        border:0px;\n        margin-left:10%;\n        margin-top:18px;\n        border-radius:7px;\n        color:gray;\n        box-shadow:0px 0px 4px rgba(0,0,0,0.3);\n        background:white;\n\n    }\n    .btn-1{\n\n        width:80%;\n        height:45px;\n        margin-top:18px;\n        margin-left:10%;\n        margin-bottom:15px;\n    }\n\n\n"])));

var Search_aceites_tienda = function Search_aceites_tienda() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Aceites, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
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
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search_aceites_tienda);

/***/ }),

/***/ "./resources/js/components/filtros-cascos-tienda.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/components/filtros-cascos-tienda.jsx ***!
  \***********************************************************/
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






var Cascos = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    background:white;\n    border-radius:10px;\n\n\n\n    .cascos-inputs{\n\n        width:100%;\n        margin-top:14px;\n\n    }\n\n    select{\n\n        width:80%;\n        height:45px;\n        border:0px;\n        margin-left:10%;\n        margin-top:28px;\n        border-radius:7px;\n        color:gray;\n        box-shadow:0px 0px 8px rgba(0,0,0,0.3);\n        background:white;\n\n    }\n\n    .btn-1{\n\n        width:80%;\n        height:45px;\n        margin-left:10%;\n        margin-top:28px;\n        margin-bottom:15px;\n\n    }\n\n\n"])));

var Search_cascos_tienda = function Search_cascos_tienda() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Cascos, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search_cascos_tienda);

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store */ "./resources/js/services/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _database_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/index */ "./resources/js/database/index.js");
/* harmony import */ var _filtros_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtros-products */ "./resources/js/components/filtros-products.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var Filtro_llantas_element = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n\n    select{\n\n        width:90%;\n        border:0px;\n        background:white;\n        color:gray;\n        margin-top:15px;\n        box-shadow:0px 0px 6px rgba(0,0,0,0.4);\n        margin-left:5%;\n        height:40px;\n        border-radius:5px;\n        margin-bottom:25px;\n        font-weight:bold;\n    }\n\n"])));

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
  var redirect = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();

  var GetLlantasMarca = function GetLlantasMarca(value, dispatch) {
    setCargandoAncho('Cargando resultados...');
    setCargandoMarca(value);

    if (value !== 'Marca de la llanta' && value !== 'Cargando resultados...') {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Filtros)([{
        type: 'Marca ',
        value: value
      }, {
        type: 'Ancho ',
        value: '--'
      }, {
        type: 'Perfil  ',
        value: '--'
      }, {
        type: 'N° rin ',
        value: '--'
      }]));
      (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_llantas.llantas_for_marca(value).then(function (data) {
        data[0].length === 0 ? set_llantasForMarca(['Sin resultados']) : set_llantasForMarca(data[0]);
        setCargandoAncho('Ancho de la llanta');
      });
    } else {
      setCargandoAncho('Ancho de la llanta');
    }
  };

  var GetLlantasMarcaAncho = function GetLlantasMarcaAncho(marca, ancho, dispatch) {
    setCargandoPerfil('Cargando resultados...');
    setCargandoAncho(ancho);

    if (ancho !== 'Ancho de la llanta' && ancho !== 'Sin resultados' && ancho !== 'Cargando resultados...') {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Filtros)([{
        type: 'Marca ',
        value: marca
      }, {
        type: 'Ancho ',
        value: ancho
      }, {
        type: 'Perfil  ',
        value: '--'
      }, {
        type: 'N° rin ',
        value: '--'
      }]));
      (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_llantas.llantas_for_marcaAncho(marca, ancho).then(function (data) {
        data[0].length === 0 ? setLlantasMarcaAncho(['Sin resultados']) : setLlantasMarcaAncho(data[0]);
        setCargandoPerfil('Perfil de la llanta');
      });
    } else {
      setCargandoPerfil('Perfil de la llanta');
    }
  };

  var GetLlantasMarcaAnchoPerfil = function GetLlantasMarcaAnchoPerfil(marca, ancho, perfil, dispatch) {
    setCargandoRin('Cargando resultados...');
    setCargandoPerfil(perfil);

    if (perfil !== 'Perfil de la llanta' && perfil !== 'Sin resultados' && perfil !== 'Cargando resultados...') {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Filtros)([{
        type: 'Marca ',
        value: marca
      }, {
        type: 'Ancho ',
        value: ancho
      }, {
        type: 'Perfil  ',
        value: perfil
      }, {
        type: 'N° rin ',
        value: '--'
      }]));
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
        type: 'Perfil  ',
        value: perfil
      }, {
        type: 'N° rin ',
        value: rin
      }]));
      setCargandoRin(rin);
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Productos)(null));
      (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_llantas.llantas_for_marcaAnchoPerfilRin(marca, ancho, perfil, rin).then(function (data) {
        console.log('from filtros-llantas-tienda.jsx ', data);
        dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Productos)(data[0]));
        dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_3__.Busqueda)(true));
      });
      (0,_filtros_products__WEBPACK_IMPORTED_MODULE_4__.setIndexPagebtns)();
      $('.filtros-mobile').css('animation-name', 'close');
      setTimeout(function () {
        $('.filtros-mobile').css('display', 'none');
      }, 600);
      setCargandoMarca('Marca de la llanta');
      setCargandoAncho('Ancho de la llanta');
      setCargandoPerfil('Perfil de la llanta');
      setCargandoRin('Numero de rin');
      navegar('/productos/busqueda');
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCargandoMarca('Cargando resultados...');
    (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataHome)().search_llantas.response().then(function (data) {
      setMarcaLlantas(data[0]);
      setCargandoMarca('Marca de la llanta');
    });
    return function () {
      setMarcaLlantas('Marca de la llanta');
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Filtro_llantas_element, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
      value: cargandoMarca,
      ref: Marca_llantas_element,
      onChange: function onChange(e) {
        return GetLlantasMarca(e.target.value, dispath);
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
        return GetLlantasMarcaAncho(Marca_llantas_element.current.value, e.target.value, dispath);
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
        return GetLlantasMarcaAnchoPerfil(Marca_llantas_element.current.value, Ancho_llantas_element.current.value, e.target.value, dispath);
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
/* harmony export */   "setIndexPagebtns": () => (/* binding */ setIndexPagebtns),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _search_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-product */ "./resources/js/components/search-product.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _pages_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/products */ "./resources/js/pages/products.js");
/* harmony import */ var _mobile_filtro_llantas_tienda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-filtro-llantas-tienda */ "./resources/js/components/mobile-filtro-llantas-tienda.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var Filtros_html = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n\n\n    .filtros{\n\n        width:100%;\n    }\n\n    .buscador{\n        padding:12px;\n        width:100%;\n        display:flex;\n        justify-content:flex-end;\n    }\n\n    .titulo{\n\n        width:100%;\n        height:40px;\n        margin-top:20px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        position:relative;\n    }\n\n    .title-category{\n\n        background:transparent;\n        border:0px;\n        font-size:20px;\n        font-weight:bold;\n        margin-left:12%;\n    }\n\n    .btn-filtrar-busqueda{\n\n        position:absolute;\n        color:gray;\n        margin-right:64%;\n    }\n\n    .filtro-aplicado{\n\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        flex-wrap:wrap;\n\n    }\n\n    .container-filter{\n\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        width:130px;\n        margin-top:-6px;\n    }\n\n    .filter{\n\n        color:gray;\n\n    }\n\n    .container-pagination{\n\n        width:100%;\n        height:50px;\n        background:rgb(255, 137, 12);\n        display:flex;\n        justify-content:center;\n        align-items:center;\n    }\n\n    .container-link-pages{\n        width:100%;\n    }\n    .bg-white, .btn-light{\n\n        width:36px;\n        height:36px;\n        margin:2px;\n    }\n\n    .container-buscador-desktop{\n\n        display:none;\n    }\n\n    .container-filtros-desktop{\n\n        display:none;\n    }\n\n\n    @media(min-width:800px){\n\n        .buscador{\n\n            display:none;\n        }\n\n        .btn-filtrar-busqueda{\n\n            display:none;\n        }\n\n        .filtro-aplicado{\n\n            display:none;\n        }\n\n        .container-pagination{\n\n            height:80px;\n            justify-content:space-around;\n        }\n\n        .title-category{\n\n            margin-left:0px;\n        }\n\n        .container-buscador-desktop{\n\n            border-left:2px solid white;\n            display:flex;\n            justify-content:center;\n            align-items:center;\n            width:300px;\n        }\n\n        .container-filtros-desktop{\n\n            border-right:2px solid white;\n            display:flex;\n            width:300px;\n            justify-content:space-around;\n            aign-items:center\n            padding:5px;\n            font-size:15px;\n        }\n\n        .container-filter{\n\n            display:flex;\n            justify-content:space-around;\n            flex-wrap:wrap;\n            width:100px;\n            margin-left:5px;\n            margin-right:5px;\n            margin-top:0px;\n        }\n\n        .filter{\n\n            color:white;\n        }\n\n        .bg-white, .btn-light{\n\n            width:40px;\n            height:40px;\n            margin:3px;\n            font-size:17px;\n        }\n\n\n    }\n\n\n"])));

var CheckPageCurrent = function CheckPageCurrent(i, current_page, buttons) {
  if (current_page === parseInt(buttons[i].innerText)) {
    buttons[i].classList.remove('bg-white');
    buttons[i].classList.add('bg-secondary');
    buttons[i].classList.add('text-white');
  } else {
    buttons[i].classList.add('bg-white');
    buttons[i].classList.remove('bg-secondary');
    buttons[i].classList.remove('text-white');
  }
};

var UpdateLessIndexPage = function UpdateLessIndexPage(data, buttons, route, current_page) {
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].previousSibling.classList[2] === 'anterior' && $(buttons[i]).hasClass('bg-secondary')) {
      buttons[0].innerHTML = parseInt(buttons[0].innerHTML) - 3;
      buttons[1].innerHTML = parseInt(buttons[1].innerHTML) - 3;
      buttons[2].innerHTML = parseInt(buttons[2].innerHTML) - 3;
      buttons[0].classList.remove('bg-white');
      buttons[0].classList.add('bg-secondary');
      buttons[0].classList.add('text-white');
      CheckPageCurrent(i, current_page, buttons);
    }

    CheckPageCurrent(i, current_page, buttons);
  }
};

var UpdateMoreIndexPage = function UpdateMoreIndexPage(data, buttons, route, current_page) {
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].nextSibling.classList[2] === 'siguiente' && $(buttons[i]).hasClass('bg-secondary')) {
      buttons[0].innerHTML = parseInt(buttons[0].innerHTML) + 3;
      buttons[1].innerHTML = parseInt(buttons[1].innerHTML) + 3;
      buttons[2].innerHTML = parseInt(buttons[2].innerHTML) + 3;
      buttons[0].classList.remove('bg-white');
      buttons[0].classList.add('bg-secondary');
      buttons[0].classList.add('text-white');
      CheckPageCurrent(i, current_page, buttons);
    }

    CheckPageCurrent(i, current_page, buttons);
  }
};

var setIndexPagebtns = function setIndexPagebtns() {
  var buttons = document.getElementsByClassName('index-page');

  for (var i = 0; i < buttons.length; i++) {
    if (i === 0) {
      $(buttons[i]).addClass('bg-secondary');
      $(buttons[i]).addClass('text-white');
      $(buttons[i]).removeClass('bg-white');
    } else {
      $(buttons[i]).removeClass('bg-secondary');
      $(buttons[i]).removeClass('text-white');
      $(buttons[i]).addClass('bg-white');
    }

    buttons[i].innerHTML = i + 1;
  }
};

var redirect = function redirect(route, redireccion, dispatch, page_cascos, page_aceites, page_llantas, setPage) {
  setIndexPagebtns();
  setPage(1);
  (0,_pages_products__WEBPACK_IMPORTED_MODULE_4__.UpdateStateTienda)(route, dispatch, page_cascos, page_aceites, page_llantas); //update btn-img main categories

  var btns = [document.querySelector('.Llantas'), document.querySelector('.Aceites'), document.querySelector('.Cascos')];

  if (route === 'todo') {
    for (var i = 0; i < btns.length; i++) {
      btns[i].style.borderLeft = "0px";
    }
  } else {
    for (var _i = 0; _i < btns.length; _i++) {
      if (route === btns[_i].classList.value.toLowerCase()) {
        btns[_i].style.borderLeft = "10px solid rgb(0,150,210)";
      } else {
        btns[_i].style.borderLeft = "0px";
      }
    }
  }

  route === 'llantas' && redireccion('/productos/llantas');
  route === 'cascos' && redireccion('/productos/cascos');
  route === 'aceites' && redireccion('/productos/aceites');
  route === 'todo' && redireccion('/productos');
};

var nextPage = function nextPage(current_page, max_page, min_page, data, setPage, route, dispatch) {
  console.log(data.Productos); //limit max page
  //data.Productos[0].products.length for category llantas
  //data.Productos[2].data.length for category todo
  //data.Productos[0].length for categories llantas and aceites

  if (current_page !== min_page && current_page !== max_page && current_page < max_page) current_page++;
  if (current_page === max_page + 1) current_page = min_page;
  if (current_page === min_page) current_page++;
  setPage(current_page);
  var buttons = document.getElementsByClassName('index-page');
  UpdateMoreIndexPage(data, buttons, route, current_page);

  if (route === 'busqueda') {
    (0,_pages_products__WEBPACK_IMPORTED_MODULE_4__.UpdateStateTienda)(route, dispatch, current_page, current_page, current_page, 'not null');
  } else {
    (0,_pages_products__WEBPACK_IMPORTED_MODULE_4__.UpdateStateTienda)(route, dispatch, current_page, current_page, current_page);
  }
};

var previusPage = function previusPage(current_page, max_page, min_page, setPage, route, dispatch) {
  var buttons = document.getElementsByClassName('index-page');
  if (buttons[0].innerText === '1' && $(buttons[0]).hasClass('bg-secondary')) return 0; // this line no permite indice de pagina negativo

  if (current_page !== min_page && current_page !== max_page && current_page > min_page) current_page--;
  if (current_page === max_page) current_page--;
  if (current_page <= 0) current_page = max_page;
  setPage(current_page);
  UpdateLessIndexPage('Less page', buttons, route, current_page);

  if (route === 'busqueda') {
    (0,_pages_products__WEBPACK_IMPORTED_MODULE_4__.UpdateStateTienda)(route, dispatch, current_page, current_page, current_page, 'not null');
  } else {
    (0,_pages_products__WEBPACK_IMPORTED_MODULE_4__.UpdateStateTienda)(route, dispatch, current_page, current_page, current_page);
  }
};

var ClickIndexPage = function ClickIndexPage(category, dispatch, page_cascos, page_aceites, page_llantas, setPage) {
  var buttons = document.getElementsByClassName('index-page');

  for (var i = 0; i < buttons.length; i++) {
    CheckPageCurrent(i, parseInt(page_llantas), buttons);
  }

  setPage(page_llantas);

  if (category === 'busqueda') {
    (0,_pages_products__WEBPACK_IMPORTED_MODULE_4__.UpdateStateTienda)(category, dispatch, page_cascos, page_aceites, page_llantas, 'not null');
  } else {
    (0,_pages_products__WEBPACK_IMPORTED_MODULE_4__.UpdateStateTienda)(category, dispatch, page_cascos, page_aceites, page_llantas);
  }
};

var Filtros_render = function Filtros_render(_ref) {
  var data_state = _ref.data_state;
  var redireccion = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Filtros_html, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "filtros",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "buscador",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_search_product__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "titulo",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          style: {
            cursor: 'pointer'
          },
          className: "btn-filtrar-busqueda",
          onClick: function onClick() {
            $('.filtros-mobile').css('display', 'block');
            $('.filtros-mobile').css('animation-name', 'open');
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faFilter
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            children: " Filtrar busqueda"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
          value: data_state.Categoria !== null && data_state.Categoria.name,
          onChange: function onChange(e) {
            return redirect(e.currentTarget.value.toLowerCase(), redireccion, dispatch, 1, 1, 1, setPage);
          },
          className: "title-category",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            defaultValue: "/",
            children: "Todo"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            defaultValue: "llantas",
            children: "Llantas"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            defaultValue: "cascos",
            children: "Cascos"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            defaultValue: "aceites",
            children: "Aceites"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "filtro-aplicado",
        children: data_state.Filtros !== null && data_state.Filtros.map(function (filtro, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            className: "container-filter",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
              className: "filter",
              children: [filtro.type, " : "]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
              children: [" ", filtro.value]
            })]
          }, index);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "container-pagination",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "container-filtros-desktop",
          children: data_state.Filtros !== null && data_state.Filtros.map(function (filtro, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              className: "container-filter",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
                className: "filter",
                children: [filtro.type, "  : "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
                children: [" ", filtro.value]
              })]
            }, index);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "contanier-link-pages",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "btn  btn-light anterior",
            onClick: function onClick() {
              return previusPage(page, data_state.Paginacion.last_page, data_state.Paginacion.first_page, setPage, data_state.Categoria.name.toLowerCase(), dispatch);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faAngleLeft
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "btn  bg-secondary text-white index-page",
            onClick: function onClick(e) {
              return ClickIndexPage(data_state.Categoria.name.toLowerCase(), dispatch, e.currentTarget.innerHTML, e.currentTarget.innerHTML, e.currentTarget.innerHTML, setPage);
            },
            children: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "btn  bg-white  index-page",
            onClick: function onClick(e) {
              return ClickIndexPage(data_state.Categoria.name.toLowerCase(), dispatch, e.currentTarget.innerHTML, e.currentTarget.innerHTML, e.currentTarget.innerHTML, setPage);
            },
            children: "2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "btn  bg-white  index-page",
            onClick: function onClick(e) {
              return ClickIndexPage(data_state.Categoria.name.toLowerCase(), dispatch, e.currentTarget.innerHTML, e.currentTarget.innerHTML, e.currentTarget.innerHTML, setPage);
            },
            children: "3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "btn btn-light siguiente",
            onClick: function onClick() {
              return nextPage(page, data_state.Paginacion.last_page, data_state.Paginacion.first_page, data_state, setPage, data_state.Categoria.name.toLowerCase(), dispatch);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faAngleRight
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "container-buscador-desktop",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_search_product__WEBPACK_IMPORTED_MODULE_1__["default"], {})
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



 //FALTA ARREGLAR PARA QUE SOLO ACEPTE CATEGORIAS EXISTENTES EN LA RUTA
//falta aarrelgar los filtros de busqueda
//falta integrar barra de busqueda input
//falta hacer funcionable el carrito
//falta terminar funcionamiento del card
//falta vista del producto y  proceso de pago



var UpdateStateTienda = function UpdateStateTienda(category, dispatch, page_cascos, page_aceites, page_llantas, not_null) {
  var filtros = JSON.parse(localStorage.getItem('filtros_state'));
  var category_store = JSON.parse(localStorage.getItem('category'));
  not_null !== 'not null' && dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Productos)(null));

  if (category === 'busqueda' && not_null === 'not null') {
    console.log('filtros: ', filtros);
    console.log('category: ', category_store);

    if (category_store.type === 'llantas') {
      (0,_services_store__WEBPACK_IMPORTED_MODULE_3__.DataHome)().search_llantas.llantas_for_marcaAnchoPerfilRin(filtros[0].value, filtros[1].value, filtros[2].value, filtros[3].value).then(function (data) {
        dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Productos)(data[0]));
      });
    }

    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Paginacion)({
      first_page: 1,
      last_page: 50
    }));
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Busqueda)(true));
    return 0;
  } else {
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Busqueda)(false));
  }

  if (category === 'llantas') {
    (0,_services_store__WEBPACK_IMPORTED_MODULE_3__.DataProducts)().Products.getLlantas("?page=".concat(page_llantas)).then(function (data) {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Productos)(data));
    });
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Categoria)({
      name: 'Llantas',
      type: 'llantas'
    }));
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Filtros)([{
      type: 'Marca',
      value: '--'
    }, {
      type: 'Ancho',
      value: '--'
    }, {
      type: 'Perfil',
      value: '--'
    }, {
      type: 'N° rin',
      value: '--'
    }]));
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Paginacion)({
      first_page: 1,
      last_page: 50
    }));
    ;
  }

  if (category === 'cascos') {
    (0,_services_store__WEBPACK_IMPORTED_MODULE_3__.DataProducts)().Products.getCascos("&page=".concat(page_cascos)).then(function (data) {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Productos)(data));
    });
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Categoria)({
      name: 'Cascos',
      type: 'cascos'
    }));
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Filtros)([{
      type: 'Marca',
      value: '--'
    }, {
      type: 'Color',
      value: '--'
    }]));
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Paginacion)({
      first_page: 1,
      last_page: 50
    }));
  }

  if (category === 'aceites') {
    (0,_services_store__WEBPACK_IMPORTED_MODULE_3__.DataProducts)().Products.getAceites("&page=".concat(page_aceites)).then(function (data) {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Productos)(data));
    });
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Categoria)({
      name: 'Aceites',
      type: 'aceites'
    }));
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Filtros)([{
      type: 'Marca',
      value: '--'
    }, {
      type: 'Tipo',
      value: '--'
    }]));
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Paginacion)({
      first_page: 1,
      last_page: 50
    }));
  }

  if (category === 'todo' || category === undefined || category === null) {
    (0,_services_store__WEBPACK_IMPORTED_MODULE_3__.DataProducts)().Products.getAll("&page=".concat(page_cascos), "&page=".concat(page_aceites), "?page=".concat(page_llantas)).then(function (data) {
      dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Productos)(data));
    });
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Categoria)({
      name: 'Todo',
      type: 'todo'
    }));
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Filtros)([{
      type: 'Marca',
      value: '--'
    }, {
      type: 'Ancho',
      value: '--'
    }, {
      type: 'Perfil',
      value: '--'
    }, {
      type: 'N° rin',
      value: '--'
    }]));
    dispatch((0,_database_index__WEBPACK_IMPORTED_MODULE_4__.Paginacion)({
      first_page: 1,
      last_page: 50
    }));
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
    document.title = 'Productos';
    var links = document.getElementsByClassName('link');

    for (var i = 0; i < links.length; i++) {
      links[i].innerText === 'Productos' ? links[i].classList.add('link-activo') : links[i].classList.remove('link-activo');
    }

    if (category === 'busqueda' && StateTienda.Productos === null) {
      UpdateStateTienda('todo', dispatch, 1, 1, 1);
      navegar('/productos');
    } else if (category === 'busqueda' && StateTienda.Productos !== null) {
      UpdateStateTienda(category, dispatch, 1, 1, 1, 'not null');
    } else {
      UpdateStateTienda(category, dispatch, 1, 1, 1);
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