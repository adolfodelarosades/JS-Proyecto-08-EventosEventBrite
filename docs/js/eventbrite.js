class EventBrite {
    constructor(){
        this.token_auth = '4MQC4SMYPUILE7RWNUX5';
        this.ordenar = 'date';
    }
    async obtenerCategorias(){
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
        const categorias = await respuestaCategorias.json();
        return { categorias }
    }    
    async obtenerEventos(evento, categoria){
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);
        const eventos = await respuestaEvento.json();
        return { eventos }
    }
}
