import { Controller, Get } from "@nestjs/common";
import { CommentService } from "./comment.service";

@Controller("comment")
export class CommentController {
   constructor(private commentService: CommentService) {
   }

   @Get()
   async a() {
      return await this.commentService.test();
   }
}
