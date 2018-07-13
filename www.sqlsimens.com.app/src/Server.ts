import * as hapi from "hapi";
import * as path  from "path";
import { promisify, format  } from "util";
import * as fs from "fs";
import mongo from './MongoDB';
import { IServerConfig } from "./Config";
const readDirAsync = promisify(fs.readdir);

export  async function init(config : IServerConfig) {
    mongo.db;
    let server = new hapi.Server({
        port: config.port, 
        host: config.host
    });
    let modulesPath : string = path.join(__dirname, "modules");
    let directories : string[] =  await readDirAsync(modulesPath);
    directories.forEach((dirName: string, index: number)=>{
        let dirPath = path.join(modulesPath,dirName);
            if(fs.statSync(dirPath).isDirectory()){
                require(dirPath).Init(server, config);
            }
    })
    await server.start();//just to start the server
}
