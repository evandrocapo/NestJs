import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

let transaction: Array<CreateTransactionDto> = new Array();

@Injectable()
export class TransactionService {

  create(createTransactionDto: CreateTransactionDto) {
    createTransactionDto.id = String(transaction.length);
    return transaction.push(createTransactionDto);
  }

  findAll() {
    return transaction;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
