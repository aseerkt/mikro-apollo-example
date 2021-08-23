# Mikro Apollo Example

> Mikro ORM CRUD example with Apollo Server v3

## Installation

- Clone the repository

```sh
git clone https://github.com/aseerkt/mikro-apollo-example.git
```

- Install dependencies

```sh
yarn
```

## Migrations

- Before you start make sure to drop all tables including `mikro_orm_migrations` table if you have done any prior migration in the database you are making connection to.

- Create migrations file (if you are doing migration for the first time give `--initial` flag)

```sh
npx mikro-orm migration:create --initial
```

- Run latest migration.

```sh
npx mikro-orm migration:up
```

### Things to note while doing migrations

- Each migration you make is recorded in your database within `mikro_orm_migrations` table.
- Make sure to that the migration you have ran is sync with migrations records added in `mikro_orm_migrations` table.
- Deleting the migrations file you created is not a best practice.
