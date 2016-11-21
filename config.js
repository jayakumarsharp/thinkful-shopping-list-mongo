exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                        'mongodb://localhost/shopping-list-dev' :
                        'mongodb://localhost/shopping-list-dev');
exports.PORT = process.env.PORT || 8888;


//alternative details for mlab
//'mongodb://USER:PASS@mlab.com:PORT/shopping-list' :