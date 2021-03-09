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
exports.CatsController = void 0;
var common_1 = require("@nestjs/common");
var CatsController = (function () {
    function CatsController() {
    }
    CatsController.prototype.create = function () {
        return "This action adds a new cat";
    };
    CatsController.prototype.findAll = function () {
        return "This action returns all cats";
    };
    __decorate([
        common_1.Post(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], CatsController.prototype, "create", null);
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], CatsController.prototype, "findAll", null);
    CatsController = __decorate([
        common_1.Controller("cats")
    ], CatsController);
    return CatsController;
}());
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map