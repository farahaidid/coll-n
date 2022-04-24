import { ItemService } from './item.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Item } from './item.entity';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get('get-all')
  async getAllNew(): Promise<Item[]> {
    return this.itemService.getAll();
  }

  @Get(':id')
  async getSingle(@Param('id') id) {
    return await this.itemService.getOneById(id);
  }

  @Get('by-collection/:id')
  async getByCollection(@Param('id') id) {
    return await this.itemService.getByCollection(id);
  }

  @Post()
  async create(@Body() payload): Promise<Item> {
    return this.itemService.create(payload);
  }

  @Put(':id')
  async update(@Body() payload) {
    console.log(payload);
    return await this.itemService.update(payload);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemService.delete(id);
  }
}
