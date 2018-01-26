// require mongoose
console.log("from quote models 1")
var mongoose = require('mongoose');
// create the schema
var QuoteSchema = new mongoose.Schema({
    content: { type: String, required: [true,"Quote is required"], minlength: [4,"Minimum length 4"] },
    author: { type: String, required: [true,"Author is required"], minlength: [1,"Minimum length 1"] },
    rating: {type: Number, default: 0}
    // created_at: {type: Date, default: Date.now},
    // updated_at: {type: Date, default: Date.now}
}, {timestamps: true})

mongoose.model('Quote_instance', QuoteSchema);

console.log("from quote models 2")