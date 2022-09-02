"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
let transaction = new Array();
let TransactionService = class TransactionService {
    create(createTransactionDto) {
        createTransactionDto.id = String(transaction.length);
        return transaction.push(createTransactionDto);
    }
    findAll() {
        return transaction;
    }
    findOne(id) {
        return `This action returns a #${id} transaction`;
    }
    update(id, updateTransactionDto) {
        return `This action updates a #${id} transaction`;
    }
    remove(id) {
        return `This action removes a #${id} transaction`;
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)()
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map