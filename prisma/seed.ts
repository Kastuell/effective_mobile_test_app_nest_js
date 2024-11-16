import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const users = []

  for (let i = 0; i < 1000000; i++) {
    users.push({
      firstName: `Имя${i}`,
      lastName: `Фамилия${i}`,
      age: Math.floor(Math.random() * 100),
      gender: Math.random() > 0.5 ? 'Мужской' : 'Женский',
      hasProblems: Math.random() > 0.5,
    })
  }

  await prisma.user.createMany({ data: users })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
