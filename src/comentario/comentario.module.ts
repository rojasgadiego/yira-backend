import { Module } from '@nestjs/common';
import { ComentarioService } from './services/comentario.service';
import { ComentarioController } from './controllers/comentario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';

@Module({
  controllers: [ComentarioController],
  providers: [ComentarioService],
  imports: [TypeOrmModule.forFeature([Comentario])],
  exports: [ComentarioModule],
})
export class ComentarioModule {}
