import { Injectable } from "@nestjs/common";
import { Connection, EntityManager } from "typeorm";
import { InjectConnection, InjectEntityManager } from "@nestjs/typeorm";

@Injectable()
export class ContentService {
   constructor(
      // @InjectRepository(Content)
      // private usersRepository: Repository<Content>,
      @InjectConnection("content")
      private connection: Connection,
      @InjectEntityManager("content")
      private entityManager: EntityManager,
   ) {
   }

   async test() {
      console.log(this.entityManager);
      return await this.connection.query("show tables");
   }
}
