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
}