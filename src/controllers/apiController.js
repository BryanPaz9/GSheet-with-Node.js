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
        console.log('Connected With Google Sheets!!')
    }
    
});


async function newRegister( req, res){
    var params = req.body;
    const gsapi = google.sheets({version:'v4', auth: CLIENT});
    const opt = {
        spreadsheetId:'1gxu_giseLUD7D1H8Vuts2Tzs5-ecCBz44z6fDQkUkjk',
        range:'Telus!A:O'
    };
    try {
        let data = await gsapi.spreadsheets.values.get(opt);
        var toEdit = (data.data.values.length)+=1;
        if(params.name && params.lastName && params.born && params.employeeId && params.nit && params.phone && params.mail && 
            params.address && params.dpi && params.payment && params.company && params.date && params.account && params.course
            && params.attendant && params.relationship && params.cycle && params.installement && toEdit>0){
            let dataArr = [[ params.name,
            params.lastName,
            params.born,
            params.employeeId,
            params.nit,
            params.phone,
            params.mail,
            params.address,
            params.dpi,
            params.course,
            params.payment,
            params.installement,
            params.company,
            params.date, 
            params.account,
            params.attendant,
            params.relationship,
            params.cycle
            ]];
            let newDataArray = dataArr.map(function(makeRecord){
                return makeRecord;
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
            console.log("Complete all fields");
            return res.status(500).send({message:'Complete all fields'});
        }        
    } catch (error) {
        return res.status(500).send({error});
    }
    /*var toPrint = {
        content: [' ',' ',' ',' ',
            {
                text: 'Guatemala '+fecha,
                fontSize: 14
            },' ',' ',' ',' ',
            {
                alignment: 'justify',
                text: [
                    {text:'Señores Contabilidad: \n\n\n\n',fontSize: 14, bold: true},
                    {text:'Por este medio, YO ', fontSize: 13},
                    {text: params.name+' '+params.lastName, fontSize: 13, bold: true},
                    {text: ' con número de DPI ', fontSize:13},
                    {text: params.dpi+' ', fontSize:13, bold:true},
                    {text: 'autorizo a mi empleador a descontar de mi remuneración por concepto de estudios en cursos de programación de Nabenik, la cantidad abajo desglosada. Entiendo que mi empleador actúa como intermediario '+
                    'en la relación con Nabenik y mi persona, sé que la totalidad de los descuentos realizados son translados a Nabenik. También es de mi conocimiento que si, por algún motivo me retiro durante el ciclo asignado, no podré'+
                    'solicitar reintegro ni cancelación en planilla, ya que soy responsable por el pago total del ciclo. \n\n\n', fontSize: 13}
                ]
            },
            {
                alignment: 'justify',
                columns: [
                    {
                        width: 250,
                        text: 'Plan: '+ plan, fontSize:13
                    },
                    {
                        width: 250,
                        text:'Número de pagos: ' +pagos, fontSize:13
                    },
                ]
            },' ',
            {
                alignment: 'justify',
                columns: [
                    {
                        width: 250,
                        text: 'Cuenta: '+ cuenta, fontSize:13
                    },
                    {
                        width: 250,
                        text: 'Empresa: '+empresa, fontSize:13
                    },
                ]
            },' ',
            {
                alignment: 'justify',
                columns: [
                    {
                        width: 250,
                        text: 'Código Empleado: '+ employeeId, fontSize:13
                    },
                    {
                        width: 250,
                        text:'Fecha de nacimiento: '+fechaN, fontSize:13
                    },
                ]
            },' ',
            {
                alignment: 'justify',
                columns: [
                    {
                        width: 250,
                        text: 'Mail: '+ mail, fontSize:13
                    },
                    {
                        width: 250,
                        text: 'NIT: '+nit, fontSize:13
                    },
                ]
            },' ',
            {
                alignment: 'justify',
                columns: [
                    {
                        width: 400,
                        text: 'Dirección: '+ direccion, fontSize:13
                    },
                ]
            },' ',' ',
            {text: 'Datos de emergencia:', style: 'header'},' ',
            {
                
                columns: [
                    {
                        width: 250,
                        text: 'Persona encargada: '+ personaE, fontSize:13
                    },
                    {
                        width: 250,
                        text: 'Relación: '+relacion, fontSize:13
                    },
                ]
            },' ',
            {
                alignment: 'justify',
                columns: [
                    {
                        width: 250,
                        text: 'Telefono: '+ telefono, fontSize:13
                    },
                    
                ]
            },' ',' ',' ',
            {
                style: 'tableExample',
                table: {
                    widths: [180, 150, 150],
                    body: [
                        ['Cuota mensual', 'Número de cuotas', 'Ciclo'],
                        [{text: 'Q '+ cuota+'.00', italics: true, color: 'gray'}, {text: pagos, italics: true, color: 'gray'}, {text: ciclo, italics: true, color: 'gray'}]
                    ]
                }
            },' ',' ',' ',
            {
                aligment: 'justify',
                columns:[
                    {
                        width: 250,
                        text: 'Firma: '+'________________________', fontSize:13
                    },    
                ]
            },' ',' ',
    
            {
                text: 'Recuerda llevar esta constancia firmada el primer día de clases.',
                style: ['quote', 'small']
            }
        ],
        styles: {
            text:{
                fontSize:13
            },
            header: {
                fontSize: 14,
                bold: true
            },
            bigger: {
                fontSize: 15,
                italics: true
            },
            quote: {
                italics: true
            },
            small: {
                fontSize: 8
            }
        },
        defaultStyle: {
            columnGap: 20
        }
        
    }*/

}

async function getRecords(req, res){
    const gsapi = google.sheets({version:'v4', auth: CLIENT});
    const opt ={
        spreadsheetId:'1gxu_giseLUD7D1H8Vuts2Tzs5-ecCBz44z6fDQkUkjk',
        range:'Telus!A:O'
    };
    let data = await gsapi.spreadsheets.values.get(opt);
    const resp = data.data.values;
    return res.status(200).send({records:resp})
}

module.exports ={
    newRegister,
    getRecords
}
