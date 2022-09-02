import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule implements NestModule {
  public configure(consumer: MiddlewareConsumer){
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        {path: 'transaction', method: RequestMethod.POST}
      )
  }
}
