import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ResponseInterceptor } from '../common/interceptors/response.interceptor';
import { SnippetsService } from './snippets.service';

@Controller('public/snippets')
@UseInterceptors(ResponseInterceptor)
export class PublicSnippetsController {
    constructor(private readonly snippetsService: SnippetsService) { }

    @Get()
    findAll() {
        return this.snippetsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.snippetsService.findOnePublic(id);
    }
}
