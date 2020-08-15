import { Course } from './../../../../libs/db/src/models/course.model';
import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
@Crud({
  model: Course,
})
@Controller('courses')
@ApiTags('课程')
export class CoursesController {
  constructor(
    @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>,
  ) {}
  @Get('option')
  option() {
    return {
      title: '表格的标题',
      searchMenuSpan: 8,
      column: [
        {
          prop: 'name',
          label: '课程名称',
          sortable: true,
          search: true,
          regex: true,
          row:true
        },
        { prop: 'imgUrl', label: '课时封面',type: 'upload', width: 120, listType: 'picture-img', row: true, action: 'upload'listType:'picture-img',action:'upload', tip: '只能上传jpg/png用户头像，且不超过500kb', },
      ],
    };
  }
}
