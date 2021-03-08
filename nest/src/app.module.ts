import { Module } from "@nestjs/common";
import { ContentModule } from "./content/content.module";
import { CommentModule } from "./comment/comment.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./content/user.entity";

@Module({
   imports: [
      ConfigModule.forRoot({
         envFilePath: ".env",
         isGlobal: true,
      }),
      TypeOrmModule.forFeature([User]),
      ContentModule,
      CommentModule,
   ],
})
export class AppModule {
}
