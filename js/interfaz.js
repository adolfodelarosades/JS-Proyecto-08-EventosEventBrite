class Interfaz {
    constructor(){
        //Inicializa la app al instanciar
        this.init();
        //Leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }
    //Método para cuando se inicialice la app
    init(){
        //Llamar a imprimir categorias de la REST API
        this.imprimirCategorias();
    }
    //Imprimir categorias
    imprimirCategorias(){
        const listaCategorias = eventbrite.obtenerCategorias()
            .then( categorias => {
                //console.log( categorias );
                //console.log( categorias.categorias.categories );
                const cats = categorias.categorias.categories;
                //Seleccionar el select de categorias
                const selectCategoria = document.getElementById('listado-categorias');

                //Recorremos el arreglo e imprimimos los <option>
                cats.forEach( cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategoria.appendChild(option);
                });
            });
    }
    //Método para imprimir mensajes
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases;
        //Agregar texto
        div.appendChild(document.createTextNode(mensaje));
        //Buscar un padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);
        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
    }
    //Desaparecer el mensaje en caso de que exista
    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
    //Lee la respuesta de la API e imprime los resultados
    mostrarEventos(eventos){
        // Leer los eventos y agregarlos a una variable
        const listaEventos = eventos.events;
        //console.log(listaEventos);

        //Recorrer los eventos y crear su template
        listaEventos.forEach(evento => {
            let desc = evento.description.text;
            let cap = evento.capacity;
            desc = (desc !== null) ? desc.substring(0,280) + '...' : '';            
            cap = (cap !== null) ? cap : '';
        
            this.listado.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}">
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info">Información del evento</p>
                                <p>${desc}</p>
                                <span class="badge badge-primary">Capacidad: ${cap}</span>
                                <span class="badge badge-primary">Fecha y Hora: ${evento.start.local}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

        });
    }
    //Limpia los resultados previos
    limpiarResultados(){
        this.listado.innerHTML = '';
    }
}
