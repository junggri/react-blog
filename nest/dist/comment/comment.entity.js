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
exports.Comment = void 0;
const typeorm_1 = require("typeorm");
let Comment = class Comment {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Comment.prototype, "board", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Comment.prototype, "parent", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Comment.prototype, "bgroup", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Comment.prototype, "sorts", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Comment.prototype, "depth", void 0);
__decorate([
    typeorm_1.Column({ length: 1000 }),
    __metadata("design:type", String)
], Comment.prototype, "cmt", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], Comment.prototype, "writer", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], Comment.prototype, "created", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], Comment.prototype, "pwd", void 0);
__decorate([
    typeorm_1.Column({ length: 150 }),
    __metadata("design:type", String)
], Comment.prototype, "salt", void 0);
Comment = __decorate([
    typeorm_1.Entity()
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comment.entity.js.map