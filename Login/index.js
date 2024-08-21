document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('mainForm');
    const name = document.getElementById('name');
    const password = document.getElementById('password');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (checkInputs()) {
            showModal();
        }
    });

    name.addEventListener('input', () => {
        validateField(name, name.value.trim() !== '', 'Debe ingresar su nombre');
    });


    password.addEventListener('input', () => {
        validateField(password, password.value.trim().length >= 8, 'La contraseña debe tener al menos 8 caracteres');
    });


    function checkInputs() {
        let isValid = true;
        validateField(name, name.value.trim() !== '', 'Debe ingresar su nombre');
        validateField(password, password.value.trim().length >= 8, 'La contraseña debe tener al menos 8 caracteres');

        document.querySelectorAll('.form-control').forEach((control) => {
            if (control.classList.contains('error')) {
                isValid = false;
            }
        });

        return isValid;

    }

    function validateField(input, condition, errorMessage) {
        if (condition) {
            setSuccess(input);
        } else {
            setError(input, errorMessage);
        }
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control error';
        icon.className = 'icon fas fa-times-circle';
        input.placeholder = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control success';
        icon.className = 'icon fas fa-check-circle';
    }


    function showModal() {
        const modal = document.getElementById('successModal');
        modal.style.display = 'block';

        const closeBtn = document.querySelector('.close-button');
        closeBtn.onclick = function () {
            modal.style.display = 'none';
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

});