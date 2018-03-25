(function(){
      
  var createAppHandler = function() {
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

	var $app_script$ = __webpack_require__(10)
	
	$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	})
	
	$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(11);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _system = $app_require$('@app-module/system.storage');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _util = __webpack_require__(14);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  showMenu: _util2.default.showMenu,
	  createShortcut: _util2.default.createShortcut,
	  data: {
	    items: []
	  },
	  deleteData: function deleteData() {
	    _system2.default.delete({
	      key: 'app_data',
	      success: function success(data) {
	        console.log("handling success");
	      },
	      fail: function fail(data, code) {
	        console.log("handling fail, code=" + code);
	      }
	    });
	  },
	  saveData: function saveData(_success) {
	    _system2.default.set({
	      key: 'app_data',
	      value: (0, _stringify2.default)(this.$def.data.items),
	      success: function success(data) {
	        console.log("handling success");
	        _success();
	      },
	      fail: function fail(data, code) {
	        console.log("handling fail, code=" + code);
	      }
	    });
	  },
	  onCreate: function onCreate() {
	    var _this = this;
	
	    console.info('Application onCreate');
	    _system2.default.get({
	      key: 'app_data',
	      success: function success(data) {
	        console.log("handling success");
	        if (data) {
	          _this.$def.data.items = JSON.parse(data);
	        }
	      },
	      fail: function fail(data, code) {
	        console.log("handling fail, code=" + code);
	      }
	    });
	  },
	  onDestroy: function onDestroy() {
	    console.info('Application onDestroy');
	  }
	};
	(exports.default || module.exports).manifest = {"package":"com.application.demo","name":"quickapp-douban","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.storage"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"log"},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"Edit":{"component":"index"},"About":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#4d2517","titleBarTextColor":"#ad9a94","menu":true,"titleBarText":"快记事","pages":{"Home":{},"Edit":{},"About":{"menu":false}}}};
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(13);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = { version: '2.5.3' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 显示菜单
	 */
	function showMenu() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var router = $app_require$('@app-module/system.router');
	  var appInfo = $app_require$('@app-module/system.app').getInfo();
	  prompt.showContextMenu({
	    itemList: ['保存桌面', '关于', '取消'],
	    success: function success(ret) {
	      switch (ret.index) {
	        case 0:
	          // 保存桌面
	          createShortcut();
	          break;
	        case 1:
	          // 关于
	          router.push({
	            uri: '/About',
	            params: { name: appInfo.name, icon: appInfo.icon }
	          });
	          break;
	        case 2:
	          // 取消
	          break;
	        default:
	          prompt.showToast({ message: 'error' });
	      }
	    }
	  });
	}
	
	/**
	 * 创建桌面图标
	 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
	 */
	function createShortcut() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var shortcut = $app_require$('@app-module/system.shortcut');
	  shortcut.hasInstalled({
	    success: function success(ret) {
	      if (ret) {
	        prompt.showToast({ message: '已创建桌面图标' });
	      } else {
	        shortcut.install({
	          success: function success() {
	            prompt.showToast({ message: '成功创建桌面图标' });
	          },
	          fail: function fail(errmsg, errcode) {
	            prompt.showToast({ message: 'error: ' + errcode + '---' + errmsg });
	          }
	        });
	      }
	    }
	  });
	}
	
	exports.default = {
	  showMenu: showMenu,
	  createShortcut: createShortcut
	};

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.application.demo","name":"quickapp-douban","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.storage"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"log"},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"Edit":{"component":"index"},"About":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#4d2517","titleBarTextColor":"#ad9a94","menu":true,"titleBarText":"快记事","pages":{"Home":{},"Edit":{},"About":{"menu":false}}}};
  }
})();
//# sourceMappingURL=app.js.map