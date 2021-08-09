import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Agency {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({name: 'name', unique: true, nullable: false})
  name: string;

  @Column({name: 'phone_number', unique: true,  nullable: false})
  phone_number: string;

  @Column({ name: "email", unique: true, nullable: false})
  email: string;

  @Column({ name: "image_url", unique: true, nullable: false})
  image_url: string;

  @Column({ name: "website", unique: true, nullable: false})
  website: string;
}
