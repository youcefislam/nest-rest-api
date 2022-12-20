import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ItemDto } from './dto/item.dto';
import { ItemsService } from './items.service';
import { Item } from './schemas/item.schema';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Item> {
    return this.itemService.findOne(params.id);
  }

  @Post()
  createItems(@Body() itemDto: ItemDto): Promise<Item> {
    return this.itemService.create(itemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemService.delete(id);
  }

  @Put(':id')
  update(@Body() itemDto: ItemDto, @Param('id') id): Promise<Item> {
    return this.itemService.update(id, itemDto);
  }
}
