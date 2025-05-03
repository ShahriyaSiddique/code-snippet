import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Snippets } from '../../snippet/entities/snippets.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ name: 'password_hash' })
  passwordHash: string;

  @OneToMany(() => Snippets, (snippet) => snippet.user)
  snippets: Snippets[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
