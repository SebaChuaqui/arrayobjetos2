document.write('<h1>Estadísticas Centro Médico Ñuñoa</h1>');

var radiologia = [
    { Hora: '11:00', Especialista: 'IGNACIO SCHULZ', Paciente: 'FRANCISCA ROJAS', Rut: '9878782-1', Previsión: 'FONASA' },
    { Hora: '11:30', Especialista: 'FEDERICO SUBERCASEAUX', Paciente: 'PAMELA ESTRADA', Rut: '15345241-3', Previsión: 'ISAPRE' },
    { Hora: '15:00', Especialista: 'FERNANDO WURTHZ', Paciente: 'ARMANDO LUNA', Rut: '16445345-9', Previsión: 'ISAPRE' },
    { Hora: '15:30', Especialista: 'ANA MARIA GODOY', Paciente: 'MANUEL GODOY', Rut: '17666419-0', Previsión: 'FONASA' },
    { Hora: '16:00', Especialista: 'PATRICIA SUAZO', Paciente: 'RAMON ULLOA', Rut: '14989389-K', Previsión: 'FONASA' },
];

var traumatologia = [
    { Hora: '8:00', Especialista: 'MARIA PAZ ALTUZARRA', Paciente: 'PAULA SANCHEZ', Rut: '15554774-5', Previsión: 'FONASA' },
    { Hora: '10:00', Especialista: 'RAUL ARAYA', Paciente: 'ANGÉLICA NAVAS', Rut: '15444147-9', Previsión: 'ISAPRE' },
    { Hora: '10:30', Especialista: 'MARIA ARRIAGADA', Paciente: 'ANA KLAPP', Rut: '17879423-9', Previsión: 'ISAPRE' },
    { Hora: '11:00', Especialista: 'ALEJANDRO BADILLA', Paciente: 'FELIPE MARDONES', Rut: '1547423-6', Previsión: 'ISAPRE' },
    { Hora: '11:30', Especialista: 'CECILIA BUDNIK', Paciente: 'DIEGO MARRE', Rut: '16554741-K', Previsión: 'FONASA' },
    { Hora: '12:00', Especialista: 'ARTURO CAVAGNARO', Paciente: 'CECILIA MENDEZ', Rut: '9747535-8', Previsión: 'ISAPRE' },
    { Hora: '12:30', Especialista: 'ANDRES KANACRI', Paciente: 'MARCIAL SUAZO', Rut: '11254785-5', Previsión: 'ISAPRE' },
];

var dental = [
    { Hora: '8:30', Especialista: 'ANDREA ZUÑIGA', Paciente: 'MARCELA RETAMAL', Rut: '11123425-6', Previsión: 'ISAPRE' },
    { Hora: '11:00', Especialista: 'MARIA PIA ZAÑARTU', Paciente: 'ANGEL MUÑOZ', Rut: '9878789-2', Previsión: 'ISAPRE' },
    { Hora: '11:30', Especialista: 'SCARLETT WITTING', Paciente: 'MARIO KAST', Rut: '7998789-5', Previsión: 'FONASA' },
    { Hora: '13:00', Especialista: 'FRANCISCO VON TEUBER', Paciente: 'KARIN FERNANDEZ', Rut: '18887662-K', Previsión: 'FONASA' },
    { Hora: '13:30', Especialista: 'EDUARDO VIÑUELA', Paciente: 'HUGO SANCHEZ', Rut: '17665461-4', Previsión: 'FONASA' },
    { Hora: '14:00', Especialista: 'RAQUEL VILLASECA', Paciente: 'ANA SEPULVEDA', Rut: '14441281-0', Previsión: 'ISAPRE' },
];

// 1. AGREGA HORAS AL ARREGLO DE TRAUMATOLOGÍA:

