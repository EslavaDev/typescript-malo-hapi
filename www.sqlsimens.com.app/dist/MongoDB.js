"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const Config_1 = require("./Config");
//load database
let config = Config_1.getMongoDBConfig();
Mongoose.connect(`mongodb://${config.host}:${config.port}/school/`);
let db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log('Connection with database succeeded.');
});
exports.default = db;
//# sourceMappingURL=MongoDB.js.map