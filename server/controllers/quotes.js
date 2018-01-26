// var moment = require('moment');

var mongoose = require('mongoose');

var Quote = mongoose.model('Quote_instance');

module.exports = {
    show: function (req, res) {
        Quote.find({}).sort({rating: 'desc'}).exec(function(err, quotes) {
        // Quote.find({}, function (err, quotes) {
            console.log("from sorting asc")
            res.json(quotes);
        })
    },
    create: function (req, res) {
        console.log(req.body);
        var quote = new Quote({ content: req.body.content, author: req.body.author });
        quote.save(function (err) {
            if (err) {
                console.log(err);
                console.log('something went wrong');
                console.log("Errors", err.errors);
                res.json({message:"error", data: err});
            } else {
                console.log('successfully added a Quote!');
                res.json({message:"success"})
            }
        })
        // This is where we would add the Task from req.body to the database.
    },
    destroy: function (req, res) {
        Quote.findByIdAndRemove(req.params.id , function (err) {
            if (err) {
                console.log("something went wrong")
                res.json({message:"error"})
            } else {
                console.log("task destroyed ")
                console.log("this is the destroy id", req.params.id)
                res.json({message:"success"})
            }
        })
    },
    // get: function (req, res) {
    //     Quote.findOne({ "_id": req.params.id }, function (err, quote) {
    //         console.log("Edit id is", req.params.id)
    //         console.log(quote)
    //         res.json({message:"success", data: quote});
    //     })
    // },
    update: function (req, res) {
        Quote.update({ "_id": req.params.id }, { $inc: {rating:req.body.rating} }, function (err, task) {
            if (err) {
                console.log("something went wrong")
                res.json({ message: "error", data: err.errors });
            } else {
                console.log("this is the edited id", req.params.id)
                // res.redirect('/quotes/' + req.params.id);
                res.json({ message: "success"});
            }
        })
    }

}