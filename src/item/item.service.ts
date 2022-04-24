import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { ItemTraits } from 'src/ItemTraits/item.traits.entity';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>, // @InjectRepository(ItemTraits) // private itemTraitsRepository: Repository<ItemTraits>,
  ) {}

  // get(id: string): Promise<ItemTraits[]> {
  //   return this.itemTraitsRepository
  //     .createQueryBuilder('item')
  //     .leftJoinAndSelect('item.transaction', 'transaction')
  //     .leftJoinAndSelect('item.trait', 'trait')
  //     .where('item.collection_id = :id', { id: id })
  //     .getMany();
  // }

  getAll(): Promise<Item[]> {
    return this.itemRepository
      .createQueryBuilder('item')
      .leftJoinAndSelect('item.collection', 'collection')
      .getMany(); // SELECT * from user
  }

  async getOneById(id: number): Promise<Item> {
    try {
      const item = await this.itemRepository.findOneOrFail(id); // SELECT * from item WHERE item.id = id
      return item;
    } catch (err) {
      throw err;
    }
    return;
  }

  getByCollection(id: string): Promise<Item[]> {
    return this.itemRepository
      .createQueryBuilder('item')
      .leftJoinAndSelect('item.collection', 'collection')
      .where('item.collection_id = :id', { id: id })
      .getMany();
  }

  create(payload: Record<string, unknown>): Promise<Item> {
    const newItem = this.itemRepository.create(payload);
    return this.itemRepository.save(newItem);
  }

  async update(payload: Record<string, unknown>): Promise<Item> {
    return await this.itemRepository.save(payload);
  }

  async delete(id: number): Promise<Item> {
    const item = await this.getOneById(id);
    await this.itemRepository.remove(item);
    return item;
  }
}
