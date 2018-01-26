var quotes = require('../controllers/quotes.js')
module.exports = function(app){
    // app.get('/', function (req, res) {
    //     res.render('index');
    // })
    app.get('/quotes', function (req, res) {
        quotes.show(req,res)
    })
    app.post('/quotes', function (req, res) {
        console.log("hello")
        quotes.create(req, res)
    })
    app.delete('/quotes/:id', function (req, res) {
        quotes.destroy(req, res)
    })
    // app.get('/quotes/:id', function(req, res) {
    //     quotes.get(req, res)
    // })
    app.patch('/quotes/:id', function(req, res) {
        console.log("from routes.js")
        quotes.update(req, res)
    })
    
}