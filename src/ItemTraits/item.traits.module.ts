import { Module } from '@nestjs/common';
import { ItemTraitsController } from './item.traits.controller';
import { ItemTraitsService } from './item.traits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTraits } from './item.traits.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemTraits])],
  controllers: [ItemTraitsController],
  providers: [ItemTraitsService],
})
export class ItemTraitsModule {}
