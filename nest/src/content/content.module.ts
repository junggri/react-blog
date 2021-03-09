import { Module } from "@nestjs/common";
import { ContentController } from "./content.controller";
import { ContentService } from "./content.service";
import { CommentModule } from "../comment/comment.module";

@Module({
   imports: [CommentModule],
   controllers: [ContentController],
   providers: [ContentService],
})
export class ContentModule {
}
