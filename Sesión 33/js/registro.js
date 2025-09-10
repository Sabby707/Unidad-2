document.getElementById("btn-registrar").addEventListener("click", function () {
  // capturar datos del formulario
  let nombre = document.getElementById("registerName").value.trim();
  let email = document.getElementById("registerEmail").value.trim();
  let password = document.getElementById("registerPassword").value.trim();

  // validación básica
  if (!nombre || !email || !password) {
    alert("⚠️ Por favor completa todos los campos.");
    return;
  }

  // traer usuarios guardados
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // evitar correos duplicados
  let existe = usuarios.some(u => u.email === email);
  if (existe) {
    alert("❌ Este correo ya está registrado.");
    return;
  }

  // crear usuario nuevo
  let nuevoUsuario = { nombre, email, password };
  usuarios.push(nuevoUsuario);

  // guardar en localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  console.log("Usuarios registrados:", usuarios);

  // limpiar formulario
  document.getElementById("registerName").value = "";
  document.getElementById("registerEmail").value = "";
  document.getElementById("registerPassword").value = "";

  // cerrar modal correctamente
  const registerModalElement = document.getElementById("registerModal");
  const registerModal = bootstrap.Modal.getInstance(registerModalElement);
  registerModal.hide();

  // mensaje de confirmación
  alert("✅ Usuario registrado con éxito.");
});
