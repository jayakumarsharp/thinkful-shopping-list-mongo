exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    (process.env.NODE_ENV === 'production' ?
        'mongodb://REPLACE-WITH-YOURS/mongo-shopping-list' :
        'mongodb://REPLACE-WITH-YOURS/mongo-shopping-list');
exports.PORT = process.env.PORT || 8080;
