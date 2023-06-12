import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema({ timestamps: true })
export class Todo {
  @Prop()
  text: string;

  @Prop()
  is_checked: boolean;

  @Prop()
  month: string;

  @Prop()
  week_day: string;

  @Prop()
  start_time: string;

  @Prop()
  end_time: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
