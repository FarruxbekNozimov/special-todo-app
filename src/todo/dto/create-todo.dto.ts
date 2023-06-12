import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({ example: 'Dars tayyorlayman' })
  text: string;

  @ApiProperty({ example: 'true' })
  is_checked: boolean;

  @ApiProperty({ example: 'June' })
  month: string;

  @ApiProperty({ example: 'Monday' })
  week_day: string;

  @ApiProperty({ example: '14:00' })
  start_time: string;

  @ApiProperty({ example: '17:00' })
  end_time: string;
}
