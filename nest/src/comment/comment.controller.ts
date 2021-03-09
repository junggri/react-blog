import { Controller, Get } from "@nestjs/common";

@Controller("comment")
export class CommentController {


   @Get()
   test() {
      return 1;
   }
}
