import { Controller, Get } from "@nestjs/common";
import { ContentService } from "./content.service";
import { CommentService } from "../comment/comment.service";
import { ConfigService } from "@nestjs/config";

@Controller("content")
export class ContentController {
   constructor(
      private readonly contentService: ContentService,
      private readonly commentService: CommentService,
      private readonly configS: ConfigService) {
   }

   @Get()
   find(): any {
      console.log(this.configS.get<string>("DB_USER"));
      return this.contentService.getAllPosts();
   }

   @Get()
   get(): any {
      return this.commentService.get();
   }

}
