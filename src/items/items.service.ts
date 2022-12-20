import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from './schemas/item.schema';
import { ItemDto } from './dto/item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}
  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id }).exec();
  }
  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }
  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }
  async update(id: string, itemDto: ItemDto): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, itemDto, { new: true });
  }
}
