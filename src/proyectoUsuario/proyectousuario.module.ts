import { Module } from '@nestjs/common';
import { ProyectoUsuarioController } from './controllers/proyectousuario.controller';
import { ProyectoUsuarioService } from './services/proyectousuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoUsuario } from './entities/proyectousuario.entity';

@Module({
  controllers: [ProyectoUsuarioController],
  providers: [ProyectoUsuarioService],
  imports: [TypeOrmModule.forFeature([ProyectoUsuario])],
  exports: [ProyectoUsuarioModule],
})
export class ProyectoUsuarioModule {}
