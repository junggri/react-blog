import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   firtName: string;

   @Column()
   lastName: string;

   @Column({ default: true })
   isActive: boolean;
}