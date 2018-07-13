"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WolfSchema = new Schema({
    _id: Number,
    name: String
});
module.exports = mongoose.model('students', WolfSchema);
//# sourceMappingURL=wolves.js.map