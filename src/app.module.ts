import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TransactionModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
