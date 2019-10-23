'use strict'

const APP = require('./app');

    function start (){
        APP.set('port', process.env.PORT || 3000);
        APP.listen(APP.get('port'),()=>{
            console.log(`Server is running in port: '${APP.get('port')}'`);
        });
    }
    start()
    