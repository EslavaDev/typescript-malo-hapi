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
const models_1 = require("./../../models");
//films
function Init(server, ...params) {
    console.log(`the module films is loaded`);
    server.route({
        path: "/actor",
        method: "GET",
        handler: (request, h) => __awaiter(this, void 0, void 0, function* () {
            var actor = yield models_1.Actor.fetchAll();
            return actor.toJSON();
        })
    });
    server.route({
        path: "/actor/{actor_id}",
        method: "GET",
        handler: (request, h) => __awaiter(this, void 0, void 0, function* () {
            let id = request.params.actor_id;
            let newActor = new models_1.Actor({ actor_id: parseInt(id) });
            //newFilm.fetch()=>
            let foundModel = yield newActor.fetch();
            return foundModel;
        })
    });
}
exports.Init = Init;
//# sourceMappingURL=index.js.map