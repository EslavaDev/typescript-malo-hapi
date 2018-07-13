import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WolfSchema = new Schema({
    _id: Number,
	name: String
});

module.exports = mongoose.model('students', WolfSchema);