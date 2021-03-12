import { Controller, Get } from "@nestjs/common";
import { ContentService } from "./content.service";

@Controller("content")
export class ContentController {
   constructor(private contentSevice: ContentService) {
   }

   @Get()
   async find() {
      return await this.contentSevice.test();

   }
}
