import { Module } from "@nestjs/common";
import { ContentController } from "./content.controller";
import { ContentService } from "./content.service";
import { CommentModule } from "../comment/comment.module";
import { ConfigModule } from "@nestjs/config";

@Module({
   imports: [ConfigModule, CommentModule],
   controllers: [ContentController],
   providers: [ContentService],
   exports: [ContentService],
})
export class ContentModule {
}
