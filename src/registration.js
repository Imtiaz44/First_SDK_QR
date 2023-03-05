const registerForm = document.getElementById("register-form");
const registerButton = document.getElementById("register-form-submit");
const registerErrorMsg = document.getElementById("register-error-msg");

registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = registerForm.username.value;
    const password = registerForm.password.value;

    if (username === "user" && password === "1234") {

        //alert("You have successfully added DB");
        var aname = prompt("Enter Alias name");
          //var aname = 'imtiaz';
        alert("ALIAS is"   + aname )  ;



        //location.reload();
    window.location.replace("welcome.html");



    } else {
        registerErrorMsg.style.opacity = 1;
    }
})

