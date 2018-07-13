"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi = require("hapi");
const path = require("path");
const util_1 = require("util");
const fs = require("fs");
const MongoDB_1 = require("./MongoDB");
const readDirAsync = util_1.promisify(fs.readdir);
function init(config) {
    return __awaiter(this, void 0, void 0, function* () {
        MongoDB_1.default.db;
        let server = new hapi.Server({
            port: config.port,
            host: config.host
        });
        let modulesPath = path.join(__dirname, "modules");
        let directories = yield readDirAsync(modulesPath);
        directories.forEach((dirName, index) => {
            let dirPath = path.join(modulesPath, dirName);
            if (fs.statSync(dirPath).isDirectory()) {
                require(dirPath).Init(server, config);
            }
        });
        yield server.start(); //just to start the server
    });
}
exports.init = init;
//# sourceMappingURL=Server.js.map