import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ResponseInterceptor } from '../common/interceptors/response.interceptor';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(ResponseInterceptor)
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
}
