'use strict'

const APP = require('./app');

    function start (){
        APP.set('port', process.env.PORT || 3000);
        APP.listen(APP.get('port'),()=>{
            console.log(`Si se conecta en el puerto: '${APP.get('port')}'`);
        });
    }
    start()
    