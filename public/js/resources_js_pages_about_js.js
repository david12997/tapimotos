"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_about_js"],{

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
  var redirects = ['https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina', 'https://api.whatsapp.com/send/?phone=573118928239&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina', 'https://www.facebook.com/Tapimotos-DK-110123437269115'];
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contacto_render);

/***/ }),

/***/ "./resources/js/components/contenido-about.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/contenido-about.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contacto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacto */ "./resources/js/components/contacto.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Contenido_about = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n\n    .title-nosotros{\n\n        margin-top:35px;\n        width:100%;\n        height:50px;\n        display:flex;\n        justify-content:center;\n        align-item:center;\n        font-size:20px;\n        font-weigt:bold;\n    }\n\n    .contenido1{\n\n        width:100%;\n        padding:10px;\n    }\n\n    .text1{\n\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        color:gray;\n        font-size:18px;\n        font-weight:bold;\n        padding:18px;\n\n    }\n\n    .galeria{\n        margin-top:9px;\n        width:100%;\n\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        flex-wrap:wrap;\n\n\n\n    .container-img{\n\n        width:300px;\n        height:400px;\n        margin:30px;\n        border-radius:10px;\n    }\n\n    .texto{\n        margin:5px;\n        color:gray;\n        font-weight:bold;\n    }\n\n    img{\n        width:100%;\n        height:180px;\n    }\n\n\n\n"])));

var Contenido_aobut_render = function Contenido_aobut_render() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Contenido_about, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "title-nosotros",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "Nosotros"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "contenido1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "text1",
        children: "Tapimotos es una distribuidora de llantas, accesorios y respuestos para tu moto, todos nuestros productos estan garantizados, nos enfocamos en presentar productos de la mas alta calidad, contamos con  el mejor equipo para atender tus dudas y darte el mejor servicio ...."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "galeria",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "container-img",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src: "http://tapimotosdk.com/blog/wp-content/uploads/2021/11/nosotros-tapi-4.jpg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "texto",
            children: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo quam, commodo nec sagittis ac, blandit sed neque. Donec erat lectus, sollicitudin feugiat lorem ut,"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "btn btn-secondary mt-3 btn-block",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "Ver m\xE1s..."
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "container-img",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src: "http://tapimotosdk.com/blog/wp-content/uploads/2021/11/nosotros-tapi-3.jpg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "texto",
            children: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo quam, commodo nec sagittis ac, blandit sed neque. Donec erat lectus, sollicitudin feugiat lorem ut,"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "btn btn-secondary mt-3 btn-block",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "Ver m\xE1s..."
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "container-img",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src: "http://tapimotosdk.com/blog/wp-content/uploads/2021/11/nosotros-tapi-5.jpg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "texto",
            children: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo quam, commodo nec sagittis ac, blandit sed neque. Donec erat lectus, sollicitudin feugiat lorem ut,"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "btn btn-secondary mt-3 btn-block",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "Ver m\xE1s..."
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "title-nosotros",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "Nuestras instalaciones"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        width: '100%'
      },
      className: "instalaciones d-flex justify-content-around align-items-center flex-wrap",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: {
          width: '300px',
          margin: '15px'
        },
        className: "videos ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
          style: {
            width: '100%'
          },
          controls: true,
          src: "http://tapimotosdk.com/blog/wp-content/uploads/2021/11/video-api-2-1.mp4"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: {
          width: '300px',
          margin: '15px'
        },
        className: "videos ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
          style: {
            width: '100%'
          },
          controls: true,
          src: "http://tapimotosdk.com/blog/wp-content/uploads/2021/11/video-tapi-1-1.mp4"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: {
          width: '300px',
          margin: '15px'
        },
        className: "videos ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
          style: {
            width: '100%'
          },
          controls: true,
          src: "http://tapimotosdk.com/blog/wp-content/uploads/2021/11/video-tapi-3-1.mp4"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contacto__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contenido_aobut_render);

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

/***/ "./resources/js/components/portada-about.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/portada-about.jsx ***!
  \***************************************************/
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





var About = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    width:100%;\n    position:relative;\n\n    .img-desktop{\n\n        display:none;\n    }\n    .img-mobile{\n\n        display:block;\n        width:100%;\n    }\n\n    .container-titulo{\n\n        position:absolute;\n        color:white;\n        text-shadow:0px 0px 10px black;\n        width:100%;\n        display:flex;\n        justify-content:center;\n        margin-top:14%;\n        font-weight:bold;\n    }\n\n    @media(min-width:800px){\n\n        margin-top:-19px;\n\n        .img-desktop{\n\n            width:100%;\n            display:block;\n        }\n\n        .img-mobile{\n\n            display:none;\n        }\n\n        .container-titulo{\n\n            margin-top:13%;\n        }\n    }\n"])));

var Portada_nosotros = function Portada_nosotros() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(About, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container-titulo",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
        children: "TAPIMOTOS DK"
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portada_nosotros);

/***/ }),

/***/ "./resources/js/pages/about.js":
/*!*************************************!*\
  !*** ./resources/js/pages/about.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_contenido_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/contenido-about */ "./resources/js/components/contenido-about.jsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./resources/js/components/footer.jsx");
/* harmony import */ var _components_portada_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/portada-about */ "./resources/js/components/portada-about.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function Nosotros() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_portada_about__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_contenido_about__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nosotros);

/***/ })

}]);