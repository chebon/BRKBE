import { Injectable } from '@nestjs/common';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Agency } from './entities/agency.entity';

@Injectable()
export class AgencyService {
  constructor(@InjectRepository(Agency) private  readonly agencyRepo: Repository<Agency>) {}

  create(agency: CreateAgencyDto): Promise<Agency> {
    return this.agencyRepo.save(agency);
  }

  findAll() {
    return this.agencyRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} agency`;
  }

  update(id: number, updateAgencyDto: UpdateAgencyDto) {
    return `This action updates a #${id} agency`;
  }

  remove(id: number) {
    return `This action removes a #${id} agency`;
  }
}
