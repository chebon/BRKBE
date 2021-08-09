import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lead {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({name: 'name',  nullable: false})
  name: string;

  @Column({name: 'phone_number', nullable: false})
  phone_number: string;

  @Column({name: 'message', nullable: false})
  message: string;

  @Column({ name: "email", nullable: false})
  email: string;

  @Column({ name: "property_id", nullable: false})
  property_id: string;
}

