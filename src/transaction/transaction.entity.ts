import { Item } from 'src/item/item.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'item_id' })
  @ManyToOne(() => Item)
  item: Item;

  @Column()
  type: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  time: string;

  @Column()
  price: number;
}
