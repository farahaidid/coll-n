import { ItemTraitsModule } from './../ItemTraits/item.traits.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collection } from 'src/collection/collection.entity';
import { CollectionModule } from 'src/collection/collection.module';
import { Item } from 'src/item/item.entity';
import { ItemModule } from 'src/item/item.module';
import { ItemTraits } from 'src/ItemTraits/item.traits.entity';
import { Transaction } from 'src/transaction/transaction.entity';
import { TransactionModule } from 'src/transaction/transaction.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db',
      entities: [Collection, Item, Transaction, ItemTraits],
      synchronize: true,
    }),
    ItemModule,
    ItemTraitsModule,
    TransactionModule,
    CollectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
