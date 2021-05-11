const express = require('express');
const morgan = require('morgan');
const config = require('../../config');

class ExpressServer {

    constructor() {

        this.app = express();
        this.port = config.port;
        this.basePathUser = `${config.api.prefix}/users`;

        this._middlewares();
        this._router();
    }

    _middlewares() {
        this.app.use(express.json());
        this.app.use(morgan('tiny'));
    }

    _router() {

        this.app.head("/status", (req, res) => {
            res.status(200).end();
        }); 
        this.app.use(this.basePathUser, require('../../router/users'));
    }
    
    async start() {
        this.app.listen(this.port, (error) =>{
            if (error){
                console.log(error);
                process.exit(1);
                return;
            }
        })
    }
}

module.exports = ExpressServer;