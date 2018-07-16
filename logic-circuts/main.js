(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">Logic Circuts</mat-toolbar>\n<app-gate-selector></app-gate-selector>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gate_selector_gate_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gate-selector/gate-selector.component */ "./src/app/gate-selector/gate-selector.component.ts");
/* harmony import */ var _gate_gate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gate/gate.component */ "./src/app/gate/gate.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _truth_table_truth_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./truth-table/truth-table.component */ "./src/app/truth-table/truth-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _gate_selector_gate_selector_component__WEBPACK_IMPORTED_MODULE_4__["GateSelectorComponent"], _gate_gate_component__WEBPACK_IMPORTED_MODULE_5__["GateComponent"], _truth_table_truth_table_component__WEBPACK_IMPORTED_MODULE_8__["TruthTableComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gate-selector/gate-selector.component.html":
/*!************************************************************!*\
  !*** ./src/app/gate-selector/gate-selector.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"gate-selector\">\n  <mat-card-title>Basic Logic Gates</mat-card-title>\n  <mat-card-header>\n    <mat-card-title>Select a gate</mat-card-title>\n    <mat-card-subtitle>from below</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-radio-group [(ngModel)]=\"selectedGate\">\n      <mat-radio-button [value]=\"type\" *ngFor=\"let type of gateList\">\n        {{type}}\n      </mat-radio-button>\n    </mat-radio-group>\n  </mat-card-content>\n</mat-card>\n<app-gate [type]=\"selectedGate\" *ngIf=\"selectedGate\"></app-gate>\n<app-truth-table [type]=\"selectedGate\" *ngIf=\"selectedGate\"></app-truth-table>"

/***/ }),

/***/ "./src/app/gate-selector/gate-selector.component.scss":
/*!************************************************************!*\
  !*** ./src/app/gate-selector/gate-selector.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-radio-button {\n  display: block; }\n\n.gate-selector {\n  max-width: 400px; }\n"

/***/ }),

/***/ "./src/app/gate-selector/gate-selector.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gate-selector/gate-selector.component.ts ***!
  \**********************************************************/
/*! exports provided: GateSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateSelectorComponent", function() { return GateSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GateSelectorComponent = /** @class */ (function () {
    function GateSelectorComponent() {
        this.gateList = ['AND', 'OR', 'NAND', 'NOR', 'XOR', 'XNOR'];
    }
    GateSelectorComponent.prototype.ngOnInit = function () {
    };
    GateSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gate-selector',
            template: __webpack_require__(/*! ./gate-selector.component.html */ "./src/app/gate-selector/gate-selector.component.html"),
            styles: [__webpack_require__(/*! ./gate-selector.component.scss */ "./src/app/gate-selector/gate-selector.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GateSelectorComponent);
    return GateSelectorComponent;
}());



/***/ }),

/***/ "./src/app/gate.ts":
/*!*************************!*\
  !*** ./src/app/gate.ts ***!
  \*************************/
/*! exports provided: Gate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gate", function() { return Gate; });
var Gate = /** @class */ (function () {
    function Gate(type) {
        this.type = type;
    }
    Gate.prototype.evaluate = function (a, b, c, isClocked) {
        var result;
        // clock value is set, AND isClocked
        // clock value isn't set AND isn't isClocked
        if ((c && isClocked) || (!c && !isClocked)) {
            switch (this.type) {
                case 'AND':
                    result = a && b;
                    break;
                case 'OR':
                    result = a || b;
                    break;
                case 'NAND':
                    result = !(a && b);
                    break;
                case 'NOR':
                    result = !(a || b);
                    break;
                case 'XOR':
                    result = (a && !b) || (!a && b);
                    break;
                case 'XNOR':
                    result = !((a && !b) || (!a && b));
                    break;
                default:
                    result = false;
            }
            // clock value is not set AND isClocked
        }
        else if (isClocked && !c) {
            result = false;
        }
        return result;
    };
    return Gate;
}());



/***/ }),

/***/ "./src/app/gate/gate.component.html":
/*!******************************************!*\
  !*** ./src/app/gate/gate.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"gate\">\n  <mat-card-header>\n    <mat-card-title>Gate I/O</mat-card-title>\n    <mat-card-subtitle>{{type}}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-checkbox [(ngModel)]=\"isClocked\" (change)=\"chooseGate()\"> Clocked? </mat-checkbox>\n    <mat-checkbox [(ngModel)]=\"A\" (change)=\"chooseGate()\"> A </mat-checkbox>\n    <mat-checkbox [(ngModel)]=\"B\" (change)=\"chooseGate()\"> B </mat-checkbox>\n    <div *ngIf=\"isClocked\">\n      <mat-checkbox [(ngModel)]=\"C\" (change)=\"chooseGate()\"> C </mat-checkbox>\n    </div>\n  </mat-card-content>\n  <mat-card-actions align=\"end\">\n    <mat-chip-list>\n      <mat-chip color=\"primary\" selected *ngIf=\"output\">Positive</mat-chip>\n      <mat-chip color=\"warn\" selected *ngIf=\"!output\">Negative</mat-chip>\n    </mat-chip-list>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/gate/gate.component.scss":
/*!******************************************!*\
  !*** ./src/app/gate/gate.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-content mat-checkbox {\n  display: block; }\n\n.gate {\n  max-width: 400px; }\n"

/***/ }),

