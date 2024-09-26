import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lista } from '../entities/lista.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListaService {
  constructor(
    @InjectRepository(Lista)
    private readonly tableroRepository: Repository<Lista>,
  ) {}
}
