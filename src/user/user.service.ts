import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto, UserType } from './types';

@Injectable()
@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  public async get(): Promise<UserType[]> {
    const users = await this.prismaService.user.findMany({
      take: 5,
    });
    return users;
  }
  public async getByID(id: string): Promise<UserType> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  }
  public async create(user: UserDto) {
    const newUser = await this.prismaService.user.create({
      data: user,
    });
    console.log(newUser);
  }
  public async update() {
    console.log('patch');
  }
  public async delete() {
    console.log('delete');
  }
}
