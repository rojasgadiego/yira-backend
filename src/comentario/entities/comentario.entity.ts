import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comentario {
  @PrimaryGeneratedColumn()
  id: number;
}
