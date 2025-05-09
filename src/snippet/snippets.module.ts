import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Snippets } from './entities/snippets.entity';
import { SnippetsController } from './snippets.controller';
import { SnippetsService } from './snippets.service';
import { SnippetShare } from './entities/snippet-share.entity';
import { User } from '../users/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Snippets, SnippetShare, User])
    ],
    controllers: [SnippetsController],
    providers: [SnippetsService],
    exports: [SnippetsService],
})
export class SnippetsModule { }
