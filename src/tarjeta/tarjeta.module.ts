import { Module } from '@nestjs/common';
import { TarjetaService } from './services/tarjeta.service';
import { TarjetaController } from './controllers/tarjeta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarjeta } from './entities/tarjeta.entity';

@Module({
  controllers: [TarjetaController],
  providers: [TarjetaService],
  imports: [TypeOrmModule.forFeature([Tarjeta])],
  exports: [TarjetaModule],
})
export class TarjetaModule {}
