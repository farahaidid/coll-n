import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Collection } from './collection.entity';
import { CollectionService } from './collection.service';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get('get-all')
  async getAll(): Promise<Collection[]> {
    return this.collectionService.getAll();
  }

  @Get(':id')
  async getOneById(@Param('id') id) {
    return await this.collectionService.getOneById(id);
  }

  @Post()
  async create(@Body() payload): Promise<Collection> {
    return this.collectionService.create(payload);
  }

  @Put(':id')
  async update(@Body() payload) {
    console.log(payload);
    return await this.collectionService.update(payload);
  }

  // @Put(':id')
  // async update(@Body() payload, @Param('id') id) {
  //   console.log(payload);
  //   return await this.collectionService.update(id, payload);
  // }

  @Delete(':id')
  delete(@Param('id') id): Promise<Collection> {
    return this.collectionService.delete(id);
  }
}
