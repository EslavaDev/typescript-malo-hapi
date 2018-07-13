import * as Hapi from "hapi";
import { request } from "http";
import { Actor } from "./../../models";
//films
export function Init(server : Hapi.Server, ...params: any[]){
    console.log(`the module films is loaded`);
    server.route({
        path: "/actor",
        method: "GET",
        handler: async(request: any, h: any)=>{
            var actor = await Actor.fetchAll();
            return actor.toJSON();
        }
    });

    server.route({
        path: "/actor/{actor_id}",
        method: "GET",
        handler: async(request: any, h: any)=>{
            let id = request.params.actor_id;
            let newActor = new Actor({ actor_id: parseInt(id) });
            //newFilm.fetch()=>
            let foundModel = await newActor.fetch();
            return foundModel;
        }
    });
}