document.getElementById('mainForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const icon = emailInput.nextElementSibling; 
    const messageElement = emailInput.parentElement.nextElementSibling; 

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        icon.className = "fas fa-check-circle";
        icon.style.color = "green";
        emailInput.style.borderColor = "green";
        messageElement.textContent = `Se envió un código al correo ${email}`;
        messageElement.style.color = "green";

        document.getElementById('codeModal').style.display = 'flex';
    } else {
        icon.className = "fas fa-exclamation-circle";
        icon.style.color = "red";
        emailInput.style.borderColor = "red";
        messageElement.textContent = "Por favor, introduce un correo electrónico válido.";
        messageElement.style.color = "red";
    }
});

document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const codeInput = document.getElementById('code');
    const code = codeInput.value.trim();
    const icon = codeInput.nextElementSibling;
    const messageElement = codeInput.parentElement.nextElementSibling;

    if (/^\d{6}$/.test(code)) {
        icon.className = "fas fa-check-circle";
        icon.style.color = "green";
        codeInput.style.borderColor = "green";
        messageElement.textContent = "El código es válido.";
        messageElement.style.color = "green";

        document.getElementById('codeModal').style.display = 'none';
        document.getElementById('resetModal').style.display = 'flex';
    } else {
        icon.className = "fas fa-exclamation-circle";
        icon.style.color = "red";
        codeInput.style.borderColor = "red";
        messageElement.textContent = "El código debe tener 6 dígitos.";
        messageElement.style.color = "red";
    }
});

document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const newPassword = newPasswordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const icon = confirmPasswordInput.nextElementSibling;
    const messageElement = confirmPasswordInput.parentElement.nextElementSibling;

    if (newPassword === confirmPassword && newPassword.length >= 8) {
        icon.className = "fas fa-check-circle";
        icon.style.color = "green";
        confirmPasswordInput.style.borderColor = "green";
        newPasswordInput.style.borderColor = "green";
        messageElement.textContent = "La contraseña ha sido restablecida exitosamente.";
        messageElement.style.color = "green";


        setTimeout(function() {
            document.getElementById('resetModal').style.display = 'none';
        }, 2000);
    } else {
        icon.className = "fas fa-exclamation-circle";
        icon.style.color = "red";
        confirmPasswordInput.style.borderColor = "red";
        newPasswordInput.style.borderColor = "red";
        messageElement.textContent = newPassword !== confirmPassword ? 
            "Las contraseñas no coinciden." : 
            "La contraseña debe tener al menos 8 caracteres.";
        messageElement.style.color = "red";
    }
});

// Cerrar los modales cuando se hace clic en la 'X'
document.querySelectorAll('.close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

