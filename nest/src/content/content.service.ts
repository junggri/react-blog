import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectEntityManager } from "@nestjs/typeorm";
import { Connection, EntityManager } from "typeorm";

@Injectable()
export class ContentService {
   constructor(
      @InjectConnection("contents")
      private connection: Connection,
      @InjectEntityManager("contents")
      private entityManager: EntityManager,
   ) {
   }

   async getAllPosts() {
      return this.connection.query("show tables");
   }
}
