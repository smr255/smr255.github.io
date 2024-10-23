// Manejar el inicio de sesión
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = event.target[0].value;
        const password = event.target[1].value;

        // Simulación de inicio de sesión
        if (username && password) {
            alert(`Iniciando sesión como ${username}...`);
            // Redirigir a contenido.html
            window.location.href = 'contenido.html';
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
}

// Manejar el clic en "¿Olvidaste tu contraseña?"
const forgotPasswordLink = document.getElementById('forgot-password');
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el enlace recargue la página
        alert('Juanjo, eres tonto?');
    });
}

// Manejar el registro
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = event.target[0].value;
        const password = event.target[1].value;
        const confirmPassword = event.target[2].value;

        // Validación de campos
        if (username && password && confirmPassword) {
            if (password === confirmPassword) {
                alert('Registrado con éxito!');
                window.location.href = 'index.html';
            } else {
                alert('Las contraseñas no coinciden.');
            }
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
}
