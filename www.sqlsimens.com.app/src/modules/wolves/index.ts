import * as Hapi from "hapi";
import { request } from "http";
import mongo from './../../MongoDB';
import wolves= require("./../../mongo-models/wolves");
//films
export function Init(server : Hapi.Server, ...params: any[]){
    console.log(`the module films is loaded`);
    
    server.route({
        path: "/wolves",
        method: "GET",
        handler: async(request: any, h: any)=>{
            let db = await mongo.db;
            let docs = await db.collection("students").find().toArray();
            return docs;
        }
    });
}