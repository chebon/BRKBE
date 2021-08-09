import { Test, TestingModule } from '@nestjs/testing';
import { AgencyController } from './agency.controller';
import { AgencyService } from './agency.service';

describe('AgencyController', () => {
  let controller: AgencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgencyController],
      providers: [AgencyService],
    }).compile();

    controller = module.get<AgencyController>(AgencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
