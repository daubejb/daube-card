"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),template=document.createElement("template");template.innerHTML='\n  <style>\n\n    :host {\n      display: block;\n      font-size: 1rem;\n      font-family: Helvetica, Verdana, sans-serif;\n      color: rgba(0,0,0,0.87);\n      margin: 0;\n      padding: 0;\n    }\n\n    :host([hidden]) {\n      display: none;\n    }\n\n    .daubecard {\n      max-width: 45rem;\n      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n      transition: 0.3s;\n      border-radius: 3px;\n      padding: 1.25rem 2rem 4rem 2rem;\n      margin: 0 auto;\n      margin-top: 2rem;\n      background-color: white;\n    }\n\n  </style>\n\n  <div class="daubecard">\n    <slot></slot>\n  </div>\n',window.ShadyCSS&&ShadyCSS.prepareTemplate(template,"daube-card");var DaubeCard=function(e){function n(){_classCallCheck(this,n);var e=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(template.content.cloneNode(!0)),e}return _inherits(n,HTMLElement),_createClass(n,null,[{key:"observedAttributes",get:function(){}}]),_createClass(n,[{key:"connectedCallback",value:function(){window.ShadyCSS&&ShadyCSS.styleElement(this)}}]),n}();customElements.define("daube-card",DaubeCard);