import { Controller } from '@nestjs/common';
import { TarjetaService } from '../services/tarjeta.service';

@Controller('tarjeta')
export class TarjetaController {
  constructor(private readonly tarjetaService: TarjetaService) {}
}
