import { Test, TestingModule } from '@nestjs/testing';
import { AsignaturaController } from './asignatura.controller';
import { AsignaturaService } from '../services/asignatura.service';

describe('AsignaturaController', () => {
  let controller: AsignaturaController;

  const mockUsersService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    findAll: jest.fn(() => {
      return {
        id: Date.now(),
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsignaturaController],
      providers: [AsignaturaService],
    })
      .overrideProvider(AsignaturaService)
      .useValue(mockUsersService)
      .compile();

    controller = module.get<AsignaturaController>(AsignaturaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all asignatura', () => {
    expect(controller.findAll);
  });

  it('should create asignatura', () => {
    expect(
      controller.create({
        titulo: 'test',
        instructor: 'test',
        sala: 'test',
        nrc: '2323',
        userEmail: 'test@test.com',
      }),
    ).toEqual({
      id: expect.any(Number),
      titulo: 'test',
      instructor: 'test',
      sala: 'test',
      nrc: '2323',
      userEmail: 'test@test.com',
    });

    expect(mockUsersService.create).toHaveBeenCalled();
  });
});
