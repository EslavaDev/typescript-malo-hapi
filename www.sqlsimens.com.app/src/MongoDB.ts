import * as Mongoose from 'mongoose';
import { IMongoDBConfig, getMongoDBConfig } from "./Config";

//load database
let config : IMongoDBConfig = getMongoDBConfig();
Mongoose.connect(`mongodb://${config.host}:${config.port}/school/`);

let db: Mongoose.Connection = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log('Connection with database succeeded.');
});

export default db;

