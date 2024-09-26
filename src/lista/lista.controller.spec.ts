import { Test, TestingModule } from '@nestjs/testing';
import { ListaController } from './lista.controller';
import { ListaService } from './lista.service';

describe('ListaController', () => {
  let controller: ListaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaController],
      providers: [ListaService],
    }).compile();

    controller = module.get<ListaController>(ListaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
