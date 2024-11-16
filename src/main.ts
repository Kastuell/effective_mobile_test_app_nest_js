import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableShutdownHooks()

  const PORT = process.env.PORT ?? 5003

  await app.listen(PORT)
}
bootstrap()
