import { AppService } from './app.service';
import { AppController } from './app.controller';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddelware } from './conception/middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
  imports: [FlowersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddelware).forRoutes('flowers');
  }
}
