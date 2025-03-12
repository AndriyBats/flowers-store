import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  Injectable,
  CallHandler,
  NestInterceptor,
  ExecutionContext,
} from '@nestjs/common';

@Injectable()
export class LoggingIntersceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    return next.handle().pipe(tap(() => console.log('After...')));
  }
}
