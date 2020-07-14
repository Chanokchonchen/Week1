import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CourseController {
  @Get("time")
  getTime(): any {
    const date = new Date().toLocaleTimeString();
    return {time : date}
  }
}