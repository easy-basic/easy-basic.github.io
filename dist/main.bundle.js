webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".splitter{\n    display: block;\n    height: calc(100vh - 59px);\n    top: 59px;\n    position: absolute;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"splitter\">\n  <split direction=\"horizontal\">\n    <split-area size=\"50\">\n      <app-left-pane></app-left-pane>\n    </split-area>\n    <split-area size=\"50\">\n      <app-console-pane></app-console-pane>\n    </split-area>\n  </split>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_component_1 = __webpack_require__("./src/app/components/header/header.component.ts");
var left_pane_component_1 = __webpack_require__("./src/app/components/left-pane/left-pane.component.ts");
var angular_split_1 = __webpack_require__("./node_modules/angular-split/esm5/angular-split.js");
var ngx_monaco_editor_1 = __webpack_require__("./node_modules/ngx-monaco-editor/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var console_pane_component_1 = __webpack_require__("./src/app/components/console-pane/console-pane.component.ts");
var interpreter_service_1 = __webpack_require__("./src/app/services/interpreter.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                left_pane_component_1.LeftPaneComponent,
                console_pane_component_1.ConsolePaneComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                angular_split_1.AngularSplitModule,
                ngx_monaco_editor_1.MonacoEditorModule.forRoot(),
                forms_1.FormsModule
            ],
            providers: [
                interpreter_service_1.InterpreterService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/console-pane/console-pane.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\n    width: 100%;\n    height: 100%;\n}\n\n#container{\n    height: calc(100% - 4px);\n    margin: 2px 4px;\n}"

/***/ }),

/***/ "./src/app/components/console-pane/console-pane.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\"></div>"

/***/ }),

/***/ "./src/app/components/console-pane/console-pane.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var interpreter_service_1 = __webpack_require__("./src/app/services/interpreter.service.ts");
var ConsolePaneComponent = /** @class */ (function () {
    function ConsolePaneComponent(interpreter) {
        this.interpreter = interpreter;
    }
    ConsolePaneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.terminal = new Terminal('#container', { 'prompt': '>>> ' });
        this.interpreter.init(this.terminal);
        this.terminal.setBanner("Easybasic v" + this.interpreter.interpreter.version() + " \nCopyright 2018-19 Nauman Umer\n\n");
        this.terminal.prompt.init();
        this.terminal.addEventListener('onPrompt', function (e) {
            _this.terminal.write('REPL: Not implemented yet\n\n');
            setTimeout(function () { return _this.terminal.prompt.init(); }, 0);
        });
    };
    ConsolePaneComponent = __decorate([
        core_1.Component({
            selector: 'app-console-pane',
            template: __webpack_require__("./src/app/components/console-pane/console-pane.component.html"),
            styles: [__webpack_require__("./src/app/components/console-pane/console-pane.component.css")]
        }),
        __metadata("design:paramtypes", [interpreter_service_1.InterpreterService])
    ], ConsolePaneComponent);
    return ConsolePaneComponent;
}());
exports.ConsolePaneComponent = ConsolePaneComponent;


/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "header {\n    background-color: #E7E8EB;\n    border-bottom: 1px solid #d5d5d5;\n    height: 58px;\n    line-height: 58px;\n    padding: 0px 30px;\n}\n\n.logo {\n    font-family: 'Ubuntu Mono', monospace;\n    color: #5F819D;\n    display: inline-block;\n}\n\n.logo::before {\n    content: 'OK';\n    font-size: 18px;\n    position: relative;\n    bottom: -1px;\n    right: -2px;\n}\n\n.logo::after{\n    content: ' █'\n}\n\n.beta-badge {\n    background-color: #5294e2;\n    border-radius: 3px;\n    color: #fff;\n    padding: 5px 10px;\n    margin-left: 20px;\n    text-transform: uppercase;\n    font-size: 80%;\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"inner\">\n    <div class=\"logo\"></div>\n    <span class=\"beta-badge\">beta</span>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/components/left-pane/left-pane.component.css":
/***/ (function(module, exports) {

module.exports = ".toolbar {\n    background-color: #F5F6F7;\n    padding: 9px;\n    text-align: center;\n}\n\n:host{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%;\n    overflow: hidden;\n}"

/***/ }),

/***/ "./src/app/components/left-pane/left-pane.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n    <button>Download</button>\n    <button (click)=\"run()\">Run</button>\n</div>\n\n<ngx-monaco-editor [options]=\"editorOptions\" [(ngModel)]=\"code\" (onInit)=\"onInit($event)\"></ngx-monaco-editor>"

/***/ }),

/***/ "./src/app/components/left-pane/left-pane.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var interpreter_service_1 = __webpack_require__("./src/app/services/interpreter.service.ts");
var LeftPaneComponent = /** @class */ (function () {
    function LeftPaneComponent(interpreter) {
        this.interpreter = interpreter;
        this.editorOptions = {
            language: 'vb',
            automaticLayout: true,
            minimap: {
                enabled: false
            }
        };
        this.code = 'let x = 10+30/5*43-cos(30)\nprint x';
    }
    LeftPaneComponent.prototype.ngOnInit = function () {
    };
    LeftPaneComponent.prototype.onInit = function (editor) {
        this.editor = editor;
    };
    LeftPaneComponent.prototype.run = function () {
        this.interpreter.execute(this.code);
    };
    LeftPaneComponent = __decorate([
        core_1.Component({
            selector: 'app-left-pane',
            template: __webpack_require__("./src/app/components/left-pane/left-pane.component.html"),
            styles: [__webpack_require__("./src/app/components/left-pane/left-pane.component.css")]
        }),
        __metadata("design:paramtypes", [interpreter_service_1.InterpreterService])
    ], LeftPaneComponent);
    return LeftPaneComponent;
}());
exports.LeftPaneComponent = LeftPaneComponent;


/***/ }),

/***/ "./src/app/services/interpreter.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var InterpreterService = /** @class */ (function () {
    function InterpreterService() {
        this.isRunning = false;
    }
    InterpreterService.prototype.init = function (terminal) {
        this.interpreter = new BASIC(terminal);
    };
    InterpreterService.prototype.execute = function (code) {
        this.isRunning = true;
        this.interpreter.execute(code);
        // TODO: support async running
        this.isRunning = false;
    };
    InterpreterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], InterpreterService);
    return InterpreterService;
}());
exports.InterpreterService = InterpreterService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map