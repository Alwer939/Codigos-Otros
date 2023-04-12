// El codigo de JavaScript obtendra informacion de una Api de github para obtener informacion de un usuario de github para 
// Mostrarlo en la pagina del html
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// las constantes siguientes son la posicion donde mandaremos la informacion del usuario
const $name = document.querySelector('.name');
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');

// La funcion no funcionaba hasta ser async por el await
async function displayUser(username) {
  $name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`)
  // Se le agrego los .then para mover la informacion y poder enviarla al doom
  .then(data => data.json())
  .then(informacion =>{
  // las 3 constantes tenian comillas simples (' ') en vez de comillas primas (` `)
    $name.textContent = `${informacion.name}`;
    $blog.textContent = `${informacion.blog}`;
    $location.textContent = `${informacion.location}`;
    // El textContent es el contenido de texto de las etiquetas
  });
  // console.log(response);
  // Se comento el console.log por ser innecesario al funcionar correctamente la funcion
}

// funcion para mostrar el mensaje de error
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // n no funcionaba por mala correlacion, se cambio por $name para que funcionara correctamente
  $name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);