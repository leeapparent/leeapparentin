import { User } from './../../../../libs/db/src/models/user.model';
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: User,
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
  constructor(
    @InjectModel(User) private readonly model: ReturnModelType<typeof User>,
  ) {}
  @Get('option')
  option() {
    return {
      title: '表格的标题',
      column: [{ prop: 'name', label: '课程名称' }],
    };
  }
}
