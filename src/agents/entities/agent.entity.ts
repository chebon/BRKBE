import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Agent {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({name: 'name', nullable: false})
  name: string;

  @Column({name: 'phone_number', unique: true, nullable: false})
  phone_number: string;

  @Column({ name: "email", nullable: false, unique: true,})
  email: string;

  @Column({ name: "image_url", nullable: false, unique: true,})
  image_url: string;
}
