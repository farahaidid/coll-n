import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { Transaction } from './transaction.entity';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('get-all')
  async getAll(): Promise<Transaction[]> {
    return this.transactionService.getAll();
  }

  @Get(':id')
  async getOneById(@Param('id') id) {
    return await this.transactionService.getOneById(id);
  }

  @Get('by-item/:id')
  async getByItem(@Param('id') id) {
    return await this.transactionService.getByItem(id);
  }

  @Post()
  async create(@Body() payload): Promise<Transaction> {
    return this.transactionService.create(payload);
  }

  @Put(':id')
  async update(@Body() payload) {
    console.log(payload);
    return await this.transactionService.update(payload);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Transaction> {
    return this.transactionService.delete(id);
  }
}
