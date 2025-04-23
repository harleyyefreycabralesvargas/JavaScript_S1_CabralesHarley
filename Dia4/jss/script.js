function fetchPoke(){
    let xhr = new XMLHttpRequest();
    let numPokemon= document.getElementById("numpokehtml").value;
    let link= `https://pokeapi.co/api/v2/pokemon/${numPokemon}`;
    xhr.open('GET',link,true);
    xhr.onreadystatechange = function(){
        if(this.status ==200){
            let respuesta = JSON.parse(this.responseText);
            displayPoken(respuesta);
            displayPokef(respuesta);
        }
    };
    xhr.send();
}

document.getElementById("numpokehtml").addEventListener("input",function(){
    if(this.value !==""){
        fetchPoke();
    }
});

function displayPoken(data){
    let nombrepokeHTML = document.getElementById('nombritos');
    if(data.response == "error"){
        nombrepokeHTML.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
    }else{
        nombrepokeHTML.innerHTML=`
        <h2><span class="num"> ${data["id"]} -</span> ${data["name"]}</h2>
         `
    }
}

function displayPokef(data){
    let fotopokeHTML = document.getElementById('foticos');
    if(data.response == "error"){
        fotopokeHTML.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
    }else{
        fotopokeHTML.innerHTML=`
        <img src=${data["sprites"]["other"]["showdown"]["front_default"]} />
        `
    }
}
document.getElementById("botons").addEventListener("click", function () {
    let input = document.getElementById("numpokehtml");
    let value = parseInt(input.value);
    if (!isNaN(value)) {
        input.value = value + 1;
        fetchPoke();
    }
});

document.getElementById("botona").addEventListener("click", function () {
    let input = document.getElementById("numpokehtml");
    let value = parseInt(input.value);
    if (!isNaN(value) && value > 1) {
        input.value = value - 1;
        fetchPoke();
    }
});
