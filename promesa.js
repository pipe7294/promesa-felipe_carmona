async function obtenerDatos() {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    try {

        const respuesta = await fetch(url);
        const datos = await respuesta.json();


        datos.slice(0, 20).forEach((album, index) => {
            console.log(`${index + 1}. ${album.title}`);
        });
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}


function promesaDe3Segundos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000);
    });
}


async function mostrarMensaje() {
    const mensaje = await promesaDe3Segundos();
    console.log(mensaje);
}


async function ejecutarPrograma() {
    await obtenerDatos();
    await mostrarMensaje();
}


ejecutarPrograma();
