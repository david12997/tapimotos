"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_pay_js"],{

/***/ "./resources/js/components/pay.jsx":
/*!*****************************************!*\
  !*** ./resources/js/components/pay.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/store */ "./resources/js/services/store.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner */ "./resources/js/components/spinner.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var Pay_style = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n\n    .btn-salir{\n\n       position:absolute;\n       margin-right:80%;\n       color:gray;\n       cursor:pointer;\n       display:flex;\n       justify-content:center;\n       align-items:center;\n\n    }\n\n    .card-comprar{\n\n        width:90%;\n        box-shadow:0px 0px 8px rgba(0,0,0,0.25);\n        font-size:17px;\n        margin:15px;\n        margin-bottom:25px;\n    }\n\n    input{\n\n        width:80%;\n        border:0px;\n        border-radius:4px;\n        box-shadow:0px 0px 4px rgba(0,0,0,0.3);\n        margin:5px;\n    }\n\n\n    .list-group-item{\n        border:1px solid rgba(0,0,0,0.05);\n        border-top:0px;\n    }\n\n    @media(min-width:800px){\n\n        .card-comprar{\n\n            width:40%;\n        }\n\n        input{\n\n            width:70%\n        }\n\n    }\n\n\n\n\n"])));

var Pay_component = function Pay_component(_ref) {
  var data_pay = _ref.data_pay,
      type_pay = _ref.type_pay;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      spinner = _useState4[0],
      setSpinner = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    $('html, body').animate({
      scrollTop: $('#scrollhere').offset().top
    }, 1000);
    setStep(1);
    var data = new FormData();
    data.append('auth_pay', '5719326');
    (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataProducts)().Products.Pay(_services_store__WEBPACK_IMPORTED_MODULE_1__.Domain + 'pagos/auth', data).then(function (response) {
      console.log(response);
    });
    return function () {
      var data = new FormData();
      data.append('auth_pay', '5719326');
      (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataProducts)().Products.Pay(_services_store__WEBPACK_IMPORTED_MODULE_1__.Domain + 'pagos/auth/delete', data).then(function (response) {
        console.log(response);
      });
    };
  }, [setStep]);
  var resumen = [];
  var total_pay = 0;
  data_pay !== null && data_pay.map(function (data, index) {
    return resumen.push({
      product: data.product_data.name,
      image: data.product_data.img,
      cantidad: data.cuantity,
      price: data.product_data.price,
      subtotal: parseInt(data.cuantity) * parseInt(data.product_data.price)
    });
  });
  data_pay !== null && resumen.map(function (data, index) {
    return total_pay += data.subtotal;
  });

  var DoBuy = function DoBuy(e) {
    e.preventDefault();
    var data = {
      nombre: $('.data-payer')[0].value,
      ciudad: $('.data-payer')[1].value,
      direccion: $('.data-payer')[2].value,
      celular: $('.data-payer')[3].value,
      correo: $('.data-payer')[4].value,
      total_pay: total_pay
    };
    var Buy = new FormData();
    Buy.append('pay_tapimotos', JSON.stringify(data));
    Buy.append('data_products', JSON.stringify(resumen));
    (0,_services_store__WEBPACK_IMPORTED_MODULE_1__.DataProducts)().Products.Pay(_services_store__WEBPACK_IMPORTED_MODULE_1__.Domain + 'pagos/crear-pago', Buy).then(function (response) {
      console.log(response);
      var Mp = new MercadoPago('APP_USR-a98b17ae-47a6-4a35-b92d-01919002b97e');
      Mp.checkout({
        preference: {
          id: response.preference_id
        },
        render: {
          container: '.cho-container',
          label: 'Pagar la compra'
        },
        autoOpen: true
      });
      setSpinner(false);
      setStep(2);
      localStorage.setItem('data_preference', JSON.stringify(response)); //window.location.href = response.init_point;
    });
  };

  var GetOut = function GetOut() {
    window.location.href = _services_store__WEBPACK_IMPORTED_MODULE_1__.Domain + 'productos';
  };

  console.log(data_pay);
  console.log(resumen);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Pay_style, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      id: "scrollhere",
      className: "d-flex justify-content-center align-items-center p-2 text-gray position-relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
        onClick: function onClick() {
          return GetOut();
        },
        className: "btn-salir",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          style: {
            fontSize: '18px'
          },
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faAngleLeft
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
          className: "d-flex justify-content-center",
          style: {
            width: '30px'
          },
          children: "Salir"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
        style: {
          fontSize: '18px'
        },
        children: "Realizar compra"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", {
      style: {
        width: '90%',
        marginLeft: '5%'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "d-flex justify-content-center align-items-center",
      children: spinner === true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_spinner__WEBPACK_IMPORTED_MODULE_3__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
        onSubmit: function onSubmit(e) {
          DoBuy(e);
          setSpinner(true);
          window.scrollTo(0, 130);
        },
        style: {
          width: '100%'
        },
        className: "d-flex justify-content-center  flex-wrap form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: step === 1 ? "card card-comprar activo" : "card card-comprar d-none",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              background: 'rgb(0, 150, 210)',
              color: 'white'
            },
            className: "card-header",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
              children: "1. Resumen de tu compra"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
            className: "list-group list-group-flush ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              className: "list-group-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Metodo de pago: "
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                style: {
                  color: 'rgb(0, 150, 210)'
                },
                children: " Mercadopago "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
                style: {
                  color: 'gray'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  children: "*Emitimos factura y garantia de tu compra"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              style: {
                height: '280px',
                overflowY: 'scroll'
              },
              className: "list-group-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Productos:"
                })
              }), resumen.map(function (product, indice) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  style: {
                    color: 'gray'
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: ["Nombre: ", product.product]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    style: {
                      width: '40px'
                    },
                    src: product.image
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: ["Cantidad: ", product.cantidad]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    children: ["Precio*unidad :  $ ", new Intl.NumberFormat().format(Math.ceil(parseInt(product.price))), " COP"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", {})]
                }, indice);
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              style: {
                fontSize: '18px'
              },
              className: "list-group-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                children: "Env\xEDo :"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("b", {
                style: {
                  color: 'green'
                },
                children: ["  $ ", new Intl.NumberFormat().format(Math.ceil(parseInt(35000))), " COP"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              style: {
                fontSize: '18px'
              },
              className: "list-group-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                children: "Productos :"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("b", {
                style: {
                  color: 'green'
                },
                children: ["  $ ", new Intl.NumberFormat().format(Math.ceil(parseInt(total_pay))), " COP"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              style: {
                fontSize: '18px'
              },
              className: "list-group-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                children: "Total a pagar :"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("b", {
                style: {
                  color: 'green'
                },
                children: ["  $ ", new Intl.NumberFormat().format(Math.ceil(parseInt(total_pay + 35000))), " COP"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              className: "list-group-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                onClick: function onClick() {
                  setStep(2);
                  $('html, body').animate({
                    scrollTop: $('#scrollhere').offset().top
                  }, 1000);
                },
                style: {
                  width: '100%',
                  fontSize: '20px',
                  boxShadow: '3px 3px 8px rgba(0,0,0,0.3)'
                },
                className: "btn btn-primary text-white",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Siguiente"
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: step === 1 ? "card card-comprar d-none" : "card card-comprar activo",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              background: 'rgb(0, 150, 210)',
              color: 'white'
            },
            className: "card-header",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
              children: " 2. Datos del comprador"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
            className: "list-group list-group-flush",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              onClick: function onClick() {
                setStep(1);
                $('html, body').animate({
                  scrollTop: $('#scrollhere').offset().top
                }, 1000);
              },
              style: {
                color: 'gray',
                cursor: 'pointer'
              },
              className: "list-group-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("b", {
                className: "d-flex justify-content-start align-items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                  style: {
                    fontSize: '20px'
                  },
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faAngleLeft
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
                  style: {
                    marginLeft: '5px'
                  },
                  children: "Resumen de tu compra"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "list-group-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Nombre completo:"
                }), " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                className: "data-payer",
                required: true,
                type: "text",
                placeholder: "Ej: Juan Diaz"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {})]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "list-group-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Ciudad/Municipio:"
                }), " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                className: "data-payer",
                required: true,
                type: "text",
                placeholder: "Ej: Bogota Cundinamarca"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {})]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              className: "list-group-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Direccion exacta:"
                }), " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                className: "data-payer",
                required: true,
                type: "text",
                placeholder: "Ej: Cra 10a # 123"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {})]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              className: "list-group-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: " N\xB0 Celular :"
                }), " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                className: "data-payer",
                required: true,
                type: "number",
                placeholder: "Ej: 310123456"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {})]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              className: "list-group-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Correo electronico:"
                }), " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                className: "data-payer",
                required: true,
                type: "email",
                placeholder: "Ej: email@email.com"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {})]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              className: "list-group-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                type: "submit",
                style: {
                  width: '100%',
                  fontSize: '20px',
                  boxShadow: '3px 3px 8px rgba(0,0,0,0.3)'
                },
                className: "btn btn-primary text-white",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
                  children: "Pagar"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "cho-container"
              })]
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pay_component);

/***/ }),

/***/ "./resources/js/pages/pay.js":
/*!***********************************!*\
  !*** ./resources/js/pages/pay.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ "./resources/js/components/footer.jsx");
/* harmony import */ var _components_pay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pay */ "./resources/js/components/pay.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database */ "./resources/js/database/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


 //update carrito







var Pay = function Pay() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var navegar = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  var data_pay = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.comprar.productos;
  });
  var type_pay = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.comprar.type;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    data_pay === null && navegar('/productos'); //reset title page

    document.title = 'Pagar'; //update menu page

    var links = document.getElementsByClassName('link');

    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('link-activo');
    } //update carrito


    var carrito = JSON.parse(localStorage.getItem('products_carrito'));

    if (carrito !== null) {
      dispatch((0,_database__WEBPACK_IMPORTED_MODULE_4__.UpdateCart)(carrito));
      dispatch((0,_database__WEBPACK_IMPORTED_MODULE_4__.UpdateCuantity)(carrito.length));
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_pay__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data_pay: data_pay,
      type_pay: type_pay
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pay);

/***/ })

}]);