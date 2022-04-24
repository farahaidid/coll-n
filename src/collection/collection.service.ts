import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/item/item.entity';
import { Repository } from 'typeorm';
import { Collection } from './collection.entity';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection)
    private collectionRepository: Repository<Collection>,
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  getAll(): Promise<Collection[]> {
    return this.collectionRepository.find();
  }

  async getOneById(id: number): Promise<Collection> {
    try {
      const item = await this.collectionRepository.findOneOrFail(id); // SELECT * from item WHERE item.id = id
      return item;
    } catch (err) {
      throw err;
    }
    return;
  }

  create(payload: Record<string, unknown>): Promise<Collection> {
    const newItem = this.collectionRepository.create(payload);
    return this.collectionRepository.save(newItem);
  }

  async update(payload: Record<string, unknown>): Promise<Collection> {
    return await this.collectionRepository.save(payload);
  }

  // async update(
  //   id: number,
  //   payload: Record<string, unknown>,
  // ): Promise<Collection> {
  //   return await this.collectionRepository.save(id, payload);
  // }

  async delete(id: number): Promise<any> {
    const item = await this.getOneById(id);
    await this.itemRepository.update(
      { collection: item },
      { collection: null },
    );
    return this.collectionRepository.delete({ id });
  }
}
