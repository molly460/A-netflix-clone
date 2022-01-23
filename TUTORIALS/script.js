const SIGN = document.getElementById("but");
const SIGNUP = document.getElementById("my-Form");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

const msg = document.getElementById('msg');
SIGN.addEventListener('click', () => {

loginForm();


});


function loginForm() {
    const Login = document.getElementById("my-Form").style.display ="block";
}

const x = document.getElementById("last-btn").addEventListener("click", () => {

    formValidation();
  

});

function formValidation() {
    
  
if (emailInput.value === "" || passwordInput ===""){
    msg.classList.add('error');
   msg.innerHTML = 'please enter a valid email and password'; 
   setTimeout(() => msg.remove(), 3000);

} else {
    console.log('success');
}



}


