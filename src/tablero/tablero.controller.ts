import { Controller } from '@nestjs/common';
import { TableroService } from './tablero.service';

@Controller('tablero')
export class TableroController {
  constructor(private readonly tableroService: TableroService) {}
}
