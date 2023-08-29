import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './types';

@Injectable()
@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  public async create(user: UserDto) {
    this.prismaService.user.create({
      data: user,
    });
  }
  public async update() {
    console.log('patch');
  }
  public async delete() {
    console.log('delete');
  }
}