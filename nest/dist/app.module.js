"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const content_module_1 = require("./content/content.module");
const content_entity_1 = require("./content/content.entity");
const comment_entity_1 = require("./comment/comment.entity");
const comment_module_1 = require("./comment/comment.module");
const a = {
    name: "contents",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "wowwjd123",
    database: "test",
    entities: [content_entity_1.Content],
    synchronize: process.env.NODE_ENV === "development",
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [config_1.ConfigModule.forRoot({
                envFilePath: ".env",
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                name: "content",
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "wowwjd123",
                database: "contents",
                entities: [content_entity_1.Content],
                synchronize: process.env.NODE_ENV === "development",
            }),
            typeorm_1.TypeOrmModule.forRoot({
                name: "comment",
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "wowwjd123",
                database: "comment",
                entities: [comment_entity_1.Comment],
                synchronize: process.env.NODE_ENV === "development",
            }),
            typeorm_1.TypeOrmModule.forFeature([content_entity_1.Content], "content"),
            typeorm_1.TypeOrmModule.forFeature([comment_entity_1.Comment], "comment"),
            content_module_1.ContentModule,
            comment_module_1.CommentModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map