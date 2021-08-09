import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotosService {

  constructor(@InjectRepository(Photo) private readonly photoRepo: Repository<Photo>) { }

  create(photo: CreatePhotoDto): Promise<Photo> {
    return this.photoRepo.save(photo);

  }

  findAll() {
    return this.photoRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
