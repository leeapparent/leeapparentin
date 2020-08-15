import { Course } from './course.model';
import { prop, modelOptions, Ref } from '@typegoose/typegoose';
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Episodes {
  @prop()
  name: string;

  @prop()
  file: string;

  @prop({ref:'Course'})
  course: Ref<Course>
}
