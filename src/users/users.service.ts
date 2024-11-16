import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async resolveProblems(): Promise<number> {
    const users = await this.prisma.user.findMany({
      where: { hasProblems: true },
    })

    const problems = users.length

    await this.prisma.user.updateMany({
      where: { hasProblems: true },
      data: { hasProblems: false },
    })

    return problems
  }
}
