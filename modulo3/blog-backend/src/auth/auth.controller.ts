import {
 Controller,
 Post,
 Body,
 BadRequestException,
 UnauthorizedException
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SuccessResponseDto } from '../common/dtos/response.dto';


@Controller('auth')
export class AuthController {
 constructor(private readonly authService: AuthService) {}


 @Post('login')
 async login(@Body() loginDto: LoginDto) {
   const token = await this.authService.login(loginDto);
   if (!token) {
     throw new UnauthorizedException('Invalid credentials');
   }
   return new SuccessResponseDto('Login successful', { access_token: token });
 }


 @Post('register')
 async register(@Body() createUserDto: CreateUserDto) {
   const token = await this.authService.register(createUserDto);
   if (!token) {
     throw new BadRequestException('Failed to register user');
   }
   return new SuccessResponseDto('Registration successful', { access_token: token });
 }
}


import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/user.entity';


@Injectable()
export class AuthService {
 constructor(
   private readonly usersService: UsersService,
   private readonly jwtService: JwtService,
 ) {}


 async login(loginDto: LoginDto): Promise<string | null> {
   try {
     const user: User | null = await this.usersService.findByUsername(loginDto!.username!);
     if (!user) return null;


     const isValid = await bcrypt.compare(loginDto!.password!, user!.password!);
     if (!isValid) return null;


     const payload = { id: user.id, username: user.username };
     return this.jwtService.sign(payload);
   } catch (err) {
     console.error('Unexpected login error:', err);
     return null;
   }
 }


 async register(createUserDto: CreateUserDto): Promise<string | null> {
   const user = await this.usersService.create(createUserDto);
   if (!user) return null;


   const payload = { id: user.id, email: user.username };
   return this.jwtService.sign(payload);
 }
}
