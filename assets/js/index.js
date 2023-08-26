const listaDeTareas = document.querySelector("#tareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
const tareas = [
    {id:1,nombre:"Conquistar el mundo",completada:false},
    {id:2,nombre:"Ir al baño",completada:false},
    {id:3,nombre:"Comprar comida",completada:false}
];
let id = 3;
let sumar = 0;
const completadaTarea = document.querySelector("#checkeadas");
const total = document.querySelector("#totalTareas");
renderTareas();

btnAgregar.addEventListener("click",() => { //boton de agregar a la lista
    //agregamos la tarea al arreglo
        
        id += 1;
        const nuevaTarea = {id: id, nombre: tareaInput.value,completada:false};
        tareas.push(nuevaTarea);
        tareaInput.value = "";
        renderTareas();
    })
function renderTareas(){ //actualizar la info en el HTML
    let template = "";
    for (let tarea of tareas) {
        template += `
        <tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
        <td><input type="checkbox" ${tarea.completada ? "checked": ""} onchange="checkbox(${tarea.id}, this.checked)"></td>
        <td><button onclick="borrar(${tarea.id})"> X </button></td>
        </tr>
    `
    ;}
    const totalCheckbox = tareas.filter((tarea) =>{ //filtro para las tareas completadas
        return tarea.completada == true;
    })
    listaDeTareas.innerHTML = template;
    total.innerHTML = tareas.length;
    completadaTarea.innerHTML = totalCheckbox.length;
}
function borrar(id){ //borrar la lista
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1)
    renderTareas();
}
function checkbox(id, completada){ //cambiar el estado del checkbox
    const tarea = tareas.find((ele) => ele.id === id);
    if(tarea){
        tarea.completada = completada;
    }
    renderTareas();
}
