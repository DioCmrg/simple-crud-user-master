import winston from "winston";
import path from "path";

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(), // vai salvar qunado vou q deu o erro dia e hora
        winston.format.json(), // salvar a estrutura em json
        winston.format.errors({ stack: true }) // vai mostrar o erro
    ),
    transports: [
        // onde vao ser salvos os logger
        new winston.transports.File({
            filename: path.resolve("src", "infra", "logs", "logs.log"),
        }),
    ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple(),
        })
    );
}

export default logger;
