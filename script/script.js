document.getElementById('login-btn').addEventListener('click', function () {
    const numberInput = document.getElementById('number-input');
    const Number = numberInput.value;
    // console.log(Number);
    const inputPassword = document.getElementById('input-password')
    const password = inputPassword.value;
    // console.log(password);
    if (Number == "01923679015" && password == "1234") {
        alert("login Successfully");
        window.location.assign("/home.html");
    }
    else {
        alert('Login Failed');
        return;
    }

})