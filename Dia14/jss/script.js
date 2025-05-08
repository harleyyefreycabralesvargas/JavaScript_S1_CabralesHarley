function gethomo() {
    let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/heroes`;
    axios.get(link)
    .then((response) => {
        if (response.status == 200) {
            console.log(response);
            console.log(response["data"][0]);
        }
    });
}
gethomo();

function posthomo(nombre_personaje, nombre_actor, edad, ubicacion, poster, fecha_de_nacimiento, compania,iterador) {
    let link = `https://6818a3115a4b07b9d1d019f3.mockapi.io/heroes`;
    axios.post(link, {
        "Name": nombre_personaje,
        "Actor": nombre_actor,
        "Age": edad,
        "Location": ubicacion,
        "Poster":poster,
        "Date":fecha_de_nacimiento,
        "Company":compania,
        "Skin":[iterador]
        
    })
    .then((response) => {
        console.log(response)
        document.getElementById("formularioHeroe").reset();
    })
}

document.getElementById("formularioHeroe").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre_personaje = document.getElementById("personaje").value;
    let nombre_actor = document.getElementById("actor").value;
    let edad = document.getElementById("edad").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let poster = document.getElementById("poster").value;
    let fecha_de_nacimiento = document.getElementById("fecha").value;
    let compania = document.getElementById("productora").value;
    let count = 0;
    let iterador = {};

    for (let i = 1; document.getElementById(`numerito_${i}`) !== null; i++) {
        count++;
        let elemento = document.getElementById(`numerito_${i}`);

        iterador += {i:elemento.value}
    }

    posthomo(nombre_personaje, nombre_actor, edad, ubicacion, poster, fecha_de_nacimiento, compania, iterador);
});
let numerito = 0;
document.getElementById("boton_mas").addEventListener("click", function(e) {
    e.preventDefault();
    numerito++;

    let nuevo = document.getElementById("registro_trajes");

    let xd = `<br>
    <div class="traje_nuevo">
            <p>Nombre traje</p>
            <input id="numerito_${numerito}"type="text">
            <button type="button" class="eliminar">-</button>}
    </div>`;
    nuevo.insertAdjacentHTML("beforeend", xd);
});

function posthomo2(name_skins){
    let skinzzz = name_skins
}