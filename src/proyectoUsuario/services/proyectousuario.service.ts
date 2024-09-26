import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProyectoUsuario } from '../entities/proyectousuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProyectoUsuarioService {
  constructor(
    @InjectRepository(ProyectoUsuario)
    private readonly proyectoUsuarioRepository: Repository<ProyectoUsuario>,
  ) {}
}
