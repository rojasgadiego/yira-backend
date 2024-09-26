import { IsString, IsInt } from 'class-validator';

export class CreateTareaDto {
  @IsString()
  descripcion: string;

  @IsInt()
  idAsignatura: number;

  @IsString()
  fechaTermino: string;
}
