function gethero() {
    let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/heroes`;
    axios.get(link)
    .then((response) => {
        if (response.status == 200) {
            console.log(response);
            console.log(response["data"][0]);
            let mostrar=document.getElementById("seleccion")            
            let xd = ``
            for (let i=0;i<response["data"].length;i++){
                xd += `<option>${response["data"][i]["Name"]} - ${response["data"][i]["Actor"]}</option>`
                console.log(response["data"][i]["Name"])
            }
            mostrar.innerHTML = xd
        }
    });
}
gethero();
document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();
    let valor = document.getElementById("seleccion").value
    let division = document.getElementById("ver_heroes")
    let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/heroes`
    axios.get(link)
    .then((response)=>{
        for (let i=0;i<response["data"].length;i++){
            console.log(response["data"][i]["Skin"])
            let trajecitos = ``
            if (`${response["data"][i]["Name"]} - ${response["data"][i]["Actor"]}`==valor){
                
                for (let q=0; q<response["data"][i]["Skin"].length;q++){
                    trajecitos += `${response.data[i].Skin[q].iterador}`
                    console.log(response.data[i].Skin[q].iterador)
                    console.log("hola")
                }
                division.innerHTML = `
                <img src="${response.data[i].Poster}" class="info1">
                <p class="info2" >${response.data[i].Name}</p>
                <p class="info3" >${response.data[i].Actor}</p>
                <p class="info4" >${response.data[i].Age}</p>
                <p class="info5" >${response.data[i].Location}</p>
                <p class="info6" >${response.data[i].Date}</p>
                <p class="info7" >${response.data[i].Company}</p>
                <p class="info8" >Trajes: ${trajecitos}</p>
                <p class="info9" >${response.data[i].id}</p>`
            } 
        }
        
    })
})