traumatologia.push(
    { Hora: '09:00', Especialista: 'RENE POBLETE', Paciente: 'ANA GELLONA', Rut: '13123329-7', Previsión: 'ISAPRE' },
    { Hora: '09:30', Especialista: 'MARIA SOLAR', Paciente: 'RAMIRO ANDRADE', Rut: '12221451-K', Previsión: 'FONASA' },
    { Hora: '10:00', Especialista: 'RAUL LOYOLA', Paciente: 'CARMEN ISLA', Rut: '10112348-3', Previsión: 'ISAPRE' },
    { Hora: '10:30', Especialista: 'ANTONIO LARENAS', Paciente: 'PABLO LOAYZA', Rut: '13453234-1', Previsión: 'ISAPRE' },
    { Hora: '12:00', Especialista: 'MATIAS ARAVENA', Paciente: 'SUSANA POBLETE', Rut: '14345656-6', Previsión: 'FONASA' },
);

// 2. ELIMINAR EL PRIMER Y EL ÚLTIMO ELEMENTO DEL ARREGLO DE RADIOLOGÍA

radiologia.shift(); // ELIMINA EL PRIMERO
radiologia.pop(); // ELIMINA EL ÚLTIMO

// 3. IMPRIMIR EN LA PÁGINA HTML, MEDIANTE document.write Y/O LAS FUNCIONES QUE ESTIME
// CONVENIENTE, LA LISTA DE CONSULTAS MÉDICAS DE DENTAL. SIN EMBARGO, DEBE HACERLO
// SEPARANDO POR UN GUION CADA DATO DESPLEGADO Y CADA FILA DE INFORMACIÓN DEBE ESTAR
// SEPARADA POR UN PÁRRAFO.

document.write(`<h4>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h4>`);
document.write(`<h2>Lista de Consultas Médicas Dental</h2>`);
dental.forEach(function(dentales){
document.write(`<p>${dentales.Hora} - ${dentales.Especialista} - ${dentales.Paciente} - ${dentales.Rut} - ${dentales.Previsión}</p>`);
});
document.write(`<h4>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h4>`);


// 4. Imprimir un listado total de todos los pacientes que se atendieron en el centro
// médico. Para esto, deberá unir todos los nombres de pacientes e imprimir uno por
// cada párrafo.

document.write(`<h2>Lista de todos los pacientes del centro médico</h2>`);

// Método concat() para unir los tres arreglos en uno
let pacientes = radiologia.concat(traumatologia,dental);

// Método forEach() para imprimir en la página una lista con cada paciente del 
// arreglo en una fila cada uno
pacientes.forEach(function(usuarios){
    document.write(`<p>${usuarios.Paciente}</p>`);
});

document.write(`<h4>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h4>`);

// CANTIDAD DE ATENCIONES

document.write(`<h2>Cantidad de Atenciones Radiología: ${radiologia.length}</h2>`);
document.write(`<h2>Cantidad de Atenciones Traumatología: ${traumatologia.length}</h2>`);
document.write(`<h2>Cantidad de Atenciones Dentales: ${dental.length}</h2>`);

// PRIMERA Y ÚLTIMA ATENCIÓN PACIENTES

document.write(`<h4>PRIMERA ATENCIÓN: ${radiologia[0].Paciente} -- ${radiologia[0].Previsión} | ÚLTIMA ATENCIÓN: ${radiologia[radiologia.length - 1].Paciente} -- ${radiologia[radiologia.length - 1].Previsión}</h4>`);
document.write(`<h4>PRIMERA ATENCIÓN: ${traumatologia[0].Paciente} -- ${traumatologia[0].Previsión} | ÚLTIMA ATENCIÓN: ${traumatologia[traumatologia.length - 1].Paciente} -- ${traumatologia[traumatologia.length - 1].Previsión}</h4>`);
document.write(`<h4>PRIMERA ATENCIÓN: ${dental[0].Paciente} -- ${dental[0].Previsión} | ÚLTIMA ATENCIÓN: ${dental[dental.length - 1].Paciente} -- ${dental[dental.length - 1].Previsión}</h4>`);

