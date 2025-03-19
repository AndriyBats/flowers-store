import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddelware } from './conception/middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    UserModule,
    FlowersModule,
    MongooseModule.forRoot(
      'mongodb+srv://abats333:@cluster0.3aqnf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddelware).forRoutes('flowers');
  }
}
