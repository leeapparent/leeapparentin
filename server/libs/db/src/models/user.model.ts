import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
export class User {
  @ApiProperty({ description: '用户名', example: 'user' })
  @prop()
  username: string;

  @ApiProperty({ description: '密码', example: 'pass' })
  @prop()
  password: string;
}
