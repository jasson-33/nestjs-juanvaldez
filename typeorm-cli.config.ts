import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1731555264522 } from 'src/migrations/1731555264522-coffeeRefactor';
import { SchemaSync1731555759713 } from 'src/migrations/1731555759713-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5437,
  username: 'nest',
  password: 'nest',
  database: 'nest',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1731555264522, SchemaSync1731555759713],
});
