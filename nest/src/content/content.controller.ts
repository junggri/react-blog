import { Controller, Get } from "@nestjs/common";
import { ContentService } from "./content.service";
import { ConfigService } from "@nestjs/config";
import { CommentService } from "../comment/comment.service";

@Controller("content")
export class ContentController {
   constructor(
      private readonly contentService: ContentService,
      private readonly commentService: CommentService,
      private readonly config: ConfigService) {
   }

   @Get()
   find(): any {
      console.log(this.config.get("DB_HOST"));
      return this.commentService.get();
   }


}
