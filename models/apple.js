var mongoose = require('mongoose')
	, Schema = mongoose.Schema

/**
 * Apple DB Scheme
 */

var AppleSchema = new Schema({
 brand: String,
 monitor: String,
 harddrive: String,
 memory: String,
 price: String,

})

mongoose.model('Apple',AppleSchema)



