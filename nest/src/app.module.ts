import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { logger } from "./middlewares/logger.middleware";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";

// const a: TypeOrmModuleOptions = {
//   name: "contents",
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "root",
//   password: "wowwjd123",
//   database: "test",
//   entities: [User],
//   synchronize: true,
// };

// @Module({
//    imports: [
//       ConfigModule.forRoot({
//          envFilePath: ".env",
//          isGlobal: true,
//       }),
//       TypeOrmModule.forRoot(a),
//       CommentModule,
//       // ContentModule,
//    ],
//    controllers: [CatsController],
//    providers: [CatsService],
// })
@Module({
   controllers: [CatsController],
   providers: [CatsService],
})

export class AppModule implements NestModule {
   configure(comsumer: MiddlewareConsumer) {
      comsumer.apply(logger).forRoutes("*");
   }
}