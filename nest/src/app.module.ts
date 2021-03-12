import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ContentModule } from "./content/content.module";
import { Content } from "./content/content.entity";
import { Comment } from "./comment/comment.entity";
import { CommentModule } from "./comment/comment.module";

const a: TypeOrmModuleOptions = {
   name: "contents",
   type: "mysql",
   host: "localhost",
   port: 3306,
   username: "root",
   password: "wowwjd123",
   database: "test",
   entities: [Content],
   synchronize: process.env.NODE_ENV === "development",
};


@Module({
   imports: [ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
   }),
      TypeOrmModule.forRoot({
         name: "content",
         type: "mysql",
         host: "localhost",
         port: 3306,
         username: "root",
         password: "wowwjd123",
         database: "contents",
         entities: [Content],
         synchronize: process.env.NODE_ENV === "development",
      }),
      TypeOrmModule.forRoot({
         name: "comment",
         type: "mysql",
         host: "localhost",
         port: 3306,
         username: "root",
         password: "wowwjd123",
         database: "comment",
         entities: [Comment],
         synchronize: process.env.NODE_ENV === "development",
      }),
      TypeOrmModule.forFeature([Content], "content"),
      TypeOrmModule.forFeature([Comment], "comment"),
      ContentModule,
      CommentModule,
   ],
})
export class AppModule {
}
