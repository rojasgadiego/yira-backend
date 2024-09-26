import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nombre: string;

  @Column('text')
  descripcion: string;

  @CreateDateColumn()
  created_at: Date; // Creation date

  @UpdateDateColumn()
  updated_at: Date; // Last updated date

  @ManyToOne(() => Usuario, (usuario) => usuario.proyectosCreados)
  @JoinColumn()
  usuarioCreador: Usuario;
}
