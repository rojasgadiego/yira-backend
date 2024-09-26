import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TareaModule } from './tarea/tarea.module';
import { AuthModule } from './auth/auth.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { ProyectoUsuarioModule } from './proyectoUsuario/proyectousuario.module';
import { TableroModule } from './tablero/tablero.module';
import { ListaModule } from './lista/lista.module';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { ComentarioModule } from './comentario/comentario.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuarioModule,
    ProyectoUsuarioModule,
    ProyectoModule,
    TableroModule,
    AsignaturaModule,
    TareaModule,
    AuthModule,
    ListaModule,
    TarjetaModule,
    ComentarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
