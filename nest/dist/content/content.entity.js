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
exports.Content = void 0;
const typeorm_1 = require("typeorm");
let Content = class Content {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Content.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 11,
    }),
    __metadata("design:type", String)
], Content.prototype, "topic", void 0);
__decorate([
    typeorm_1.Column({ length: 50 }),
    __metadata("design:type", String)
], Content.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], Content.prototype, "content_name", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], Content.prototype, "detail", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        length: 25,
    }),
    __metadata("design:type", String)
], Content.prototype, "thumbnail", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Content.prototype, "file", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], Content.prototype, "created", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], Content.prototype, "modified", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], Content.prototype, "kindofPosts", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Content.prototype, "date", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        default: 0,
    }),
    __metadata("design:type", Number)
], Content.prototype, "comment", void 0);
Content = __decorate([
    typeorm_1.Entity()
], Content);
exports.Content = Content;
//# sourceMappingURL=content.entity.js.map