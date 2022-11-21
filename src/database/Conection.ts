import { Sequelize, Options } from "sequelize";
import logger from "../infra/logger";

export default class Conection {
    private instance: Sequelize;
    private db_name: string;
    private db_user: string;
    private db_pass: string;
    private db_config: Options;

    constructor(
        dbName: string,
        dbUser: string,
        dbPass: string,
        dbConfig: Options
    ) {
        this.db_name = dbName;
        this.db_user = dbUser;
        this.db_pass = dbPass;
        this.db_config = dbConfig;

        try {
            this.instance = new Sequelize(
                this.db_name,
                this.db_user,
                this.db_pass,
                this.db_config
            );

            logger.info(`Banco: ${this.db_name} conectado`);
        } catch (err) {
            logger.error("Erro ao tentar uma conexão com banco dados", err);
            throw err;
        }
    }
    getInstance() {
        return this.instance;
    }

    async hasConection() {
        try {
            await this.instance.authenticate();
            console.log("Banco dados conectado!");
        } catch (error) {
            console.error(
                "Erro ao tentar se conectar ao banco de dados",
                error
            );
        }
    }
}
