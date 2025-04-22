//################################# 
// Proyecto de python en JavaScript
//#################################

import * as menus from './menus.js';
import * as camper from "./campers.js";

let registroxs= menus.registrocamperc();
alert(registroxs +"hola");
registrocamperc;
/////////
//hacemos un while para que siempre se repita el programa hasta que no lo deseenos
let z1 = true;
while (z1==true){
    let riniciou= menus.menuiniciou();
    if (riniciou==3){
        z1=false;
    };
    if (riniciou==2){
        let registro=menus.registrocamperc();
    };
    if (riniciou==1){
    let rusuarior=menus.menuidentificacionu();
        if (rusuarior==1){
            let inicesc=menus.camperinicioc();
            for(let i=0;i<camper.campers.length;i++){
                if (camper.campers[i].id==menus.camperinicioc.campiniic)
                    console.log(camper.campers[i].id)
            };
        };
    };
};
//Desarrollado por : Harley Yefrey Cabrales Vargas T.I. 1095803005