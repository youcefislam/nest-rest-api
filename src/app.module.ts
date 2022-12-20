import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    ItemsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATA_BASE_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
