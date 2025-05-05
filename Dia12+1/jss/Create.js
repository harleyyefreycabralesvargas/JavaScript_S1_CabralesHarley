function gethomo() {
    let link = `https://6814358a225ff1af16282ac0.mockapi.io/CRUD/Tareas`;
    axios.get(link)
    .then((response) => {
        if (response.status == 200) {
            console.log(response);
            console.log(response["data"][0]);
        }
    });
}
gethomo();

function posthomo(task,status) {
    let link = `https://6814358a225ff1af16282ac0.mockapi.io/CRUD/Tareas`;
    axios.post(link, {
        "task": task,
        "status": status
    }
    
    )
    .then((response) => {
        document.getElementById("formulario").reset();
    })
}

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    let link = `https://6814358a225ff1af16282ac0.mockapi.io/CRUD/Tareas`;
    axios.get(link)
    .then((response) => {
        if (response.status == 200) {
            console.log(response);
            console.log(response["data"]);
            let listica=(response["data"].length)
            let task = document.getElementById("task").value;
            let status = document.getElementById("status").value;
            let veremos=document.getElementById("verr")
            let i=1
            for(i=0;i<listica;i++){
                console.log(response["data"][i]["task"])
            veremos.innerHTML=`${veremos.innerHTML}
            <div id="conteiner${i}"><h1 id="tarea${i}">${response["data"][i]["task"]}</h1>  <button>
            flecha
        </button>   
        <button>
            papelera
        </button> </div>
            `
            }
            posthomo(task,status);
        }
    });
  
});














function deletehomo(identificador) {
    axios.delete(`https://6814358a225ff1af16282ac0.mockapi.io/CRUD/Tareas/${identificador}`)
}

document.getElementById(`"tarea${}"`).addEventListener("click", function(e) {
    e.preventDefault();
    let identificador=document.getElementById("").value;

    deletehomo(identificador);
});


