import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemTraits } from './item.traits.entity';

@Injectable()
export class ItemTraitsService {
  constructor(
    @InjectRepository(ItemTraits)
    private itemTraitsRepository: Repository<ItemTraits>,
  ) {}

  getAll(): Promise<ItemTraits[]> {
    return this.itemTraitsRepository
      .createQueryBuilder('trait')
      .leftJoinAndSelect('trait.item', 'item')
      .getMany(); // SELECT * from
  }

  async getOneById(id: number): Promise<ItemTraits> {
    try {
      const item = await this.itemTraitsRepository.findOneOrFail(id); // SELECT * from item WHERE item.id = id
      return item;
    } catch (err) {
      throw err;
    }
    return;
  }

  getByItem(id: string): Promise<ItemTraits[]> {
    return this.itemTraitsRepository
      .createQueryBuilder('trait')
      .leftJoinAndSelect('trait.item', 'item')
      .where('trait.item = :id', { id: id })
      .getMany();
  }

  create(payload: Record<string, unknown>): Promise<ItemTraits> {
    const newItem = this.itemTraitsRepository.create(payload);
    return this.itemTraitsRepository.save(newItem);
  }

  async update(payload: Record<string, unknown>): Promise<ItemTraits> {
    return await this.itemTraitsRepository.save(payload);
  }

  async delete(id: number): Promise<ItemTraits> {
    const item = await this.getOneById(id);
    await this.itemTraitsRepository.remove(item);
    return item;
  }
}
