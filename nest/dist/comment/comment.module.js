"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModule = void 0;
var common_1 = require("@nestjs/common");
var comment_controller_1 = require("./comment.controller");
var comment_service_1 = require("./comment.service");
var CommentModule = (function () {
    function CommentModule() {
    }
    CommentModule = __decorate([
        common_1.Module({
            providers: [comment_service_1.CommentService],
            controllers: [comment_controller_1.CommentController],
            exports: [comment_service_1.CommentService],
        })
    ], CommentModule);
    return CommentModule;
}());
exports.CommentModule = CommentModule;
//# sourceMappingURL=comment.module.js.map