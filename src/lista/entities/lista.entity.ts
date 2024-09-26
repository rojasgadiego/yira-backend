import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lista {
  @PrimaryGeneratedColumn()
  id: number;
}
