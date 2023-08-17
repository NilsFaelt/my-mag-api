import { IsIn, IsNotEmpty } from 'class-validator';

export class ChooseEntityDto {
  @IsNotEmpty()
  @IsIn(['articlePrimary', 'user'])
  entity: 'articlePrimary' | 'user';
}
