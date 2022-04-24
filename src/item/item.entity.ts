import { Collection } from 'src/collection/collection.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'collection_id' })
  @ManyToOne(() => Collection)
  collection: Collection;

  @Column()
  link: string;

  @Column()
  image_url: string;

  @Column()
  contract: string;

  @Column()
  owner: string;

  @Column()
  last_sale: number;

  @Column()
  time_last_sale: string;

  @Column()
  listing: number;

  @Column()
  time_listing: string;
}
