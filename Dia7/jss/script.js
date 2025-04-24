function fetch21(){
    let xhr = new XMLHttpRequest();
    let link= `https://deckofcardsapi.com/api/deck/new/draw/?count=2`;
    xhr.open('GET',link,true);
    xhr.onreadystatechange = function(){
        if(this.status ==200){
            
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta)
            displayPoken(respuesta)
            
        }
    };
    xhr.send();
    
}
fetch21();
function displayPoken(data){
    let nombrepokeHTML = document.getElementById('jugador');
    if(data.response == "error"){
        nombrepokeHTML.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`;
    }else{
        nombrepokeHTML.innerHTML=`
        <h2><span class="num"> ${data["cards"]["1"]["value"]} -</h2>
        <img src="${data["cards"]["1"]["images"]["png"]}">
        `
    }
}
