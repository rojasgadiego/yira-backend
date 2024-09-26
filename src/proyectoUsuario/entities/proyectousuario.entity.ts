import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProyectoUsuario {
  @PrimaryGeneratedColumn()
  id: number;
}
