import {
  Body,
  Controller,
  Get,
  Injectable,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, UserType } from './types';
import { FirebaseAuthGuard } from 'guards';

@Injectable()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('')
  public async get(): Promise<UserType[]> {
    return this.userService.get();
  }
  @Get('/:id')
  public async getByID(@Param('id') id: string): Promise<UserType> {
    console.log(id);
    return this.userService.getByID(id);
  }
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
