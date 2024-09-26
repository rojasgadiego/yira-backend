import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tablero {
  @PrimaryGeneratedColumn()
  id: number;
}
