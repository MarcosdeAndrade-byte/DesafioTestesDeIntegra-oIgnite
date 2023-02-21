import { createConnection, Connection } from "typeorm";

async function connection(){
  return await createConnection({
    username: "postgres",
    password: "docker",
    name: "fin_api",
    type: "postgres",
    host: "localhost"
});
}

export { connection };
