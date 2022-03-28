const Sign = document.querySelector(".sign-in-btn");
const Signup = document.getElementById("Form-input");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const msg = document.getElementById('msg');
Sign.addEventListener('click', () => {


  loginForm();

});



function loginForm() {
    const Login = document.getElementById("Form-input").style.display ="block";
}


const form = document.getElementById('last-btn').addEventListener('click', event => {
  event.preventDefault();


  if (emailInput.value === '' || passwordInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'please fill the input boxes with  a valid email and password';
   
    setTimeout(() => msg.remove(), 3000);
      
  }else{
    console.log('success!');
  }
});

