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

	var $app_template$ = __webpack_require__(4)
	var $app_style$ = __webpack_require__(5)
	var $app_script$ = __webpack_require__(6)
	
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
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "layout"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "title"
	      ],
	      "children": [
	        {
	          "type": "input",
	          "attr": {
	            "type": "text",
	            "placeholder": "标题",
	            "value": function () {return this.title}
	          },
	          "events": {
	            "change": "handleTitleChange"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "content"
	      ],
	      "children": [
	        {
	          "type": "textarea",
	          "attr": {
	            "placeholder": "内容",
	            "value": function () {return this.content}
	          },
	          "events": {
	            "change": "handleContentChange"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "footer"
	      ],
	      "children": [
	        {
	          "type": "input",
	          "attr": {
	            "type": "button",
	            "value": "保存"
	          },
	          "classList": [
	            "btn",
	            "btn-success"
	          ],
	          "events": {
	            "click": "handleSaveClick"
	          }
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "button",
	            "value": "返回"
	          },
	          "classList": [
	            "btn",
	            "btn-cancel"
	          ],
	          "events": {
	            "click": "handleCancelClick"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  ".layout": {
	    "flexDirection": "column"
	  },
	  ".title": {
	    "width": "100%",
	    "height": "10%",
	    "paddingTop": "0px",
	    "paddingRight": "20px",
	    "paddingBottom": "0px",
	    "paddingLeft": "20px",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#e6e6e6"
	  },
	  ".title input": {
	    "color": "#191919",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "input"
	        }
	      ]
	    }
	  },
	  ".content": {
	    "height": "92%",
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px"
	  },
	  ".content textarea": {
	    "width": "100%",
	    "height": "100%",
	    "color": "#636363",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "textarea"
	        }
	      ]
	    }
	  },
	  ".footer": {
	    "height": "8%"
	  },
	  ".btn": {
	    "flex": 1,
	    "color": "#ffffff"
	  },
	  ".btn-success": {
	    "backgroundColor": "#519650"
	  },
	  ".btn-cancel": {
	    "backgroundColor": "#FFA500"
	  }
	}

/***/ },
/* 6 */
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
	    title: '',
	    content: '',
	    index: ''
	  },
	  onShow: function onShow() {
	    if (this.index) {
	      var _$app$$def$data$items = this.$app.$def.data.items[this.index],
	          title = _$app$$def$data$items.title,
	          content = _$app$$def$data$items.content;
	
	      this.title = title;
	      this.content = content;
	    }
	  },
	  onMenuPress: function onMenuPress() {
	    this.$app.showMenu();
	  },
	  handleTitleChange: function handleTitleChange(e) {
	    this.title = e.value;
	  },
	  handleContentChange: function handleContentChange(e) {
	    this.content = e.value;
	  },
	  handleSaveClick: function handleSaveClick(e) {
	    var title = this.title,
	        content = this.content,
	        items = this.$app.$def.data.items;
	
	    var data = {
	      title: title,
	      content: content,
	      time: +new Date()
	    };
	    if (this.index) {
	      items.splice(+this.index, 1, data);
	    } else {
	      items.push(data);
	    }
	    this.$app.saveData(this.handleCancelClick);
	  },
	  handleCancelClick: function handleCancelClick(e) {
	    _system2.default.back();
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