import { Controller } from '@nestjs/common';
import { ListaService } from './lista.service';

@Controller('lista')
export class ListaController {
  constructor(private readonly listaService: ListaService) {}
}
