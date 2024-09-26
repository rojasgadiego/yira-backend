import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarjeta {
  @PrimaryGeneratedColumn()
  id: number;
}
