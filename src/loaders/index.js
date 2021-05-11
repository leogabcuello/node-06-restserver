const ExpressServer = require('./server/expressServer');
const config = require('../config');

module.exports = async () => {
    
    const server = new ExpressServer();
    console.log('Express loader');

    server.start();
    console.log(`server listening on port ${config.port}`);

}