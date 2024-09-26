import { Module } from '@nestjs/common';
import { AsignaturaService } from './services/asignatura.service';
import { AsignaturaController } from './controllers/asignatura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignatura } from './entities/asignatura.entity';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  controllers: [AsignaturaController],
  providers: [AsignaturaService],
  imports: [TypeOrmModule.forFeature([Asignatura]), UsuarioModule],
  exports: [AsignaturaModule, AsignaturaService],
})
export class AsignaturaModule {}
