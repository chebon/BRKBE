import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Property {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'title', nullable: false})
  title: string;

  @Column({name: 'description',  nullable: false})
  description: string;

  @Column({name: 'locality', nullable: false})
  locality: string;
}