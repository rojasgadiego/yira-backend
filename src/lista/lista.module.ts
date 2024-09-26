import { Module } from '@nestjs/common';
import { ListaService } from './lista.service';
import { ListaController } from './lista.controller';

@Module({
  controllers: [ListaController],
  providers: [ListaService],
})
export class ListaModule {}
