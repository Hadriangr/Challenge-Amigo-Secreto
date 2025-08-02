// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let amigoSecreto = null;

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();
  
  if (nombre === '') return;
  
  if(listaDeAmigos.includes(nombre)) {
    asignarTextoElemento('p', 'Este nombre ya está en la lista');
    input.value = '';
    return; 
  }

  listaDeAmigos.push(nombre);
  input.value = '';

  listaDeAmigos = listaDeAmigos.length > 10 ? listaDeAmigos.slice(0, 10) : listaDeAmigos;
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
    asignarTextoElemento('p', 'Amigo añadido correctamente');
}

function sortearAmigo() {
    // Verificar que hay al menos 2 amigos
    if (listaDeAmigos.length < 2) {
        asignarTextoElemento('p', 'Debe haber al menos 2 amigos para sortear');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
    // Seleccionar el amigo secreto
    amigoSecreto = listaDeAmigos[indiceAleatorio];
    
    // Mostrar el resultado en la lista de resultados
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = `<li> El amigo secreto sorteado es: <strong>${amigoSecreto}</strong></li>`;
    
}

function eliminarTodosLosAmigos() {
    listaDeAmigos = [];
    amigoSecreto = null;
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}