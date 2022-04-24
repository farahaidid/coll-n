import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  getAll(): Promise<Transaction[]> {
    return this.transactionRepository
      .createQueryBuilder('trait')
      .leftJoinAndSelect('trait.item', 'item')
      .getMany(); // SELECT * from
  }

  async getOneById(id: number): Promise<Transaction> {
    try {
      const item = await this.transactionRepository.findOneOrFail(id); // SELECT * from item WHERE item.id = id
      return item;
    } catch (err) {
      throw err;
    }
    return;
  }

  getByItem(id: string): Promise<Transaction[]> {
    return this.transactionRepository
      .createQueryBuilder('transaction')
      .leftJoinAndSelect('transaction.item', 'item')
      .where('transaction.item = :id', { id: id })
      .getMany();
  }

  create(payload: Record<string, unknown>): Promise<Transaction> {
    const newItem = this.transactionRepository.create(payload);
    return this.transactionRepository.save(newItem);
  }

  async update(payload: Record<string, unknown>): Promise<Transaction> {
    return await this.transactionRepository.save(payload);
  }

  async delete(id: number): Promise<Transaction> {
    const item = await this.getOneById(id);
    await this.transactionRepository.remove(item);
    return item;
  }
}
