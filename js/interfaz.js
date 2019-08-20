class Interfaz {
    constructor(){
        //Inicializa la app al instanciar
        this.init();
        //Leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }
    //Método para cuando se inicialice la app
    init(){

    }
    //Imprimir categorias
    imprimirCategorias(){
        const listaCategorias = eventbrite.obtenerCategorias();
    }
}