import { Module } from '@nestjs/common';
import { TableroService } from './services/tablero.service';
import { TableroController } from './controllers/tablero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tablero } from './entities/tablero.entity';

@Module({
  controllers: [TableroController],
  providers: [TableroService],
  imports: [TypeOrmModule.forFeature([Tablero])],
  exports: [TableroModule],
})
export class TableroModule {}
