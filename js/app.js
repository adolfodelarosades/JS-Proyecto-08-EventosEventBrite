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
        console.log('Buscando...');
    }else{
        console.log('Incica lo que deseas buscar.');
    }
});