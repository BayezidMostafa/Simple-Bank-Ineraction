// Step-1: Adding click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step-2: Get the email address inside the email input field
    // Always remember to use .value to get value from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step-3: Get the password from input field and get the value from password input
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // Danger!!!
    // Do not verify email password on the clint side
    // Step-4: verify email and password
    if(email === 'hiperx1@gmail.com' && password === 'NEKbay1120134567'){
        window.location.href= 'bank.html';
    }
    else{
        alert('Tore Khayalam');
    }
})