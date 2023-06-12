import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@ApiBearerAuth()
@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create todo' })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all todo' })
  @Get()
  findAll(@Query() query: any) {
    return this.todoService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one todo' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update todo by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete todo by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
