"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const nconf = require("nconf");
const configProvider = new nconf.Provider({
    env: true,
    store: {
        type: "file",
        file: path.join(__dirname, `./../config/config.${process.env.NODE_ENV || "dev"}.json`)
    }
});
function getServerConfig() {
    return configProvider.get("server"); //mapping the JSON object to IServerCOnfig interface
}
exports.getServerConfig = getServerConfig;
function getDatabaseConfig() {
    return configProvider.get("database"); //mapping the JSON object to IDatabaseConfig interface
}
exports.getDatabaseConfig = getDatabaseConfig;
function getMongoDBConfig() {
    return configProvider.get("mongoDB"); //mapping the JSON object to IMongoDBConfig interface
}
exports.getMongoDBConfig = getMongoDBConfig;
//# sourceMappingURL=Config.js.map