/***/ "./src/app/gate/gate.component.ts":
/*!****************************************!*\
  !*** ./src/app/gate/gate.component.ts ***!
  \****************************************/
/*! exports provided: GateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateComponent", function() { return GateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gate */ "./src/app/gate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GateComponent = /** @class */ (function () {
    function GateComponent() {
        this.isClocked = false;
        this.A = false;
        this.B = false;
        this.C = false;
    }
    GateComponent.prototype.ngOnChanges = function () {
        this.gate = new _gate__WEBPACK_IMPORTED_MODULE_1__["Gate"](this.type);
        this.chooseGate();
    };
    GateComponent.prototype.ngOnInit = function () {
        this.gate = new _gate__WEBPACK_IMPORTED_MODULE_1__["Gate"](this.type);
        this.chooseGate();
    };
    GateComponent.prototype.chooseGate = function () {
        if (!this.isClocked) {
            this.C = false;
        }
        this.output = this.gate.evaluate(this.A, this.B, this.C, this.isClocked);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GateComponent.prototype, "type", void 0);
    GateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gate',
            template: __webpack_require__(/*! ./gate.component.html */ "./src/app/gate/gate.component.html"),
            styles: [__webpack_require__(/*! ./gate.component.scss */ "./src/app/gate/gate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GateComponent);
    return GateComponent;
}());



/***/ }),

/***/ "./src/app/truth-table/truth-table.component.html":
/*!********************************************************!*\
  !*** ./src/app/truth-table/truth-table.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"truth-table\">\n  <mat-card-header>\n    <mat-card-title>Truth Table</mat-card-title>\n    <mat-card-subtitle>{{ type }}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"A\">\n      <mat-header-cell *matHeaderCellDef > A </mat-header-cell>\n      <mat-cell *matCellDef=\"let input\"> {{input.a}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"B\">\n      <mat-header-cell *matHeaderCellDef > B </mat-header-cell>\n      <mat-cell *matCellDef=\"let input\"> {{input.b}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"X\">\n      <mat-header-cell *matHeaderCellDef > X </mat-header-cell>\n      <mat-cell *matCellDef=\"let input\"> {{input.x}} </mat-cell>\n    </ng-container>\n  \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let input; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</mat-card>"

/***/ }),

/***/ "./src/app/truth-table/truth-table.component.scss":
/*!********************************************************!*\
  !*** ./src/app/truth-table/truth-table.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".truth-table {\n  max-width: 400px; }\n"

/***/ }),

/***/ "./src/app/truth-table/truth-table.component.ts":
/*!******************************************************!*\
  !*** ./src/app/truth-table/truth-table.component.ts ***!
  \******************************************************/
/*! exports provided: TruthTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruthTableComponent", function() { return TruthTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gate */ "./src/app/gate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TruthTableComponent = /** @class */ (function () {
    function TruthTableComponent() {
        this.truthTable = [];
        this.truthTableInputs = [];
        this.inputs = 2;
        this.displayedColumns = ['A', 'B', 'X'];
    }
    TruthTableComponent.prototype.ngOnInit = function () {
        this.generateTruthTable();
    };
    TruthTableComponent.prototype.ngOnChanges = function () {
        this.generateTruthTable();
    };
    TruthTableComponent.prototype.generateTruthTable = function () {
        this.truthTableInputs = [];
        this.truthTable = [];
        var inputArr = [];
        /**
         * Truth table AND gate example (2 inputs)
         * A | B | X
         * 0 | 0 | 0
         * 1 | 0 | 0
         * 0 | 1 | 0
         * 1 | 1 | 1
         *
         * inputs are a 2 dimensional array like this
         * [
         *  [0,0],
         *  [1,0],
         *  [0,1],
         *  [1,1]
         * ]
         */
        this.getTruthTableInputs(inputArr);
        this.generateTruthTableResult();
    };
    /**
     * loop from 1 to 0 through as many inputs as needed
     *
     * @param inputArr empty array
     */
    TruthTableComponent.prototype.getTruthTableInputs = function (inputArr) {
        for (var i = 0; i < 2; i++) {
            inputArr.push(i);
            if (inputArr.length < this.inputs) {
                this.getTruthTableInputs(inputArr);
            }
            else {
                this.truthTableInputs.push(inputArr.slice(-this.inputs));
                inputArr.pop();
            }
        }
        inputArr.pop();
    };
    /**
     * Sort truth table inputs, assign to
     * truth table with X value as the evaluated result
     */
    TruthTableComponent.prototype.generateTruthTableResult = function () {
        this.truthTableInputs.sort();
        var gate = new _gate__WEBPACK_IMPORTED_MODULE_1__["Gate"](this.type);
        for (var _i = 0, _a = this.truthTableInputs; _i < _a.length; _i++) {
            var inputs = _a[_i];
            this.truthTable.push({
                a: inputs[0],
                b: inputs[1],
                x: +gate.evaluate(inputs[0], inputs[1], null, null)
            });
            this.dataSource = this.truthTable;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TruthTableComponent.prototype, "type", void 0);
    TruthTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truth-table',
            template: __webpack_require__(/*! ./truth-table.component.html */ "./src/app/truth-table/truth-table.component.html"),
            styles: [__webpack_require__(/*! ./truth-table.component.scss */ "./src/app/truth-table/truth-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TruthTableComponent);
    return TruthTableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SuperBoges\logic-circuts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map