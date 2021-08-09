import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lead } from './entities/lead.entity';

@Injectable()
export class LeadsService {
  constructor(@InjectRepository(Lead) private  readonly leadRepo: Repository<Lead>) {}
  create(lead: CreateLeadDto): Promise<Lead> {
    return this.leadRepo.save(lead);
  }

  findAll() {
    return this.leadRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} lead`;
  }

  update(id: number, updateLeadDto: UpdateLeadDto) {
    return `This action updates a #${id} lead`;
  }

  remove(id: number) {
    return `This action removes a #${id} lead`;
  }
}
