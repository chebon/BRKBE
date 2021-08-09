import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({name: 'imageurl', unique: true, nullable: false})
  imageurl: string;

  @Column({name: 'position', nullable: false})
  position: number;

  @Column({ name: "property_id", nullable: false})
  property_id: number;
}
