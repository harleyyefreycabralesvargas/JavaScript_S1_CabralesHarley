//################################# 
// Proyecto de python en JavaScript
//#################################

import * as camper from "./campers.js";
import * as scrip from "./script.js";

//1 menu sobre que se desea hacer el usuario
export function menuiniciou(){
    let iniciou = prompt('####################\n' +
    ' Que quieres hacer\n' +
    '####################\n' +
    '1. iniciar sesion\n' +
    '2. registrarse\n'+
    "3. finalizar")
return iniciou;
};
//menu para el registro de un nuevo camper
export function registrocamperc() {
    let campnomn=prompt("dame tu nombre")
    let campapen=prompt("dame tu apellido")
    let campdirn=prompt("dame tu direccion")
    let campacun=prompt("dame el nombre y apellido de tu acudiente")
    let campteln=prompt("dame tu telefono")
    let campconn=prompt("establece tu contraseña")
    let campestn="inscrito"
return campnomn,campapen,campdirn,campacun,campteln,campconn,campestn;
alert("hola "+campnomn+" "+ campapen+" estas en estado de "+ campestn +", tu id es "+camper.campers.length + " y tu contraseña es "+campconn+", recuerdalos");
};
//menu para saber a cual rol se desea acceder
export function menuidentificacionu() {
    let identificadoru = prompt('####################\n' +
        ' cual es tu rol\n' +
        '####################\n' +
        '1. camper\n' +
        '2. trainer\n' +
        '3. coordinador')
    return identificadoru;
};
//inicio de sesion para campers
export function camperinicioc(){
    let campiniic=prompt("cual es tu id")


    let campinicc=prompt("cual es tu contraseña")


};
//menu de opciones de los campers
export function campermenuc() {
    let camperc = prompt('####################\n' +
        'hola camper\n' +
        '####################\n' +
        '1. ver tu informacion\n' +
        '2. ver tus notas\n'+
        "3. ver tu horario y salon asignado\n"+
        "4. cerrar sesion");
    return camperc;
};
//menu de opcines de los trainers
export function trainermenut() {
    let trainert = prompt('####################\n' +
        'hola trainer que deseas hacer\n' +
        '####################\n' +
        '1. ver tu informacion\n' +
        "2. ver tus estudiantes\n"+
        '3. cerrar sesion');
    return trainert;
};
//Desarrollado por : Harley Yefrey Cabrales Vargas T.I. 1095803005