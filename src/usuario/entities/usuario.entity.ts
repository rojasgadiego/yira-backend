import { Asignatura } from 'src/asignatura/entities/asignatura.entity';
import { Proyecto } from 'src/proyecto/entities/proyecto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  fullName?: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text', {
    select: false,
  })
  password: string;

  @OneToMany(() => Asignatura, (asignatura) => asignatura.usuario, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  asignaturas?: Asignatura[];

  @OneToMany(() => Proyecto, (proyecto) => proyecto.usuarioCreador, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  proyectosCreados?: Proyecto[];
}
