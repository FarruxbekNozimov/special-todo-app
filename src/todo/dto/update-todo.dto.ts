import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiProperty({ example: 'Dars tayyorlayman' })
  text?: string;

  @ApiProperty({ example: 'false' })
  is_checked?: boolean;

  @ApiProperty({ example: 'July' })
  month?: string;

  @ApiProperty({ example: 'Wednesday' })
  week_day?: string;

  @ApiProperty({ example: '8:00' })
  start_time?: string;

  @ApiProperty({ example: '10:00' })
  end_time?: string;
}
