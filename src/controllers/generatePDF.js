// playground requires you to assign document definition to a variable called dd
var fecha = '2019-03-05';
var nombre = 'Bryan Gerardo';
var apellido = 'Ascuc de Paz';
var plan = 'Lunes y Miércoles';
var cuota = 550;
var pagos = 3;
var cuenta = 'Wix';
var empresa = 'Telus International';
var employeeId = '100101011';
var mail = 'bryger@gmail.com';
var nit = 78942156;
var direccion = 'Colonia Santa Faz, Chinautla, Guatemala'
var dpi = 2996039540101;
var fechaN = '1999-06-10';
var ciclo = 1;
var personaE = 'Rodolfo Ascuc'
var relacion = 'Padre';
var telefono = '6845-8899';
var dd = {
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
				{text: nombre+' '+apellido, fontSize: 13, bold: true},
				{text: ' con número de DPI ', fontSize:13},
				{text: dpi+' ', fontSize:13, bold:true},
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
	
}