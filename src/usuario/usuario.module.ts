import { Module } from '@nestjs/common';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controllers/usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [TypeOrmModule.forFeature([Usuario])],
  exports: [UsuarioService],
})
export class UsuarioModule {}
