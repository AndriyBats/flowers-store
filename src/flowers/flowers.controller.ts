import { AuthGuard } from 'src/conception/guard';
import { FlowersService } from './flowers.service';
import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { LoggingIntersceptor } from 'src/conception/interceptor';

@Controller('flowers')
@UseInterceptors(LoggingIntersceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    return this.flowersService.findAll();
  }
}
