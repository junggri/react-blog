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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ContentService = class ContentService {
    constructor(connection, entityManager) {
        this.connection = connection;
        this.entityManager = entityManager;
    }
    async test() {
        console.log(this.entityManager);
        return await this.connection.query("show tables");
    }
};
ContentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectConnection("content")),
    __param(1, typeorm_2.InjectEntityManager("content")),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        typeorm_1.EntityManager])
], ContentService);
exports.ContentService = ContentService;
//# sourceMappingURL=content.service.js.map