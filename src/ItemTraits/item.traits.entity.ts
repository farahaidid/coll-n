import { Item } from 'src/item/item.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ItemTraits {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'item_id' })
  @ManyToOne(() => Item)
  item: Item;

  @Column()
  key: string;

  @Column()
  value: string;

  @Column()
  probability: number;
}
