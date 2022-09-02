import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
export declare class TransactionService {
    create(createTransactionDto: CreateTransactionDto): number;
    findAll(): CreateTransactionDto[];
    findOne(id: number): string;
    update(id: number, updateTransactionDto: UpdateTransactionDto): string;
    remove(id: number): string;
}
