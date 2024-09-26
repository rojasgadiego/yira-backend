import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tablero } from '../entities/tablero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TableroService {
  constructor(
    @InjectRepository(Tablero)
    private readonly tableroRepository: Repository<Tablero>,
  ) {}
}
