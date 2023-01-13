import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("product")
export class Product {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public product_id: string;

  @Column()
  public productName: string;

  @Column()
  public quantity: string;

  @Column()
  public price: number;

  @Column()
  public description: string;

  @CreateDateColumn({
    select: false,
  })
  public createdAt: Date;

  @UpdateDateColumn({
    select: false,
  })
  public updatedAt: Date;
}
