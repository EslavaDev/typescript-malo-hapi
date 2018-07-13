import Bookshelf from "./../Database";

export class Film extends Bookshelf.Model<any>{
    idAttribute = "film_id";
    get tableName(){ return "film"; }
}

export class Actor extends Bookshelf.Model<any>{
    idAttribute = "actor_id";
    get tableName(){ return "actor"; }
}