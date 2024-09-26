import { Injectable, BadRequestException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginUserDto, CreateUserDto } from '../dto/index';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/services/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private readonly JwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    try {
      const { password, name, email } = createUserDto;

      const user = await this.usuarioService.findByEmail(email);

      if (user)
        return {
          statusCode: HttpStatus.CONFLICT,
          error: 'E-Mail already exists',
        };

      await this.usuarioService.createUser({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      return { statusCode: HttpStatus.CREATED, error: null };
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { password, email } = loginUserDto;

    const user = await this.usuarioService.findByEmail(email);

    if (!user)
      return {
        statusCode: HttpStatus.UNAUTHORIZED,
        error: 'Credentials are not valid',
        user: null,
      };

    if (!bcrypt.compareSync(password, user.password))
      return {
        statusCode: HttpStatus.UNAUTHORIZED,
        error: 'Credentials are not valid',
        user: null,
      };

    delete user.password;
    return {
      statusCode: HttpStatus.OK,
      error: null,
      user: user,
      token: this.getJwtToken({ id: user.id }),
    };
  }

  private getJwtToken(payload: { id: string }) {
    const token = this.JwtService.sign(payload);
    return token;
  }
}
