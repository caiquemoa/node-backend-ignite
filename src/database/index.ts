import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "database_ignite",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "database_ignite",
  synchronize: false,
  entities: ["./src/modules/cars/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DataSource initialized successfully");
  })
  .catch((error) => {
    console.log("Failed to initialize data source: ", error.message);
  });

export { AppDataSource };
