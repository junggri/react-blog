import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectEntityManager } from "@nestjs/typeorm";
import { Connection, EntityManager } from "typeorm";

@Injectable()
export class CommentService {
   constructor(
      @InjectConnection("comment")
      private connection: Connection,
      @InjectEntityManager("comment")
      private entityManager: EntityManager,
   ) {
   }

   async test() {
      await this.connection;

   }
}
