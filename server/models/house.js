const mongoose = require('mongoose');
const houseSchema = new mongoose.Schema({
  address :{type:String, required:true},
  sqft: {type:Number, required:true},
  baths: {type:Number,required:true, min:1},
  beds:{type:Number, required:true,min:1},
  price:{type:Number, required:true},
  location:{type:String, required:true},
  imageurl:{type:String},
  owner:{type:mongoose.Schema.Types.ObjectId, ref: 'Person'}


});
const House = mongoose.model('House',houseSchema);

module.exports =House