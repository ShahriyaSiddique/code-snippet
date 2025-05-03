import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Snippets } from './entities/snippets.entity';
import { SnippetsController } from './snippets.controller';
import { SnippetsService } from './snippets.service';

@Module({
    imports: [TypeOrmModule.forFeature([Snippets])],
    controllers: [SnippetsController],
    providers: [SnippetsService],
    exports: [SnippetsService],
})
export class SnippetsModule { }
