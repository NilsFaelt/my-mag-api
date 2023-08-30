import { Body, Controller, Injectable, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './types';
import { FirebaseAuthGuard } from 'guards';

@Injectable()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(FirebaseAuthGuard)
  @Post()
  public async create(@Body('user') user: UserDto) {
    console.log('im here', user);
    return this.userService.create(user);
  }
  public async update() {
    this.userService.update();
  }
  public async delete() {
    this.userService.delete();
  }
}
