import { Body, Controller, Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './types';

@Injectable()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
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
