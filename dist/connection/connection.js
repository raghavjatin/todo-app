"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const product_model_1 = require("../entity/product.model");
(0, dotenv_1.config)();
const dataSourceOptions = {
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [product_model_1.Product],
    synchronize: true,
    logging: true,
    migrationsTableName: "migrations",
    migrations: ["migration/**/*.ts"],
};
exports.AppDataSource = new typeorm_1.DataSource(dataSourceOptions);
