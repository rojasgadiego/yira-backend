import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from '../entities/proyecto.entity';
import { Repository } from 'typeorm';

Injectable();
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,
  ) {}
}
