import { Body, Controller, Injectable, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './types';
import { FirebaseAuthGuard } from 'guards';

@Injectable()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(FirebaseAuthGuard)
  public async create(@Body('user') user: UserDto) {
    this.userService.create(user);
  }
  public async update() {
    this.userService.update();
  }
  public async delete() {
    this.userService.delete();
  }
}
