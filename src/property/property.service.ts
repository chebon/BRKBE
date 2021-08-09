import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Property } from './entities/property.entity';

@Injectable()
export class PropertyService {

  constructor(@InjectRepository(Property) private  readonly propertyRepo: Repository<Property>) {}

  create(createPropertyDto: CreatePropertyDto) {
    return 'This action adds a new property';
  }

  findAll(): Promise<Property[]> {
    //return `This action returns all property`;
    return this.propertyRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
