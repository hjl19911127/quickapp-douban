(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(7)
	var $app_style$ = __webpack_require__(8)
	var $app_script$ = __webpack_require__(9)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "layout"
	  ],
	  "children": [
	    {
	      "type": "list",
	      "attr": {},
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": {
	            "exp": function () {return this.items},
	            "key": "index",
	            "value": "item"
	          },
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "product"
	              },
	              "classList": [
	                "list-item"
	              ],
	              "events": {
	                "click": function (evt) {this.edit(this.index.toString(),evt)}
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.item.title}
	                  },
	                  "classList": [
	                    "title"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.item.content}
	                  },
	                  "classList": [
	                    "content"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.formatTime(this.item.time)}
	                  },
	                  "classList": [
	                    "time"
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "input",
	      "attr": {
	        "type": "button",
	        "value": "+"
	      },
	      "classList": [
	        "fixed-btn"
	      ],
	      "events": {
	        "click": function (evt) {this.edit('',evt)}
	      }
	    }
	  ]
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  ".layout": {
	    "flexDirection": "column"
	  },
	  ".list": {
	    "flexDirection": "column"
	  },
	  ".list-item": {
	    "borderTopWidth": "1px",
	    "borderTopColor": "#eeeeee",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#dddddd",
	    "height": "200px",
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "marginBottom": "10px",
	    "paddingTop": "0px",
	    "paddingRight": "20px",
	    "paddingBottom": "0px",
	    "paddingLeft": "20px"
	  },
	  ".title": {
	    "fontSize": "36px"
	  },
	  ".content": {
	    "fontSize": "20px",
	    "color": "#aaaaaa",
	    "marginBottom": "40px"
	  },
	  ".time": {
	    "fontSize": "20px",
	    "color": "#dddddd"
	  },
	  ".fixed-btn": {
	    "color": "#ffffff",
	    "fontSize": "50px",
	    "position": "fixed",
	    "width": "100px",
	    "height": "100px",
	    "right": "40px",
	    "bottom": "40px",
	    "borderRadius": "50px",
	    "backgroundColor": "#519650"
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    items: []
	  },
	  onMenuPress: function onMenuPress() {
	    var _this = this;
	
	    var prompt = $app_require$('@app-module/system.prompt');
	    prompt.showContextMenu({
	      itemList: ['清空数据', '取消'],
	      success: function success(ret) {
	        switch (ret.index) {
	          case 0:
	            _this.$app.deleteData();
	            break;
	          case 1:
	            break;
	          default:
	            prompt.showToast({ message: 'error' });
	        }
	      }
	    });
	  },
	  onShow: function onShow() {
	    console.log('onShow');
	    this.items = this.$app.$def.data.items;
	  },
	  formatTime: function formatTime(time) {
	    return new Date(time).toJSON().split('.')[0].replace('T', ' ');
	  },
	  edit: function edit(index) {
	    _system2.default.push({
	      uri: '/Edit',
	      params: {
	        index: index
	      }
	    });
	  },
	  swipe: function swipe(e) {
	    console.log(JSON.stringify(e));
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map