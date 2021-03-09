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
exports.ContentController = void 0;
var common_1 = require("@nestjs/common");
var content_service_1 = require("./content.service");
var config_1 = require("@nestjs/config");
var comment_service_1 = require("../comment/comment.service");
var ContentController = (function () {
    function ContentController(contentService, commentService, config) {
        this.contentService = contentService;
        this.commentService = commentService;
        this.config = config;
    }
    ContentController.prototype.find = function () {
        console.log(this.config.get("DB_HOST"));
        return this.commentService.get();
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ContentController.prototype, "find", null);
    ContentController = __decorate([
        common_1.Controller("content"),
        __metadata("design:paramtypes", [content_service_1.ContentService,
            comment_service_1.CommentService,
            config_1.ConfigService])
    ], ContentController);
    return ContentController;
}());
exports.ContentController = ContentController;
//# sourceMappingURL=content.controller.js.map