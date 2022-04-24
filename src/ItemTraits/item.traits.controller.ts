import { ItemTraitsService } from './item.traits.service';
import {
  Controller,
  Get,
  Param,
  Delete,
  Put,
  Post,
  Body,
} from '@nestjs/common';
import { ItemTraits } from './item.traits.entity';

@Controller('item-traits')
export class ItemTraitsController {
  constructor(private readonly itemTraitsService: ItemTraitsService) {}

  @Get('get-all')
  async getAll(): Promise<ItemTraits[]> {
    return this.itemTraitsService.getAll();
  }

  @Get(':id')
  async getSingle(@Param('id') id) {
    return await this.itemTraitsService.getOneById(id);
  }

  @Get('by-item/:id')
  async getByItem(@Param('id') id) {
    return await this.itemTraitsService.getByItem(id);
  }

  @Post()
  async create(@Body() payload): Promise<ItemTraits> {
    return this.itemTraitsService.create(payload);
  }

  @Put(':id')
  async update(@Body() payload) {
    console.log(payload);
    return await this.itemTraitsService.update(payload);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<ItemTraits> {
    return this.itemTraitsService.delete(id);
  }

  // @Get(':id')
  // async getAllNew(@Param('id') id): Promise<ItemTraits[]> {
  //   return this.itemTraitsService.get(id);
  // }
}
