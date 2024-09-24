function validateForm(event) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('Please fill in both fields.');
        event.preventDefault(); // Prevent form submission if validation fails
    }
}

window.onload = function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    } else {
        console.error('Form element not found.');
    }
}
