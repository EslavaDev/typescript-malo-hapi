import * as path from "path";
import * as nconf from "nconf";

const configProvider = new nconf.Provider(<nconf.IOptions>{
    env: true,
    store:{
        type: "file",
        file: path.join(__dirname,`./../config/config.${process.env.NODE_ENV || "dev" }.json`)
    }
});

export interface IServerConfig{
    port: number;
    host: string;
    jwtTimeout: string;
}

export interface IDatabaseConfig{
    port: number;
    host: string;
    db: string;
    user: string;
    password: string;
    provider: string;
    charset: string;
}

export interface IMongoDBConfig{
    port: number;
    host: string;
}

export function getServerConfig(): IServerConfig{
    return configProvider.get("server");//mapping the JSON object to IServerCOnfig interface
}

export function getDatabaseConfig(): IDatabaseConfig{
    return configProvider.get("database");//mapping the JSON object to IDatabaseConfig interface
}

export function getMongoDBConfig(): IMongoDBConfig{
    return configProvider.get("mongoDB");//mapping the JSON object to IMongoDBConfig interface
}