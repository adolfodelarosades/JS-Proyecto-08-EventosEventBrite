const eventbrite = new EventBrite();
const ui = new Interfaz();

document.getElementById('buscarBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    const textoBuscar = document.getElementById('evento').value;
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
    if(textoBuscar !== ''){
        eventbrite.obtenerEventos(textoBuscar, categoriaSeleccionada)
            .then(data => {
                if( data.eventos.events.length > 0){
                    ui.limpiarResultados();
                    ui.mostrarEventos(data.eventos);
                }else{
                    ui.mostrarMensaje('No existen resultados', 'alert alert-danger mt-4');
                }
            });
    }else{
        ui.mostrarMensaje('Escribe algo en "Buscar por Nombre o Ciudad"', 'alert alert-danger mt-4');
    }
});
