"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),_got=require("got"),_got2=_interopRequireDefault(_got),RequestHelper=function(){function e(t){_classCallCheck(this,e),this.headers={authorization:"Bearer "+t,content_type:"application/json"},this.apiUrl="https://api.digitalocean.com/v2/"}return _createClass(e,[{key:"request",value:function(e,t){var n=void 0;return t||(n=new Promise(function(e,n){t=function(t,u,r){t?n(t):e({response:u,body:r})}})),e.includeAll?this.getAllPages(e.key,e,t):this.submitRequest(e,t),n}},{key:"submitRequest",value:function(e,t){var n=this.requestBuilder(e);(0,_got2["default"])(n.uri,n).then(function(e){return t(null,e,e.body)})["catch"](function(e){return t(e)})}},{key:"isSuccessfulRequest",value:function(e){var t=/^[2][0-9][0-9]$/;return t.test(e)}},{key:"getAllPages",value:function(e,t,n){var u=this,r=[],a=0,i=0,o=1;t.qs.page=1,this.submitRequest(t,function(s,l,c){return s&&n(s),a=c.meta.total,r=r.concat(c[e]),i=a/(t.qs.per_page||25),r.length>=a?n(null,l,r):void u.getRemainingPages(t,2,i,function(t,u,a){t&&n(t),o++,r=r.concat(a[e]),o===i&&n(null,u,r)})})}},{key:"getRemainingPages",value:function(e,t,n,u){for(var r=t;n>=r;r++)e.qs.page=r,this.submitRequest(e,u)}},{key:"requestBuilder",value:function(e){return{uri:this.apiUrl+e.actionPath,method:e.method||"GET",headers:e.headers||this.headers,body:e.body||{}}}}]),e}();exports["default"]=RequestHelper,module.exports=exports["default"];