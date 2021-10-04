// VARIABLES PARA OBTENER LA FECHA 
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');


// VARIABLES A UTILIZAR
const taskText = document.getElementById('taskText');
const agregarTarea = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas');
const mensajeVacio = document.getElementById('mensajeVacio');
const eliminarTarea = document.getElementById('eliminarTareas');

// Contenedor de tareas
const tasksContainer = document.getElementById('tasksContainer');

// FUNCION PARA MOSTRAR LA FECHA ACTUAL
const setDate = () => {

    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'long' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};


// AGREGANDO UNA NUEVA TAREA

agregarTarea.addEventListener('click', (e) => {

    //Evitar que no se recargue la pagina
    e.preventDefault();

    const texto = taskText.value;

    // Validando que el valor del input no este en blanco 
    if(texto !== ""){
        const li = document.createElement("li");
        const p = document.createElement("p");

        p.textContent = texto;

        li.appendChild(p);
        li.appendChild(agregarBtnEliminar());
        listaTareas.appendChild(li);


        taskText.value = ""; 

        mensajeVacio.style.display = "none"
    }
    
})


// ELIMINANDO TAREA
function agregarBtnEliminar() {

    const btnEliminar = document.createElement('button');

    btnEliminar.textContent = "X";
    btnEliminar.className = "eliminarTarea";

    btnEliminar.addEventListener('click', (e) => {

        // Eliminando la tarea especifica
        const item = e.target.parentElement;
        listaTareas.removeChild(item); 

        const items = document.querySelectorAll('li');

        /* Validando que al eliminar vaciar la lista, se muestre el mensaje de "No quedan tareas por hacer" */

        if(items.length === 0) {
            mensajeVacio.style.display = "flex";
        }
    });

    return btnEliminar;
}


// ELIMINANDO TODAS LAS TAREAS
eliminarTarea.addEventListener('click', (e) => {

    //Evitar que no se recargue la pagina
    e.preventDefault();

    // Eliminando todos los hijos de un elemento
    while (listaTareas.firstChild) {
        listaTareas.removeChild(listaTareas.firstChild);
    }
    
    const items = document.querySelectorAll('li');

    /* Validando que ala eliminar vaciar la lista, se muestre el mensaje de "No quedan tareas por hacer" */
    if(items.length === 0) {
        mensajeVacio.style.display = "flex";
    }
})

setDate();