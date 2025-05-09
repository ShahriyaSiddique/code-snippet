import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Snippets } from './snippets.entity';

@Entity()
export class SnippetShare {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Snippets, (snippet) => snippet.shares)
  snippet: Snippets;

  @ManyToOne(() => User)
  sharedWith: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  sharedAt: Date;
} 