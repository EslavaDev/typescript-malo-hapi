import * as Hapi from "hapi";
import { request } from "http";
import { Film } from "./../../models";
//films
export function Init(server : Hapi.Server, ...params: any[]){
    console.log(`the module films is loaded`);
    server.route({
        path: "/films",
        method: "GET",
        handler: async(request: any, h: any)=>{
            var films = await Film.fetchAll();
            return films.toJSON();
        }
    });

    server.route({
        path: "/films/{film_id}",
        method: "GET",
        handler: async(request: any, h: any)=>{
            let id = request.params.film_id;
            let newFilm = new Film({ film_id: parseInt(id) });
            //newFilm.fetch()=>
            let foundModel = await newFilm.fetch();
            return foundModel;
        }
    });
}