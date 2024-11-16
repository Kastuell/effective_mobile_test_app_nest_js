В качестве orm была использована [prisma](https://www.prisma.io/).

Для форматирования файлов с кодом был использован [prettier](https://prettier.io/).

.env файлы уже содержатся в репозитории

## Начало

Уставновите зависимости с помощью команды:

```bash

npm i

```

Далее нужно применить миграции базы данных и заполнить её при помощи seeder для этого используем следующие команды( перед этим создаём базу данных в pg ):

```bash

npm run db
npm run seed


```

Теперь мы можем запустить наше приложение следующей командой:

```bash

npm run start:dev


```

Приложение запустятся на следующем адресе:

- [app1](http://localhost:5003) - nestjs resolve users problems;