import { Controller } from '@nestjs/common';
import { ListaService } from '../services/lista.service';

@Controller('lista')
export class ListaController {
  constructor(private readonly listaService: ListaService) {}
}
