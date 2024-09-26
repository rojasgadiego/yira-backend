import { Asignatura } from 'src/asignatura/entities/asignatura.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  descripcion: string;

  @Column({
    type: 'date',
    default: () => 'NOW()',
  })
  fechaIngreso?: Date;

  @Column({
    type: 'text',
  })
  fechaTermino?: string;

  @Column({ type: 'text', default: 'Creada' })
  estado?: string;

  @Column({ type: 'bool', default: 'false' })
  finalizada?: boolean;

  @ManyToOne(() => Asignatura, (Asignatura) => Asignatura.tareas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'asignaturaId' })
  asignatura: Asignatura;
}
