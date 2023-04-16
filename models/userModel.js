const {Schema, model}=require('../connection');
const myschema=new Schema({
    name : String,
    email : String,
    passward : String,
    address: String
});
module.exports = model('user',myschema);