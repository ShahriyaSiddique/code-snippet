import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { SnippetShare } from './snippet-share.entity';

@Entity()
export class Snippets {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  code: string;

  @Column()
  language: string;

  @Column({ default: false })
  isPublic: boolean;

  @ManyToOne(() => User, (user) => user.snippets)
  user: User;

  @OneToMany(() => SnippetShare, (share) => share.snippet)
  shares: SnippetShare[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}