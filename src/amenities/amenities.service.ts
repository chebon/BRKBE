import { Injectable } from '@nestjs/common';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { UpdateAmenityDto } from './dto/update-amenity.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Amenity } from './entities/amenity.entity';

@Injectable()
export class AmenitiesService {
  constructor(@InjectRepository(Amenity) private readonly amenityRepo: Repository<Amenity>) { }

  create(amenity: CreateAmenityDto): Promise <Amenity> {
    return this.amenityRepo.save(amenity);
  }

  findAll() {
    return this.amenityRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} amenity`;
  }

  update(id: number, updateAmenityDto: UpdateAmenityDto) {
    return `This action updates a #${id} amenity`;
  }

  remove(id: number) {
    return `This action removes a #${id} amenity`;
  }
}
