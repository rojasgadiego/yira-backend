import { Module } from '@nestjs/common';
import { ProyectoController } from './controllers/proyecto.controller';
import { ProyectoService } from './services/proyecto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  controllers: [ProyectoController],
  providers: [ProyectoService],
  imports: [TypeOrmModule.forFeature([Proyecto]), UsuarioModule],
  exports: [ProyectoModule, ProyectoService],
})
export class ProyectoModule {}
