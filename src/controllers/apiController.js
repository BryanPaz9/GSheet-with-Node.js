'use strict'
const {google} = require('googleapis');
const KEYS = require('../../keys.json');
const CLIENT = new google.auth.JWT(
    KEYS.client_email,
    null,
    KEYS.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

CLIENT.authorize(function(err, tokens){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Connected!!')
    }
    
});

async function newRegister( req, res){
    var params = req.body;
    const gsapi = google.sheets({version:'v4', auth: CLIENT});
    const opt = {
        spreadsheetId:'1gxu_giseLUD7D1H8Vuts2Tzs5-ecCBz44z6fDQkUkjk',
        range:'Telus!A:K'
    };
    let data = await gsapi.spreadsheets.values.get(opt);
    var toEdit = (data.data.values.length)+=1;
    if(toEdit!=0){
        let dataArray = data.data.values;
        let dataArr = [[ params.nombre,
        params.apellido,
        params.codigoEmpleado,
        params.nit,
        params.telefono,
        params.email,
        params.direccion,
        params.dpi,
        params.pago,
        params.empresa,
        params.fecha ]];
        let newDataArray = dataArr.map(function(r){
            return r;
        });
        const updateOptions = {
            spreadsheetId:'1gxu_giseLUD7D1H8Vuts2Tzs5-ecCBz44z6fDQkUkjk',
            range:'Telus!A'+toEdit,
            valueInputOption:'USER_ENTERED',
            resource:{values: newDataArray}
        };    
        let resp = await gsapi.spreadsheets.values.update(updateOptions);
        console.log(resp);
        return res.status(200).send({record:dataArr});

    }else{
        console.log("Ha ocurrido un error");
    }
}

module.exports ={
    newRegister
}
