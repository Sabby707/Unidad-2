// Objeto usuario
let usuario = {
  nombre: "",
  edad: 0,
  sexo: ""
};

// Función para enviar datos del formulario
function enviar() {
  let formulario = document.getElementById("usuario");

  usuario.nombre = formulario.nombre.value;
  usuario.edad = formulario.edad.value;
  usuario.sexo = formulario.sexo.value || "No seleccionado";

  console.log("Usuario desde formulario:", usuario);

  // Mostrar en HTML
  let lista = document.getElementById("datos");
  lista.innerHTML = `
    <li><b>Nombre:</b> ${usuario.nombre}</li>
    <li><b>Edad:</b> ${usuario.edad}</li>
    <li><b>Sexo:</b> ${usuario.sexo}</li>
  `;
}

// Mostrar heroes en consola
console.log("Objeto heroes:", heroes);
console.log("Nombre del squad:", heroes.squadName);
console.log("Primer miembro:", heroes.members[0]);
console.log("Poderes del primer miembro:", heroes.members[0].powers);

// Función para cargar usuarios desde un JSON
async function cargarUsuarios() {
  const respuesta = await fetch("usuarios.json");
  const datos = await respuesta.json();
  console.log("Usuarios del archivo JSON:", datos);

  let listaUsuarios = document.getElementById("usuarios");
  listaUsuarios.innerHTML = datos.map(
    u => `<li>${u.nombre} (${u.edad} años)</li>`
  ).join("");
}

// Ejecutar carga de JSON al abrir la página
cargarUsuarios();
