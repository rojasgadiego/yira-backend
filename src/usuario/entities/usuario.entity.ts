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
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name?: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text')
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
