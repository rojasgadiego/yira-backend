import { Module } from '@nestjs/common';
import { ListaService } from './services/lista.service';
import { ListaController } from './controllers/lista.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lista } from './entities/lista.entity';

@Module({
  controllers: [ListaController],
  providers: [ListaService],
  imports: [TypeOrmModule.forFeature([Lista])],
  exports: [ListaModule],
})
export class ListaModule {}
