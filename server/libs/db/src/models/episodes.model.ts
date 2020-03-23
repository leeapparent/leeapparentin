import { prop, modelOptions } from '@typegoose/typegoose';
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
}
