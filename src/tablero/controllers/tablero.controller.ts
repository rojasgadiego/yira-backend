import { Controller } from '@nestjs/common';
import { TableroService } from '../services/tablero.service';

@Controller('tablero')
export class TableroController {
  constructor(private readonly tableroService: TableroService) {}
}
