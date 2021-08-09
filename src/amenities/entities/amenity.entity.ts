import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Amenity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ name: "property_id", nullable: false})
  property_id: number;

  @Column({name: 'price', nullable: false})
  price: number;

  @Column({name: 'longitude', nullable: false})
  longitude: string;

  @Column({ name: "latitude", nullable: false, })
  latitude: string;

  @Column({ name: "numberofunits", nullable: false, default: 1 })
  numberofunits: number;

  @Column({ name: "floor_size", nullable: false, default: 0 })
  floor_size: number;

  @Column({ name: "financing", nullable: false, default: false})
  financing: boolean;

  @Column({ name: "bus_stop", nullable: false, default: false})
  bus_stop: boolean;

  @Column({ name: "golf_course", nullable: false, default: false})
  golf_course: boolean;

  @Column({ name: "hospital", nullable: false, default: false})
  hospital: boolean;

  @Column({ name: "school", nullable: false, default: false})
  school: boolean;

  @Column({ name: "scenic_view", nullable: false, default: false})
  scenic_view: boolean;

  @Column({ name: "balcony", nullable: false, default: false})
  balcony: boolean;

  @Column({ name: "lift", nullable: false, default: false})
  lift: boolean;

  @Column({ name: "parking", nullable: false, default: false})
  parking: boolean;

  @Column({ name: "cctv", nullable: false, default: false})
  cctv: boolean;

  @Column({ name: "electric_fence", nullable: false, default: false})
  electric_fence: boolean;

  @Column({ name: "backup_generator", nullable: false, default: false})
  backup_generator: boolean;

  @Column({ name: "fiber_internet", nullable: false, default: false})
  fiber_internet: boolean;

  @Column({ name: "ensuite", nullable: false, default: false})
  ensuite: boolean;
}

