document.addEventListener('DOMContentLoaded', () => {
    // Obtener los elementos de los modales de Bootstrap
    const loginModalElement = document.getElementById('loginModal');
    const registerModalElement = document.getElementById('registerModal');

    // Instanciar los modales
    const loginModal = new bootstrap.Modal(loginModalElement);
    const registerModal = new bootstrap.Modal(registerModalElement);

    // Obtener los botones que cambian de modal
    const openLoginBtn = document.getElementById('open-login-modal');
    const btnLoginToRegister = document.getElementById('btn-login-to-register');
    const btnRegisterToLogin = document.getElementById('btn-register-to-login');

    // Asignar eventos
    openLoginBtn.addEventListener('click', () => {
        loginModal.show();
    });

    btnLoginToRegister.addEventListener('click', () => {
        loginModal.hide();
        registerModal.show();
    });

    btnRegisterToLogin.addEventListener('click', () => {
        registerModal.hide();
        loginModal.show();
    });
});
