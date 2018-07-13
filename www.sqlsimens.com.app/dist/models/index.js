"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./../Database");
class Film extends Database_1.default.Model {
    constructor() {
        super(...arguments);
        this.idAttribute = "film_id";
    }
    get tableName() { return "film"; }
}
exports.Film = Film;
class Actor extends Database_1.default.Model {
    constructor() {
        super(...arguments);
        this.idAttribute = "actor_id";
    }
    get tableName() { return "actor"; }
}
exports.Actor = Actor;
//# sourceMappingURL=index.js.map