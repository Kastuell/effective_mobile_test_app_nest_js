import { Controller, Post } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('resolve-problems')
  async resolveProblems() {
    return await this.usersService.resolveProblems()
  }
}
