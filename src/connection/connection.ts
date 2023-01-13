import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from "dotenv";
import path from "path";
import { Product } from "../entity/product.model";

dotenvConfig();

const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [Product],
  // entities: [path.resolve(`${__dirname}/model/*.{js,ts}`)],
  synchronize: true,
  logging: true,
  migrationsTableName: "migrations",
  migrations: ["migration/**/*.ts"],
};
export const AppDataSource = new DataSource(dataSourceOptions);
