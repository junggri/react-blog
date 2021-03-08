import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
   @PrimaryGeneratedColumn()
   board: string;

   @Column()
   parent: number;

   @Column()
   bgroup: number;

   @Column()
   sorts: number;

   @Column()
   depth: number;

   @Column()
   cmt: string;

   @Column()
   writer: string;

   @Column()
   created: string;

   @Column()
   pwd: string;

   @Column()
   salt: string;
}