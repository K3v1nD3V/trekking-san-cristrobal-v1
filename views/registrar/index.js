document.getElementById('mainForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmemail');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmpassword');

    let isValid = true;

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'El nombre es obligatorio');
        isValid = false;
    } else {
        showSuccess(nameInput);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'El email es obligatorio');
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, 'Introduce un email válido');
        isValid = false;
    } else {
        showSuccess(emailInput);
    }

    if (confirmEmailInput.value.trim() === '') {
        showError(confirmEmailInput, 'Confirmar email es obligatorio');
        isValid = false;
    } else if (emailInput.value.trim() !== confirmEmailInput.value.trim()) {
        showError(confirmEmailInput, 'Los emails no coinciden');
        isValid = false;
    } else {
        showSuccess(confirmEmailInput);
    }

    if (passwordInput.value.trim() === '') {
        showError(passwordInput, 'La contraseña es obligatoria');
        isValid = false;
    } else if (passwordInput.value.trim().length < 8) {
        showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres');
        isValid = false;
    } else {
        showSuccess(passwordInput);
    }

    if (confirmPasswordInput.value.trim() === '') {
        showError(confirmPasswordInput, 'Confirmar contraseña es obligatorio');
        isValid = false;
    } else if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
        showError(confirmPasswordInput, 'Las contraseñas no coinciden');
        isValid = false;
    } else {
        showSuccess(confirmPasswordInput);
    }

    if (isValid) {
        alert('Registro exitoso');
        this.submit(); 
    }
});

function showError(input, message) {
    const formControl = input.parentElement;
    const icon = formControl.querySelector('.icon');
    const small = formControl.querySelector('small');

    if (!small) {
        const errorMessage = document.createElement('small');
        errorMessage.style.color = 'red';
        errorMessage.textContent = message;
        formControl.appendChild(errorMessage);
    } else {
        small.textContent = message;
    }

    icon.className = 'fas fa-exclamation-circle';
    icon.style.color = 'red';
    input.style.borderColor = 'red';
}

function showSuccess(input) {
    const formControl = input.parentElement;
    const icon = formControl.querySelector('.icon');
    const small = formControl.querySelector('small');

    if (small) {
        formControl.removeChild(small);
    }

    icon.className = 'fas fa-check-circle';
    icon.style.color = 'green';
    input.style.borderColor = 'green';
}