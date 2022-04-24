import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/item/item.entity';
import { ItemTraits } from 'src/ItemTraits/item.traits.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item, ItemTraits])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
