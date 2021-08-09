import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Agent } from './entities/agent.entity';

@Injectable()
export class AgentsService {
  constructor(@InjectRepository(Agent) private  readonly agentRepo: Repository<Agent>) {}
  
  create(agent: CreateAgentDto): Promise<Agent> {
    return this.agentRepo.save(agent);
  }

  findAll() {
    return this.agentRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} agent`;
  }

  update(id: number, updateAgentDto: UpdateAgentDto) {
    return `This action updates a #${id} agent`;
  }

  remove(id: number) {
    return `This action removes a #${id} agent`;
  }
}
