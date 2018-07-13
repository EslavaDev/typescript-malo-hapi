"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const Knex = require("knex");
const Bookshelf = require("bookshelf");
let config = Config_1.getDatabaseConfig();
let conn = Knex({
    client: config.provider,
    connection: {
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.db,
        charset: config.charset,
        port: config.port
    }
});
let Orm = Bookshelf(conn);
exports.default = Orm;
//# sourceMappingURL=Database.js.map