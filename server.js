/* STEP 1 - requiering external resourses*/
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();
var Item = require('./models/item');
app.use(bodyParser.json());
app.use(express.static('public'));





/* STEP 2 - creating objects and constructors*/
var runServer = function (callback) {
    mongoose.connect(config.DATABASE_URL, function (err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(config.PORT, function () {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};

if (require.main === module) {
    runServer(function (err) {
        if (err) {
            console.error(err);
        }
    });
};





/* STEP 3 - api end points */
app.get('/items', function (req, res) {
    Item.find(function (err, items) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(200).json(items);
    });
});

app.post('/items', function (req, res) {
    Item.create({
        name: req.body.name
    }, function (err, item) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(201).json(item);
    });
});

app.put('/items/:id', function (req, res) {
    Item.find(function (err, items) {
        if (err) {
            return res.status(404).json({
                message: 'Item not found.'
            });
        }
        Item.update({
            _id: req.body.id
        }, {
            $set: {
                name: req.body.name
            }
        }, function () {
            res.status(201).json(items);
        });
    });
});

app.delete('/items/:id', function (req, res) {
    Item.findByIdAndRemove(req.params.id, function (err, items) {
        if (err)
            return res.status(404).json({
                message: 'Item not found.'
            });

        res.status(201).json(items);
    });
});

app.use('*', function (req, res) {
    res.status(404).json({
        message: 'Not Found'
    });
});





/* STEP 4 - server settings*/
exports.app = app;
exports.runServer = runServer;
app.listen(process.env.PORT || 8888, process.env.IP);
