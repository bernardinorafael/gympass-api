import { p } from '@/libs/prisma'
import { Prisma } from '@prisma/client'

import { UsersRepository } from '../users-repository'

export class PrismaUsersRepository implements UsersRepository {
  async findByEmail(email: string) {
    const user = p.user.findUnique({
      where: { email },
    })

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await p.user.create({
      data: {
        email: data.email,
        name: data.name,
        password_hash: data.password_hash,
      },
    })

    return user
  }
}
