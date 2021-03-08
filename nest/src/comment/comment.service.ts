import { Get, Injectable } from "@nestjs/common";

@Injectable()
export class CommentService {
   constructor(
      // @InjectConnection("comment")
      // private connection: Connection,
      // @InjectEntityManager("comment")
      // private entity: EntityManager
   ) {
   }

   @Get()
   get(): any {
      return 123;
   }
}
