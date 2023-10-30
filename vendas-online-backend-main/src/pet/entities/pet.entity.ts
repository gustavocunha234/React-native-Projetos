import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pet' })
export class PetEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'species', nullable: false })
  species: string;

  @Column({ name: 'gender', nullable: false })
  gender: string;

  @Column({ name: 'race', nullable: false })
  race: string;

  @Column({ name: 'address', nullable: false })
  address: string;

  @Column({ name: 'reason', nullable: false })
  reason: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
