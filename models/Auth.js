const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const time = require('../libs/timeLib');

const AuthSchema = new Schema({
userId:{
    type: String
},
authToken: {
    type: String
},
tokenSecret: {
    type: String
},
tokenGenerateTime: {
    type: Date,
    default: time.now()
}
})

mongoose.model('Auth', AuthSchema);