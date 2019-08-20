class EventBrite {
    constructor(){
        this.token_auth = '4MQC4SMYPUILE7RWNUX5';
        this.ordenar = 'date';
    }
    //Obtiene las categorias en init()
    async obtenerCategorias(){
        //Consultar las categorias a la REST API de vent brite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        //Esperar la respuesta de las categorias y devolver un JSON
        const categorias = await respuestaCategorias.json();

        //Devolver el resultado
        return { categorias }

    }
}