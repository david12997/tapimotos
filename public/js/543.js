"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[543],{931:(n,e,t)=>{t.d(e,{Z:()=>c});t(7294);var i,r=t(7379),a=t(5893);var s,o,l=r.ZP.div(i||(s=["\n\n    width:",";\n    height:",";\n\n    display:flex;\n    justify-content:center;\n    align-items:center;\n\n    .btn1{\n\n        width:100%;\n        height:90%;\n        boder-radius:10px;\n        background:",";\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        border-radius:8px;\n        color:white;\n        box-shadow:2px 2px 6px rgba(0,0,0,0.4);\n        font-size:17px;\n        cursor:pointer;\n    }\n\n\n"],o||(o=s.slice(0)),i=Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(o)}}))),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.color}));const c=function(n){var e=n.width,t=n.height,i=n.title,r=n.color;return(0,a.jsx)(l,{color:r,width:e,height:t,children:(0,a.jsx)("div",{className:"btn1",children:(0,a.jsx)("b",{children:i})})})}},7353:(n,e,t)=>{t.d(e,{Z:()=>p});t(7294);var i,r=t(7379),a=t(2814),s=t(1417),o=t(1436),l=t(5893);var c,d,h=r.ZP.div(i||(c=["\n\n    width:100%;\n    height:650px;\n\n\n    .title-contacto{\n\n        width:100%;\n        height:50px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        font-size:18px;\n        margin-bottom:30px;\n    }\n\n    .body-contacto{\n\n        width:100%;\n        height:510px;\n        background:#0096d2;\n    }\n\n    .text1-contacto{\n\n        width:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        height:40px;\n        color:white;\n    }\n    .container-iconos{\n\n        width:100%;\n        height:420px;\n        color:white;\n\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        flex-wrap:wrap;\n\n    }\n\n    .icon{\n\n        width:300px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        margin-top:10px;\n        cursor:pointer;\n\n    }\n\n    .Whatsapp{\n\n        font-size:60px;\n    }\n\n    .Messenger{\n\n        font-size:55px;\n    }\n    .Contacto{\n\n        font-size:50px;\n    }\n\n    @media(min-width:800px){\n\n        height:400px;\n\n        .icon{\n            font-size:18px;\n            margin-top:-40px;\n\n        }\n\n        .title-contacto{\n            font-size:20px;\n\n        }\n\n        .text1-contacto{\n            font-size:18px;\n            margin-top:40px;\n            height:60px;\n        }\n\n        .body-contacto{\n\n            height:330px;\n        }\n\n        .container-iconos{\n            height:310px;\n        }\n\n\n        .Whatsapp{\n\n            font-size:80px;\n        }\n\n        .Messenger{\n\n            font-size:75px;\n        }\n        .Contacto{\n\n            font-size:70px;\n        }\n\n    }\n"],d||(d=c.slice(0)),i=Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))));const p=function(){var n=["https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina","https://api.whatsapp.com/send/?phone=573118928239&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina","https://www.facebook.com/Tapimotos-DK-110123437269115"],e=[{icono:s.VHX,info1:"Whatsapp",info2:"3132954370",link:n[0]},{icono:s.oJT,info1:"Messenger",info2:"¡Click aquí!",link:n[2]},{icono:o.DOT,info1:"Contacto",info2:"3118928239",link:n[1]}];return(0,l.jsxs)(h,{children:[(0,l.jsx)("br",{}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{className:"title-contacto ",children:(0,l.jsx)("b",{children:"Contacto"})}),(0,l.jsxs)("div",{className:"body-contacto",children:[(0,l.jsx)("div",{className:"text1-contacto",children:(0,l.jsx)("b",{style:{color:"white"},children:"Comprar en Tapimotos nunca fue tan fácil"})}),(0,l.jsx)("div",{className:"container-iconos",children:e.map((function(n,t){return(0,l.jsx)("div",{onClick:function(){return window.location.href=n.link},className:"icon",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:n.info1+" Svg",children:(0,l.jsx)(a.G,{className:e.info1,icon:n.icono})}),(0,l.jsx)("div",{className:"info1",children:(0,l.jsx)("b",{children:n.info1})}),(0,l.jsx)("div",{className:"info2",children:(0,l.jsx)("b",{children:n.info2})})]})},t)}))})]}),(0,l.jsx)("br",{}),(0,l.jsx)("hr",{})]})}},6338:(n,e,t)=>{t.d(e,{Z:()=>h});t(7294);var i,r=t(7379),a=t(2814),s=t(1417),o=t(5893);var l,c,d=r.ZP.div(i||(l=['\n\n    width:100%;\n\n    display:grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 4fr 1.5fr 0.5fr;\n    grid-template-areas:\n        "info info info"\n        "logos logos logos"\n        "pie pie pie";\n\n    .info{\n\n        grid-column-start:info;\n        grid-column-end:info;\n        grid-row-start:info;\n        grid-row-end:info;\n\n        background:black;\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        flex-wrap:wrap;\n        color:white;\n        font-size:16px;\n        margin-top:120px;\n\n    }\n\n    .info1 , .info2 , .info3{\n\n        width:300px;\n        height:30%;\n        margin-top:15px;\n\n\n    }\n\n    .main-logo{\n\n       width:70%;\n        margin-bottom:5px;\n        margin-left:10%;\n    }\n\n    .data1, .title, .data2, .title3, .data3{\n\n        margin-left:17%;\n    }\n\n    .logos{\n        grid-column-start:logos;\n        grid-column-end:logos;\n        grid-row-start:logos;\n        grid-row-end:logos;\n\n        background:black;\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        flex-wrap:wrap;\n\n    }\n\n    .img-logos{\n\n        width:90%;\n    }\n\n    .pie{\n\n        grid-column-start:pie;\n        grid-column-end:pie;\n        grid-row-start:pie;\n        grid-row-end:pie;\n\n        background:rgb(233,128,8);\n        color:white;\n\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        padding-top:7px;\n        flex-wrap:wrap;\n    }\n\n    @media(min-width:800px){\n\n        height:650px;\n        margin-top:0px;\n\n        .main-logo{\n\n            width:100%;\n            margin-left:0%;\n        }\n\n        .img-logos{\n\n            width:28%;\n        }\n\n        .info{\n            margin-top:0px;\n        }\n        .info1, .info2, .info3{\n\n            margin-top:-110px;\n        }\n    }\n\n\n'],c||(c=l.slice(0)),i=Object.freeze(Object.defineProperties(l,{raw:{value:Object.freeze(c)}}))));const h=function(){return(0,o.jsxs)(d,{children:[(0,o.jsxs)("div",{className:"info",children:[(0,o.jsxs)("div",{className:"info1",children:[(0,o.jsx)("img",{className:"main-logo",src:"/images/logo-tapimotos.png"}),(0,o.jsxs)("div",{className:"data1",children:[(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"Oficina: Cra 11-6-46 Villanueva"})}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"Casanare Colombia"})}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"email: ventas@tapimotosdk.com"})})]})]}),(0,o.jsxs)("div",{className:"info2",children:[(0,o.jsx)("div",{style:{color:"rgb(233,128,8)"},className:"title",children:(0,o.jsx)("b",{children:"Servicio al cliente"})}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"data2",children:[(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"ventas: ventas@tapimotosdk.com"})}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"Whatsapp: 3208168103"})}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"Métodos de pago"})}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"Envíos"})}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"Garantías"})})]})]}),(0,o.jsxs)("div",{className:"info3",children:[(0,o.jsx)("div",{style:{color:"rgb(233,128,8)"},className:"title3",children:(0,o.jsx)("b",{children:"Legal"})}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"data3",children:[(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"legal@tapimotosdk.com"})}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"Términos y condiciones"})}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"Tratamiento de datos"})}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"Manual de usuario"})})]})]})]}),(0,o.jsxs)("div",{className:"logos",children:[(0,o.jsx)("img",{className:"img-logos",src:"/images/mercadopago.png"}),(0,o.jsx)("img",{className:"img-logos",src:"/images/addi.png"})]}),(0,o.jsxs)("div",{className:"pie",children:[(0,o.jsxs)("div",{className:"d-block",children:[(0,o.jsx)("p",{children:(0,o.jsx)("small",{children:(0,o.jsx)("b",{children:"Todos los derechos reservados "})})}),(0,o.jsx)("p",{children:(0,o.jsx)("small",{children:"Tapimotosdk villanueva casanare"})})]}),(0,o.jsxs)("div",{className:"d-block",children:[(0,o.jsx)("p",{children:(0,o.jsx)("small",{children:(0,o.jsxs)("b",{children:[(0,o.jsx)(a.G,{icon:s.neY})," Tapimotos DK"]})})}),(0,o.jsx)("p",{children:(0,o.jsx)("small",{children:(0,o.jsxs)("b",{children:[(0,o.jsx)(a.G,{icon:s.VHX})," 320 816 8103"]})})})]})]})]})}},9543:(n,e,t)=>{t.r(e),t.d(e,{default:()=>sn});var i,r=t(7294),a=t(7379),s=t(2814),o=t(1417),l=t(931),c=t(5893);var d,h,p=a.ZP.div(i||(d=['\n\n    width:330px;\n    height:200px;\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr;\n    grid-template-areas:\n        "imagen  datos"\n        "btn     btn  ";\n    grid-gap:10px;\n\n\n    .imagen{\n\n        grid-column-start: imagen;\n        grid-column-end: imagen;\n        grid-row-start:imagen;\n        grid-row-end:imagen;\n\n\n    }\n\n    .datos{\n\n        grid-column-start: datos;\n        grid-column-end: datos;\n        grid-row-start:datos;\n        grid-row-end:datos;\n\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        flex-wrap:wrap;\n        color:gray;\n    }\n\n    .dato{\n\n        width:90%;\n        height:30%;\n        margin-top:3px;\n        font-size:16px;\n\n\n    }\n\n    .btn-asesor{\n\n        grid-column-start: btn;\n        grid-column-end: btn;\n        grid-row-start:btn;\n        grid-row-end:btn;\n\n\n    }\n\n'],h||(h=d.slice(0)),i=Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(h)}}))));const u=function(n){var e=n.img,t=n.asesor,i=n.number,r=n.email,a=n.link;return(0,c.jsxs)(p,{children:[(0,c.jsx)("div",{className:"imagen",children:(0,c.jsx)("img",{style:{width:"90%"},src:e})}),(0,c.jsxs)("div",{className:"datos",children:[(0,c.jsx)("div",{className:"dato",children:(0,c.jsx)("b",{children:t})}),(0,c.jsxs)("div",{className:"dato",children:[(0,c.jsx)(s.G,{icon:o.VHX})," ",(0,c.jsxs)("b",{children:[" ",i]})]}),(0,c.jsx)("div",{className:"dato",children:(0,c.jsx)("b",{children:r})})]}),(0,c.jsx)("div",{className:"btn-asesor",onClick:function(){return window.location.href=a},children:(0,c.jsx)(l.Z,{color:"rgb(233,128,8)",width:"330px",height:"47px",title:"Contactar"})})]})};var x;var f=a.ZP.div(x||(x=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n\n    width:100%;\n    display:flex;\n    justify-content:space-around;\n    flex-wrap:wrap;\n    margin-top:100px;\n\n    .asesores{\n\n       margin-top:50px;\n\n    }\n\n    .main-title{\n\n        margin-top:50px;\n        width:100%;\n        height:50px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        font-size:17px;\n\n\n    }\n\n    @media(min-width:800px){\n\n        .asesores{\n\n            margin:70px;\n        }\n\n        .main-title{\n\n            font-size:18px;\n        }\n    }\n\n"])));const m=function(){return(0,c.jsxs)("div",{style:{width:"100%"},children:[(0,c.jsxs)(f,{children:[(0,c.jsx)("div",{className:"main-title",children:(0,c.jsx)("b",{children:"¿NECESITAS AYUDA?"})}),[{img:"./images/asesor.png",asesor:"Asesor1",number:"3208168103",email:"asesor1@tapimotosdk.com",link:"https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina"},{img:"./images/asesor.png",asesor:"Asesor2",number:"3118928239",email:"asesor2@tapimotosdk.com",link:"https://api.whatsapp.com/send/?phone=573118928239&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina"},{img:"./images/asesor.png",asesor:"Asesor3",number:"3208168103",email:"asesor3@tapimotosdk.com",link:"https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina"},{img:"./images/asesor.png",asesor:"Asesor4",number:"3118928239",email:"asesor4@tapimotosdk.com",link:"https://api.whatsapp.com/send/?phone=573118928239&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina"}].map((function(n,e){return(0,c.jsx)("div",{className:"asesores",children:(0,c.jsx)(u,{img:n.img,asesor:n.asesor,number:n.number,email:n.email,link:n.link})},e)}))]}),(0,c.jsx)("br",{})]})};var g;var j=a.ZP.div(g||(g=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n\n    width:100%;\n    height:100px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    margin-top:30px;\n    cursor:pointer;\n\n    .container-btn-whatsapp{\n\n        width:90%;\n        height:65%;\n        background:#319713;\n        border-radius:9px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        font-size:18px;\n        box-shadow:3px 3px 8px rgba(0,0,0,0.3);\n    }\n\n    .img-whatsapp{\n\n        width:50px;\n        margin-right:9%;\n    }\n\n    b{\n        color:white;\n    }\n\n    @media(min-width:800px){\n\n        .container-btn-whatsapp{\n\n            width:40%;\n            height:70%;\n            background:#319713;\n            border-radius:9px;\n            display:flex;\n            justify-content:center;\n            align-items:center;\n            font-size:19px;\n            box-shadow:3px 3px 8px rgba(0,0,0,0.3);\n        }\n\n        .img-whatsapp{\n\n            margin-left:-80px;\n        }\n\n\n    }\n "])));const b=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(j,{children:(0,c.jsxs)("div",{className:"container-btn-whatsapp",onClick:function(){window.location.href="https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina"},children:[(0,c.jsx)("div",{className:"img-whatsapp",children:(0,c.jsx)("img",{style:{width:"100%"},src:"./images/logo-whatsapp.svg"})}),(0,c.jsx)("b",{children:"¿Que estas buscando?"})]})})})};var v,w=t(7353),y=t(3067);function N(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var i,r,a=[],s=!0,o=!1;try{for(t=t.call(n);!(s=(i=t.next()).done)&&(a.push(i.value),!e||a.length!==e);s=!0);}catch(n){o=!0,r=n}finally{try{s||null==t.return||t.return()}finally{if(o)throw r}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return k(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var z=a.ZP.div(v||(v=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n\n    width:100%;\n\n\n    .container-articles{\n        width:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        flex-wrap:wrap;\n    }\n\n\n    .title-main{\n\n        width:100%;\n        height:60px;\n        font-size:18px;\n    }\n    .article{\n\n        width:300px;\n        height:550px;\n        display:block;\n        margin-top:50px;\n    }\n\n    img{\n\n        height:298px;\n        box-shadow:0px 0px 10px rgba(0,0,0,0.25);\n        border-radius:30px;\n    }\n\n    .title-article{\n\n        width:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        height:60px;\n        color:#e98008;\n    }\n\n    .content-article{\n\n        width:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        color:gray;\n        height:150px;\n        overflow:hidden;\n\n    }\n\n    .know-more{\n\n        width:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        color:#0096d2;\n        height:22px;\n        text-decoration:none;\n    }\n\n    @media(min-width:800px){\n\n        .article{\n\n            margin:30px;\n        }\n\n        .title-main{\n\n            font-size:20px;\n        }\n\n        .title-article{\n            font-size:17px;\n        }\n\n        .content-article{\n\n            font-size:17px;\n        }\n\n        .know-more{\n            font-size:17px;\n        }\n    }\n"])));const O=function(){var n=N((0,r.useState)(null),2),e=n[0],t=n[1];return(0,r.useEffect)((function(){return(0,y.ds)().credits.response().then((function(n){t(n[0])})),function(){t(null)}}),[]),(0,c.jsxs)(z,{children:[(0,c.jsx)("br",{}),(0,c.jsx)("hr",{}),(0,c.jsx)("div",{className:"title-main d-flex justify-content-center align-items-center",children:(0,c.jsx)("b",{children:"Financiación y Creditos"})}),(0,c.jsx)("div",{className:"container-articles",children:null!==e&&e.map((function(n,e){for(;e<3;)return(0,c.jsxs)("div",{className:"article",children:[(0,c.jsx)("img",{src:n.img}),(0,c.jsx)("b",{className:"title-article",children:n.title}),(0,c.jsx)("b",{className:"content-article",children:(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:n.content}})}),(0,c.jsx)("a",{href:n.link,className:"know-more",children:(0,c.jsx)("b",{children:"Saber más"})})]},e)}))})]})};var S,C=t(6338);var A=a.ZP.div(S||(S=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n\n    width:100%;\n    margin-top:0px;\n\n\n    .img-desktop{\n\n        display:none;\n    }\n\n    .img-mobile{\n\n        display:block;\n    }\n\n    @media(min-width:800px){\n\n        margin-top:-18px;\n\n        .img-desktop{\n\n            display:block;\n        }\n\n        .img-mobile{\n\n            display:none;\n        }\n\n    }\n\n"])));const P=function(){return(0,c.jsx)("div",{children:(0,c.jsxs)(A,{children:[(0,c.jsx)("img",{className:"img-desktop",style:{width:"100%"},src:"./images/portada-desktop.png"}),(0,c.jsx)("img",{className:"img-mobile",style:{width:"100%"},src:"./images/portada-principal-mobile.png"})]})})};var T;var Z=a.ZP.div(T||(T=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n\n    width:300px;\n    height:100px;\n    background:",";\n    border-radius:10px;\n    display:flex;\n    margin-top:25px;\n    cursor:pointer;\n    box-shadow:3px 3px 8px rgba(0,0,0,0.3);\n\n    .textos{\n\n        width:60%;\n        height:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n\n    }\n\n    .img{\n\n        width:40%;\n        height:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n    }\n\n    @media(min-width:800px){\n\n        margin-bottom:18px;\n    }\n\n"])),(function(n){return n.color}));const M=function(n){var e=n.name,t=n.discount,i=n.img,r=n.color;return(0,c.jsxs)(Z,{color:r,children:[(0,c.jsx)("div",{className:"textos",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("b",{style:{display:"block",fontSize:"18px",color:"white"},children:e}),(0,c.jsx)("b",{style:{display:"block",marginLeft:"40px"},children:t})]})}),(0,c.jsx)("div",{className:"img",children:(0,c.jsx)("img",{style:{width:"70%"},src:i})})]})};var _;var E=a.ZP.div(_||(_=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n\n    width:100%;\n    height:900px;\n    margin-top:40px;\n\n    .contenedor-btns{\n\n        width:100%;\n        display:flex;\n        justify-content:center;\n        height:430px;\n        overflow-y:scroll;\n        padding:4px;\n\n    }\n\n    .main-search{\n\n        width:100%;\n        height:470px;\n    }\n\n    .title-search{\n\n        width:100%;\n        height:70px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        font-size:19px;\n    }\n\n    .Form{\n\n        width:100%;\n        height:400px;\n    }\n\n\n    @media(min-width:800px){\n\n          height:450px;\n\n\n        .contenedor-btns{\n\n            width:100%;\n            height:150px;\n            overflow-y:hidden;\n            overflow-x:scroll;\n\n\n        }\n\n        .btns{\n\n            width:100%;\n            display:flex;\n            justify-content:space-around;\n            align-items:center;\n        }\n        .main-search{\n\n            width:100%;\n            height:300px;\n        }\n\n        .title-search{\n\n            width:100%;\n            height:70px;\n            display:flex;\n            justify-content:center;\n            align-items:center;\n            font-size:18px;\n        }\n\n        .Form{\n\n            width:100%;\n            height:230px;\n        }\n    }\n\n"])));const I=E;var H,F=t(6974),L=t(5617),G=t(957);function R(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var i,r,a=[],s=!0,o=!1;try{for(t=t.call(n);!(s=(i=t.next()).done)&&(a.push(i.value),!e||a.length!==e);s=!0);}catch(n){o=!0,r=n}finally{try{s||null==t.return||t.return()}finally{if(o)throw r}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return U(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var $=a.ZP.div(H||(H=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n\n    width:100%;\n    height:390px;\n    background:#eeecec;\n\n    .llantas-title{\n\n        width:70%;\n        margin-left:15%;\n        height:60px;\n        background:rgb(233, 128, 8);\n        color:white;\n        border-radius:0px 0px 10px 10px;\n        display:flex;\n        justify-content:Center;\n        align-items:center;\n        font-size:16px;\n\n    }\n\n    .llantas-inputs{\n\n        width:100%;\n        margin-top:14px;\n        height:320px;\n    }\n\n    select{\n\n        width:80%;\n        height:45px;\n        border:0px;\n        margin-left:10%;\n        margin-top:28px;\n        border-radius:7px;\n        color:gray;\n        box-shadow:0px 0px 8px rgba(0,0,0,0.3);\n        background:white;\n\n    }\n\n    @media(min-width:800px){\n\n        height:225px;\n\n\n        .llantas-title{\n\n            width:20%;\n            margin-left:5%;\n        }\n\n        .llantas-inputs{\n\n            height:130px;\n            display:flex;\n            justify-content:space-around;\n            align-items:center;\n            flex-wrap:wrap;\n        }\n\n        select{\n\n            width:250px;\n            margin-left:0;\n            font-size:18px;\n\n        }\n    }\n"])));const B=function(){var n=(0,r.useRef)(null),e=(0,r.useRef)(null),t=(0,r.useRef)(null),i=R((0,r.useState)("Marca de la llanta"),2),a=i[0],s=i[1],o=R((0,r.useState)("Ancho de la llanta"),2),l=o[0],d=o[1],h=R((0,r.useState)("Perfil de la llanta"),2),p=h[0],u=h[1],x=R((0,r.useState)("Numero de rin"),2),f=x[0],m=x[1],g=R((0,r.useState)(null),2),j=g[0],b=g[1],v=R((0,r.useState)(null),2),w=v[0],N=v[1],k=R((0,r.useState)(null),2),z=k[0],O=k[1],S=R((0,r.useState)(null),2),C=S[0],A=S[1],P=(0,L.I0)(),T=(0,F.s0)();return(0,r.useEffect)((function(){return s("Cargando resultados..."),(0,y.ds)().search_llantas.response().then((function(n){b(n[0]),s("Marca de la llanta")})),function(){b(null),s("Marca de la llanta")}}),[]),(0,c.jsxs)($,{children:[(0,c.jsx)("div",{className:"llantas-title",children:(0,c.jsx)("b",{children:"Llantas por medida"})}),(0,c.jsxs)("div",{className:"llantas-inputs",children:[(0,c.jsxs)("select",{value:a,ref:n,onChange:function(n){return e=n.target.value,d("Cargando resultados..."),s(e),void("Marca de la llanta"!==e&&"Cargando resultados..."!==e?(0,y.ds)().search_llantas.llantas_for_marca(e).then((function(n){0===n[0].length?N(["Sin resultados"]):N(n[0]),d("Ancho de la llanta")})):d("Ancho de la llanta"));var e},children:[(0,c.jsx)("option",{value:"Marca de la llanta",children:"Marca de la llanta"}),null===j?(0,c.jsx)("option",{value:"Cargando resultados...",children:"Cargando resultados..."}):j.map((function(n,e){return(0,c.jsx)("option",{value:n.nombre,children:n.nombre},e)}))]}),(0,c.jsxs)("select",{value:l,ref:e,onChange:function(e){return t=n.current.value,i=e.target.value,u("Cargando resultados..."),d(i),void("Ancho de la llanta"!==i&&"Sin resultados"!==i&&"Cargando resultados..."!==i?(0,y.ds)().search_llantas.llantas_for_marcaAncho(t,i).then((function(n){0===n[0].length?O(["Sin resultados"]):O(n[0]),u("Perfil de la llanta")})):u("Perfil de la llanta"));var t,i},children:[(0,c.jsx)("option",{value:"Ancho de la llanta",children:"Ancho de la llanta"}),null===w?(0,c.jsx)("option",{value:"Cargando resultados...",children:"Cargando resultados..."}):w.map((function(n,e){return(0,c.jsx)("option",{value:n,children:n},e)}))]}),(0,c.jsxs)("select",{value:p,ref:t,onChange:function(t){return i=n.current.value,r=e.current.value,a=t.target.value,m("Cargando resultados..."),u(a),void("Perfil de la llanta"!==a&&"Sin resultados"!==a&&"Cargando resultados..."!==a?(0,y.ds)().search_llantas.llantas_for_marcaAnchoPerfil(i,r,a).then((function(n){0===n[0].length?A(["Sin resultados"]):A(n[0]),m("Numero de rin")})):m("Numero de rin"));var i,r,a},children:[(0,c.jsx)("option",{value:"Perfil de la llanta",children:"Perfil de la llanta"}),null===z?(0,c.jsx)("option",{value:"Cargando resultados...",children:"Cargando resultados..."}):z.map((function(n,e){return(0,c.jsx)("option",{value:n,children:n},e)}))]}),(0,c.jsxs)("select",{value:f,onChange:function(i){return r=n.current.value,a=e.current.value,s=t.current.value,o=i.target.value,l="Buscar",c=P,d=T,void("Numero de rin"!==o&&"Sin resultados"!==o&&"Cargando resultados..."!==o&&(c((0,G.E$)({name:l})),c((0,G.Pn)({marca:["Marca",r],ancho:["Ancho",a],perfil:["Perfil",s],rin:["N° rin",o]})),m(o),(0,y.ds)().search_llantas.llantas_for_marcaAnchoPerfilRin(r,a,s,o).then((function(n){console.log(n),c((0,G.Oj)(n[0])),c((0,G._Y)(!0)),d("/productos/busqueda")}))));var r,a,s,o,l,c,d},children:[(0,c.jsx)("option",{value:"Numero de rin",children:"Numero de rin"}),null===C?(0,c.jsx)("option",{value:"Cargando resultados...",children:"Cargando resultados..."}):C.map((function(n,e){return(0,c.jsx)("option",{value:n,children:n},e)}))]})]})]})};var D;var V=a.ZP.div(D||(D=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n\n    width:100%;\n    height:390px;\n    background:#eeecec;\n\n    .cascos-title{\n\n        width:70%;\n        margin-left:15%;\n        height:60px;\n        background:rgb(233, 128, 8);\n        color:white;\n        border-radius:0px 0px 10px 10px;\n        display:flex;\n        justify-content:Center;\n        align-items:center;\n        font-size:16px;\n\n    }\n\n    .cascos-inputs{\n\n        width:100%;\n        margin-top:14px;\n        height:320px;\n    }\n\n    select{\n\n        width:80%;\n        height:45px;\n        border:0px;\n        margin-left:10%;\n        margin-top:28px;\n        border-radius:7px;\n        color:gray;\n        box-shadow:0px 0px 8px rgba(0,0,0,0.3);\n        background:white;\n\n    }\n\n    .btn-1{\n\n        width:80%;\n        height:45px;\n        margin-left:10%;\n        margin-top:28px;\n    }\n\n    @media(min-width:800px){\n\n        height:225px;\n\n\n        .cascos-title{\n\n            width:20%;\n            margin-left:5%;\n        }\n\n        .cascos-inputs{\n\n            height:130px;\n            display:flex;\n            justify-content:space-around;\n            align-items:center;\n            flex-wrap:wrap;\n        }\n\n        select{\n\n            width:250px;\n            margin-left:0;\n            font-size:18px;\n        }\n\n        .btn-1{\n\n            width:250px;\n            margin-left:0;\n            font-size:18px;\n        }\n    }\n"])));const W=function(){return(0,c.jsxs)(V,{children:[(0,c.jsx)("div",{className:"cascos-title",children:(0,c.jsx)("b",{children:"Cascos"})}),(0,c.jsxs)("div",{className:"cascos-inputs",children:[(0,c.jsx)("select",{children:(0,c.jsx)("option",{children:"Marca"})}),(0,c.jsx)("select",{children:(0,c.jsx)("option",{children:"Color"})}),(0,c.jsx)("div",{className:"btn-1",children:(0,c.jsx)(l.Z,{width:"100%",height:"100%",color:"#0096d2",title:"Buscar"})})]})]})};var X;var Y=a.ZP.div(X||(X=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n\n    width:100%;\n    height:390px;\n    background:#eeecec;\n\n    .aceites-title{\n\n        width:70%;\n        margin-left:15%;\n        height:60px;\n        background:rgb(233, 128, 8);\n        color:white;\n        border-radius:0px 0px 10px 10px;\n        display:flex;\n        justify-content:Center;\n        align-items:center;\n        font-size:16px;\n\n    }\n\n    .aceites-inputs{\n\n        width:100%;\n        margin-top:14px;\n        height:320px;\n    }\n\n    select{\n\n        width:80%;\n        height:45px;\n        border:0px;\n        margin-left:10%;\n        margin-top:28px;\n        border-radius:7px;\n        color:gray;\n        box-shadow:0px 0px 8px rgba(0,0,0,0.3);\n        background:white;\n\n    }\n    .btn-1{\n\n        width:80%;\n        height:45px;\n        margin-left:10%;\n        margin-top:28px;\n    }\n\n    @media(min-width:800px){\n\n        height:225px;\n\n\n        .aceites-title{\n\n            width:20%;\n            margin-left:5%;\n        }\n\n        .aceites-inputs{\n\n            height:130px;\n            display:flex;\n            justify-content:space-around;\n            align-items:center;\n            flex-wrap:wrap;\n        }\n\n        select{\n\n            width:250px;\n            margin-left:0;\n            font-size:18px;\n        }\n\n        .btn-1{\n\n            width:250px;\n            margin-left:0;\n            font-size:18px;\n        }\n    }\n"])));const q=function(){return(0,c.jsxs)(Y,{children:[(0,c.jsx)("div",{className:"aceites-title",children:(0,c.jsx)("b",{children:"Aceites"})}),(0,c.jsxs)("div",{className:"aceites-inputs",children:[(0,c.jsx)("select",{children:(0,c.jsx)("option",{children:"Marca"})}),(0,c.jsx)("select",{children:(0,c.jsx)("option",{children:"Tipo de moto"})}),(0,c.jsx)("div",{className:"btn-1",children:(0,c.jsx)(l.Z,{width:"100%",height:"100%",color:"#0096d2",title:"Buscar"})})]})]})};function K(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var i,r,a=[],s=!0,o=!1;try{for(t=t.call(n);!(s=(i=t.next()).done)&&(a.push(i.value),!e||a.length!==e);s=!0);}catch(n){o=!0,r=n}finally{try{s||null==t.return||t.return()}finally{if(o)throw r}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return J(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return J(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}const Q=function(){var n=[{name:"LLANTAS",discount:"20% OFF",img:"./images/llantas.png"},{name:"CASCOS",discount:"20% OFF",img:"./images/casco.png"},{name:"ACEITES",discount:"20% OFF",img:"./images/aceite.png"}],e=K((0,r.useState)(n),2),t=e[0],i=e[1],a=K((0,r.useState)("LLANTAS"),2),s=a[0],o=a[1],l=K((0,r.useState)((0,c.jsx)(B,{})),2),d=l[0],h=l[1];(0,r.useEffect)((function(){return(0,y.ds)().main_search.response().then((function(n){"Error can not get data"!==n[0]&&i(n[0])})),function(){i(n)}}),[]);return(0,c.jsxs)(I,{children:[(0,c.jsx)("div",{className:"contenedor-btns",children:(0,c.jsx)("div",{className:"btns",children:t.map((function(n,e){return(0,c.jsx)("div",{className:"buttons-category",onClick:function(){return function(n,e){o(e),"LLANTAS"===e&&h((0,c.jsx)(B,{})),"CASCOS"===e&&h((0,c.jsx)(W,{})),"ACEITES"===e&&h((0,c.jsx)(q,{}));for(var t=document.getElementsByClassName("buttons-category"),i=0;i<t.length;i++)t[i].firstChild.style.background=n===i?"#e98008":"#0096d2";window.scrollTo(0,780)}(e,n.name)},children:(0,c.jsx)(M,{color:"#0096d2",name:n.name,discount:n.discount,img:n.img})},e)}))})}),(0,c.jsxs)("div",{className:"main-search",children:[(0,c.jsx)("div",{className:"title-search",children:(0,c.jsx)("b",{children:(0,c.jsxs)("li",{children:[" ",s]})})}),(0,c.jsx)("div",{className:"Form",children:d})]})]})};var nn;function en(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var i,r,a=[],s=!0,o=!1;try{for(t=t.call(n);!(s=(i=t.next()).done)&&(a.push(i.value),!e||a.length!==e);s=!0);}catch(n){o=!0,r=n}finally{try{s||null==t.return||t.return()}finally{if(o)throw r}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return tn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return tn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var rn=a.ZP.div(nn||(nn=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n\n    width:100%;\n\n    .title-services{\n\n        width:100%;\n        height:60px;\n        font-size:18px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n    }\n\n    .container-services{\n\n        width:100%;\n        display:flex;\n        justify-content:space-around;\n        align-items:center;\n        flex-wrap:wrap;\n\n    }\n\n    .service{\n\n        width:330px;\n        height:200px;\n        display:flex;\n        margin-top:50px;\n        cursor:pointer;\n    }\n\n    .img{\n\n        width:44%;\n        height:100%;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        margin-right:1%;\n    }\n\n    .content{\n\n        margin-left:2%;\n        width:53%;\n        height:100%;\n    }\n\n    .title-service{\n\n        height:40px;\n        color:#e98008;\n    }\n\n    .body{\n        width:100%;\n        height:130px;\n        overflow:hidden;\n        color:gray;\n    }\n\n    @media(min-width:800px){\n\n        .title-services{\n\n            font-size:20px;\n        }\n\n        .container-services{\n\n            padding-left:100px;\n            padding-right:100px;\n        }\n        .service{\n\n            width:345px;\n            font-size:17px;\n            margin:40px;\n        }\n\n    }\n"])));const an=function(){var n=en((0,r.useState)(null),2),e=n[0],t=n[1];(0,r.useEffect)((function(){return(0,y.ds)().services.response().then((function(n){t(n[0])})),function(){t(null)}}),[]);return(0,c.jsxs)(rn,{children:[(0,c.jsx)("br",{}),(0,c.jsx)("hr",{}),(0,c.jsx)("div",{className:"title-services",children:(0,c.jsx)("b",{children:"Servicios"})}),(0,c.jsx)("div",{className:"container-services",children:null!==e&&e.map((function(n,e){for(;e<4;)return(0,c.jsxs)("div",{onClick:function(){return e=n.link,void(window.location.href=e);var e},className:"service",children:[(0,c.jsx)("div",{className:"img",children:(0,c.jsx)("img",{style:{width:"100%",borderRadius:"40px"},src:n.img})}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsx)("div",{className:"title-service d-flex justify-content-start align-items-center",children:(0,c.jsx)("b",{children:n.title})}),(0,c.jsx)("div",{className:"body d-flex justify-content-center align-items-center",children:(0,c.jsx)("b",{children:(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:n.content}})})})]})]},e)}))})]})};const sn=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(P,{}),(0,c.jsx)(b,{}),(0,c.jsx)(Q,{}),(0,c.jsx)(O,{}),(0,c.jsx)(an,{}),(0,c.jsx)(w.Z,{}),(0,c.jsx)(m,{}),(0,c.jsx)(C.Z,{})]})}}}]);