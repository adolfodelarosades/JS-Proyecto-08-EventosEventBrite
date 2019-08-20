//Instanciar ambas clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

//Listener al buscador
document.getElementById('buscarBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    //console.log('Presionado...');

    //Leer el texto del input buscar
    const textoBuscar = document.getElementById('evento').value;

    //Leer el Select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    //Revisar que haya algo escrito en el buscador
    if(textoBuscar !== ''){
        //Cuando si hay una búsqueda
        eventbrite.obtenerEventos(textoBuscar, categoriaSeleccionada)
            .then(data => {
                if( data.eventos.events.length > 0){
                    //Limpiar resultados previos
                    ui.limpiarResultados();
                    //Si hay eventos mostrar el resultado
                    ui.mostrarEventos(data.eventos);
                }else{
                    //No hay eventos enviar una alerta
                    ui.mostrarMensaje('No existen resultados', 'alert alert-danger mt-4');
                }
            })
    }else{
        //Mostrar mensaje para que escriba algo en el buscador
        ui.mostrarMensaje('Escribe algo en "Buscar por Nombre o Ciudad"', 'alert alert-danger mt-4');
    }
});
