import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name)
    private todoModel: Model<TodoDocument>,
  ) {}

  async create(createUserDto: CreateTodoDto) {
    const res = await new this.todoModel(createUserDto).save();
    return res;
  }

  async findAll(query: string) {
    let res = await this.todoModel.find();
    return res;
  }

  async findOne(id: string) {
    return await this.todoModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateTodoDto) {
    return this.todoModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
