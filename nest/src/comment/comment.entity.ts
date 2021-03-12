import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
   @PrimaryGeneratedColumn()
   board: number;

   @Column({ nullable: true })
   parent: number;

   @Column()
   bgroup: number;

   @Column()
   sorts: number;

   @Column()
   depth: number;

   @Column({ length: 1000 })
   cmt: string;

   @Column({ length: 45 })
   writer: string;

   @Column({ length: 20 })
   created: string;

   @Column({ length: 200 })
   pwd: string;

   @Column({ length: 150 })
   salt: string;
}